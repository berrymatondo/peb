import React, { useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import { useHistory } from "react-router-dom";

const baseUrl = process.env.REACT_APP_API_REGISTRATION;

const paperStyle = {
  padding: 20,
  //height: "70vh",
  width: "95%",
  maxWidth: 400,
  margin: "20px auto",
};
const avatarStyle = {
  backgroundColor: "#3F51B5",
};

const btnStyle = { margin: "30px 0" };

const SignUp = () => {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    creatUser();
  };

  const creatUser = async () => {
    await axios
      .post(baseUrl, {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
      })
      .then((res) => {
        history.push("/");
        /*       console.log("Retour:= ", res);
      console.log("Retour2:= ", res.data.jwtToken);

      history.push({
        pathname: "/orateurs",
        // search: "?query=abc",
        state: { token: res.data.jwtToken },
      }); */
      })
      .catch((error) => {
        console.log(error.response.data.message);
      });
  };

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleIcon />
          </Avatar>
          <h2>S'enregistrer</h2>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              required
              fullWidth
              id="firstName"
              label="Prénom"
              autoFocus
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              fullWidth
              id="lastName"
              label="Nom"
              name="lastName"
              autoComplete="lname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="password"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              name="confirmPassword"
              label="Confirmer le mot de passe"
              type="password"
              id="confirmPassword"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Grid>
        </Grid>
        <Button
          style={btnStyle}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleSubmit}
        >
          Soumettre
        </Button>

        <Typography variant="body2" align="left">
          Déjà inscrit ?
          <Link
            onClick={() => history.push("/login")}
            style={{ cursor: "pointer" }}
          >
            {" "}
            Connectez-vous{" "}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
