import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import { useHistory } from "react-router-dom";

const paperStyle = {
  padding: 20,
  height: "70vh",
  width: 280,
  margin: "20px auto",
};
const avatarStyle = {
  backgroundColor: "#3F51B5",
};

const btnStyle = { margin: "30px 0" };

const SignUp = () => {
  const history = useHistory();
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
            />
          </Grid>
        </Grid>
        <Button
          style={btnStyle}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
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
