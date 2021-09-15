import React, { useContext, useState } from "react";
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
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "./USerContext";

const baseUrl = process.env.REACT_APP_API_AUTH;

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
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const { user, setUser, tok, setTok } = useContext(UserContext);

  const handleSubmit = () => {
    console.log("username:", username);
    console.log("password:", password);
    setUsernameErr(false);
    setPasswordErr(false);
    if (username === "") {
      setUsernameErr(true);
    }

    if (password === "") {
      setPasswordErr(true);
    }

    auth();
  };

  const auth = async () => {
    await axios
      .post(baseUrl, {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("Retour:= ", res);
        console.log("Retour2:= ", res.data.jwtToken);

        setTok(res.data.jwtToken);
        setUser(username);

        history.push({
          pathname: "/",
          state: { token: res.data.jwtToken },
        });
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
            <LockIcon />
          </Avatar>
          <h2>Se connecter</h2>
        </Grid>
        <TextField
          label="Email"
          fullWidth
          placeholder="Entrer votre email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameErr}
          helperText={usernameErr ? "Ce champ est obligatoire" : ""}
        />
        <br />
        <br />

        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          placeholder="Entrer votre mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErr}
          helperText={passwordErr ? "Ce champ est obligatoire" : ""}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  //onChange={handleChange}
                  disabled
                  name="remember"
                  color="primary"
                  style={{
                    marginRight: "0px",
                  }}
                />
              }
              //label="Se souvenir de moi"
            />{" "}
            Se souvenir de moi
          </div>
          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Connexion
          </Button>
          <br />
          <Typography variant="body2" align="left">
            <Link>Mot de passe oublié ?</Link>
          </Typography>
          <br />
          <Typography variant="body2" align="left">
            Avez-vous déjà un compte ? Si non,
            <Link
              onClick={() => history.push("/signup")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              enregistrez-vous{" "}
            </Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;

/* import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Hidden,
  Typography,
  TextField,
  Snackbar,
} from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import React, { useState } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import axios from "axios";
import MuiAlert from "@material-ui/lab/Alert";

const baseUrl = process.env.REACT_APP_API_REGISTRATION;
//const baseUrl = process.env.REACT_APP_API_RESUMES;

const Login = () => {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [comments, setComments] = useState("");
  const [showError, setShowError] = useState(false);
  const [open, setOpen] = React.useState(false);

  const resetForm = () => {
    setFirstname("");
    setComments("");
    setShowError(false);
  };

  const handleContact = () => {
    console.log("Prénom=", firstname);
    console.log("Commentaires=", comments);
    console.log("baseUrl=", baseUrl);

    addComments();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addComments = async () => {
    await axios
      .post(baseUrl, {
        firstname: firstname,
        lastname: lastname,
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("Retour:= ", res);
        history.push("/signin");
        //resetForm();

        //setOpen(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Hidden mdUp>
        <div style={{ color: "white", display: "flex" }}>
          <div
            style={{ color: "white", display: "flex" }}
            onClick={() => history.goBack("/")}
          >
            <ArrowBackIosIcon
              style={{ paddingLeft: "0.5rem", paddingBottom: "5px" }}
            />
            <span style={{ fontSize: 15 }}>Retour</span>
          </div>

          <strong style={{ flexGrow: "1" }}>
            Plateforme d'Edification Biblique
          </strong>
        </div>
        <Grid container spacing={1} style={{ paddingTop: "0.5rem" }}>
          <Grid item xs={12} md={4}>
            <Card style={{}}>
              <CardActionArea>
                <CardContent
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    backgroundColor: "#f0f0f0",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="primary"
                  >
                    <strong>S'inscrire</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  ></Typography>
                  <br />

                  <form
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                      width: "100%",
                      backgroundColor: "#f0f0f0",
                    }}
                    noValidate
                    autoComplete="off"
                  >
                    {showError && (
                      <div style={{ color: "red", paddingBottom: "10px" }}>
                        Le prénom et le commentaire doivent être remplis
                      </div>
                    )}
                    <TextField
                      id="outlined-basic"
                      label="Prénom"
                      variant="outlined"
                      fullWidth
                      value={firstname}
                      placeholder="Prénom"
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                    <br />

                    <TextField
                      id="outlined-basic"
                      label="Nom"
                      variant="outlined"
                      fullWidth
                      value={lastname}
                      placeholder="Nom"
                      onChange={(e) => setLastname(e.target.value)}
                    />
                    <br />

                    <TextField
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      value={username}
                      placeholder="Nom"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />

                    <TextField
                      id="outlined-basic"
                      label="Mot de passe"
                      variant="outlined"
                      fullWidth
                      value={password}
                      placeholder="Entrer le mot de passe"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <br />

                    <TextField
                      id="outlined-basic"
                      label="Confirmation du mot de passe"
                      variant="outlined"
                      fullWidth
                      value={confirmPassword}
                      placeholder="Confirmer le mot de passe"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <br />
                  </form>
                </CardContent>
              </CardActionArea>
              <CardActions
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={handleContact}
                >
                  Envoyer
                </Button>
                <Button size="small" color="secondary" onClick={resetForm}>
                  Effacer
                </Button>
              </CardActions>
            </Card>

            <div
              style={{ color: "white", display: "flex" }}
              onClick={() => history.goBack("/")}
            >
              <ArrowBackIosIcon
                style={{ paddingLeft: "0.5rem", paddingTop: "5px" }}
              />
              <span style={{ fontSize: 15, paddingTop: "5px" }}>Retour</span>
            </div>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden smDown>
        <Grid container spacing={2} style={{ padding: "10rem" }}>
          <Grid item xs={12} md={4}>
            <Card style={{ maxWidth: 345, padding: "8px" }}>
              <CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: "8px", textalign: "center" }}>xs=6</Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper style={{ padding: "8px", textalign: "center" }}>xs=6</Paper>
          </Grid>
        </Grid>
      </Hidden>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <MuiAlert onClose={handleClose} severity="success">
          Votre commentaire a été enregistré!
        </MuiAlert>
      </Snackbar>
      ;
    </>
  );
};

export default Login;
 */
