import { Button } from "@material-ui/core";
import React from "react";
import axios from "axios";

//const baseUrl = "http://localhost:9050/peb/orateurs";
//const baseUrl = "https://pebback.herokuapp.com/peb/orateurs";
const baseUrl = process.env.REACT_APP_API_ORATEURS;

const DeleteOrateur = (props) => {
  // Delete cours
  const deleteOrateur = async () => {
    await axios
      .delete(baseUrl + "/delete/" + props.orateur.orateurId)
      .then((res) => {
        props.setOpenPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      Voulez-vous supprimer l'orateur{" "}
      <strong>
        {props.orateur.firstname} {props.orateur.lastname}
      </strong>{" "}
      ?
      <br />
      <br />
      <div align="right">
        <Button
          color="primary"
          variant="contained"
          onClick={() => deleteOrateur()}
        >
          Confirmer
        </Button>
        <Button
          color="secondary"
          style={{ marginLeft: "10px" }}
          onClick={() => props.setOpenPopup(false)}
        >
          Annuler
        </Button>
      </div>
    </div>
  );
};

export default DeleteOrateur;
