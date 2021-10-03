import React, { useState, useContext } from "react";
import axios from "axios";
import { Button, makeStyles, TextField, Paper } from "@material-ui/core";
import { UserContext } from "../USerContext";

const baseUrl = process.env.REACT_APP_API_ORATEURS;

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    width: 400,
    height: 400,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "5px",
  },
  inputMat: {
    width: "100%",
  },
  button: {
    marginLeft: "10px",
  },
  field: {
    marginBottom: "10px",
  },
  formControl: {
    minWidth: 70,
  },
}));

const EditOrateur = (props) => {
  const classes = useStyles();
  const orateurId = props.orateur.orateurId;
  const [lastname, setLastname] = useState(props.orateur.lastname);
  const [firstname, setFirstname] = useState(props.orateur.firstname);
  const { tok } = useContext(UserContext);

  // Add new cours
  const editOrateur = async () => {
    await axios
      .put(
        baseUrl + "update",
        {
          orateurId: orateurId,
          lastname: lastname,
          firstname: firstname,
        },
        { headers: { Authorization: `Bearer ${tok}` } }
      )
      .then((res) => {
        props.setOpenPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (lastname) {
      editOrateur();
    }
  };

  return (
    <Paper style={{ padding: "5px" }}>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setLastname(e.target.value)}
          className={classes.field}
          label="Nom"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          // error={titleError}
          value={lastname}
        />

        <TextField
          onChange={(e) => setFirstname(e.target.value)}
          className={classes.field}
          label="Prénom"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          // error={titleError}
          value={firstname}
        />

        <br />
        <br />
        <div align="right">
          <Button color="primary" variant="contained" type="submit">
            Confirmer
          </Button>
          <Button
            className={classes.button}
            onClick={() => props.setOpenPopup(false)}
            color="secondary"
          >
            Annuler
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default EditOrateur;
