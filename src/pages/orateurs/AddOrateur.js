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

const AddOrateur = ({ setOpenPopup }) => {
  const classes = useStyles();
  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const { tok } = useContext(UserContext);

  // Add new ortaeur
  const addOrateur = async () => {
    await axios
      .post(
        baseUrl + "add",
        {
          lastname: lastname,
          firstname: firstname,
        },
        {
          headers: { Authorization: `Bearer ${tok}` },
        }
      )
      .then((res) => {
        setOpenPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    /*     setTitleError(false);
    setDescriptionError(false);

    if (wording === "") {
      setTitleError(true);
    }

    if (year === "") {
      setDescriptionError(true);
    } */

    if (lastname) {
      console.log("lastname:", lastname);
      console.log("firstname:", firstname);

      addOrateur();
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
          value={lastname}
        />

        <TextField
          onChange={(e) => setFirstname(e.target.value)}
          className={classes.field}
          label="Pr??nom"
          variant="outlined"
          color="secondary"
          fullWidth
          required
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
            onClick={() => setOpenPopup(false)}
            color="secondary"
          >
            Annuler
          </Button>
        </div>
      </form>
    </Paper>
  );
};

export default AddOrateur;
