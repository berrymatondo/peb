import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Hidden,
  Typography,
  TextField,
} from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const Contact = () => {
  const history = useHistory();
  return (
    <>
      <Hidden mdUp>
        <div style={{ color: "white", display: "flex" }}>
          <div
            style={{ color: "white", display: "flex" }}
            onClick={() => history.push("/")}
          >
            <ArrowBackIosIcon style={{ paddingLeft: "0.5rem" }} />
            <span style={{}}>Retour</span>
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
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    <strong>Contact</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{ textAlign: "start" }}
                  >
                    Vous avez,un commentaire ou une suggestion, faites-le nous
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
                    <TextField
                      id="outlined-basic"
                      label="Prénom"
                      variant="outlined"
                      fullWidth
                    />
                    <br />

                    <TextField
                      id="outlined-multiline-static"
                      label="Commentaire/suggestion"
                      multiline
                      rows={4}
                      defaultValue="..."
                      variant="outlined"
                      fullWidth
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
                <Button variant="contained" size="small" color="primary">
                  Envoyer
                </Button>
                <Button size="small" color="secondary">
                  Effacer
                </Button>
              </CardActions>
            </Card>

            <div
              style={{ color: "white", display: "flex" }}
              onClick={() => history.push("/")}
            >
              <ArrowBackIosIcon style={{ paddingLeft: "0.5rem" }} />
              <span style={{}}>Retour</span>
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
    </>
  );
};

export default Contact;
