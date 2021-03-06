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
import React, { useContext } from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { useHistory } from "react-router-dom";
import { UserContext } from "./USerContext";

const About = () => {
  const history = useHistory();
  const { dark, backg } = useContext(UserContext);
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
            <span style={{ fontSize: 15, color: "yellow" }}>Retour</span>
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
                    // backgroundColor: "#f0f0f0",
                    backgroundColor: dark ? "#f0f0f0" : backg,
                    border: dark ? "" : "1px solid white",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="primary"
                  >
                    <strong style={{ color: dark ? "" : "yellow" }}>
                      A propos
                    </strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{
                      textAlign: "start",
                      //   border: dark ? "" : "1px solid white",
                      backgroundColor: dark ? "" : backg,
                      color: dark ? backg : "white",
                    }}
                  >
                    Etant appel??s ?? manifester nos dons et nos talents que le
                    Saint-Esprit a d??pos??s en nous, voici ma petite contribution
                    pour encore susciter le d??sir et la soif de lire la Parole
                    de Dieu, de la m??diter et de la propager ?? travers le monde
                    entier.
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    style={{
                      textAlign: "start",
                      //  border: dark ? "" : "1px solid white",
                      backgroundColor: dark ? "" : backg,
                      color: dark ? backg : "white",
                    }}
                  >
                    Le but de cette plateforme n'est pas de juste nous limiter ??
                    lire les diff??rents r??sum??s, mais de nous pousser ?? aller
                    encore plus loin, creuser, m??diter et vivre la Parole de
                    Dieu.
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    style={{
                      textAlign: "start",
                      //  border: dark ? "" : "1px solid white",
                      backgroundColor: dark ? "" : backg,
                      color: dark ? backg : "white",
                    }}
                  >
                    Vos conseils et suggestions sont les beinvenus. N'h??sitez
                    pas ?? nous{" "}
                    <strong
                      style={{ color: "#10035C", cursor: "pointer" }}
                      onClick={() => history.push("/contact")}
                    >
                      contacter
                    </strong>{" "}
                    pour cela.
                  </Typography>
                  <br />
                  <Typography
                    variant="body1"
                    style={{
                      // border: dark ? "" : "1px solid white",
                      backgroundColor: dark ? "" : backg,
                      color: dark ? backg : "white",
                    }}
                  >
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
              <span style={{ fontSize: 15, color: "yellow" }}>Retour</span>
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
