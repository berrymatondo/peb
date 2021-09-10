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
import { useHistory } from "react-router-dom";

const Dashboard = () => {
  const history = useHistory();
  return (
    <>
      <Hidden mdUp>
        <div style={{ color: "white", fontSize: 15 }}>
          Plateforme d'Edification Biblique
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
                    paddingBottom: "0px",
                    paddingTop: "1px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="primary"
                  >
                    <strong>Etudes Bibliques du Midi</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Cette rubrique donne accès aux résumés (non officels) de
                    différentes des études bibliques réalisées au sein d'Impact
                    Centre Chrétien Bruxelles.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/ebm")}
                >
                  Voir les résumés
                </Button>
              </CardActions>
            </Card>
          </Grid>

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
                    paddingBottom: "0px",
                    paddingTop: "1px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="primary"
                  >
                    <strong>Cultes ICC</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Dans cette rubrique, vous trouverez les résumés (non
                    officels) de différentes prédications qui ont eu lieu lors
                    des cultes dominicaux au sein de la famille Impact Centre
                    Chrétien.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" size="small" color="primary">
                  Voir les résumés
                </Button>
              </CardActions>
            </Card>
          </Grid>

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
                    paddingBottom: "0px",
                    paddingTop: "1px",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="h2"
                    color="primary"
                  >
                    <strong>Autres résumés</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Vous retrouverez ici d'autres résumés (non officels) de
                    différentes exhortations au sein de la famille Impact Centre
                    Chrétien. Exemple: Méga Icmpact conférence, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" size="small" color="primary">
                  Voir les résumés
                </Button>
              </CardActions>
            </Card>
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

export default Dashboard;
