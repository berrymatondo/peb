import {
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

const baseUrl = process.env.REACT_APP_API_COMMENTS;
//const baseUrl = process.env.REACT_APP_API_RESUMES;

const Contact = () => {
  const history = useHistory();
  const [firstname, setFirstname] = useState("");
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
    if (firstname === "" || comments === "") {
      setShowError(true);
    } else addComments();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const addComments = async () => {
    await axios
      .post(baseUrl + "add", {
        comments: comments,
        firstname: firstname,
      })
      .then((res) => {
        resetForm();

        setOpen(true);
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
                    <strong>Contact</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Vous avez un commentaire ou une suggestion, faites-le nous
                    savoir afin d'améliorer cette plateforme et emmener la
                    Parole de Dieu aux quatre coins de terre.
                  </Typography>
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
                      id="outlined-multiline-static"
                      label="Commentaire/suggestion"
                      multiline
                      rows={4}
                      value={comments}
                      variant="outlined"
                      fullWidth
                      onChange={(e) => setComments(e.target.value)}
                    />
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

export default Contact;
