import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Hidden,
  Typography,
} from "@material-ui/core";
import { Grid, Paper } from "@material-ui/core";
import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  return (
    <>
      <Hidden mdUp>
        <div style={{ color: "white", display: "flex" }}>
          <div
            style={{ color: "white", display: "flex" }}
            onClick={() => history.push("/")}
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
                    <strong>A propos</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Etant appelés à manifester nos dons et nos talents que le
                    Saint-Esprit a déposés en nous, voici ma petite contribution
                    pour encore susciter le désir et la soif de lire la Parole
                    de Dieu, de la méditer et de la propager à travers le monde
                    entier.
                  </Typography>
                  <br />
                  <Typography variant="body1" style={{ textAlign: "start" }}>
                    Le but de cette plateforme n'est pas de juste nous limiter à
                    lire les différents résumés, mais de nous pousser à aller
                    encore plus loin, creuser, méditer et vivre la Parole de
                    Dieu.
                  </Typography>
                  <br />
                  <Typography variant="body1" style={{ textAlign: "start" }}>
                    Vos conseils et suggestions sont les beinvenus. N'hésitez
                    pas à nous{" "}
                    <strong
                      style={{ color: "#10035C", cursor: "pointer" }}
                      onClick={() => history.push("/contact")}
                    >
                      contacter
                    </strong>{" "}
                    pour cela.
                  </Typography>
                  <br />
                  <Typography variant="body1">
                    Un amoureux de la Parole de Dieu.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <div
              style={{ color: "white", display: "flex", paddingTop: "5px" }}
              onClick={() => history.push("/")}
            >
              <ArrowBackIosIcon
                style={{ paddingLeft: "0.5rem", paddingBottom: "5px" }}
              />
              <span style={{ fontSize: 15 }}>Retour</span>
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

export default About;
