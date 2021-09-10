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

const Dashboard = () => {
  return (
    <>
      <Hidden mdUp>
        <div style={{ color: "white" }}>Plateforme d'Edification Biblique</div>
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
                    Etudes Bibliques du Midi
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{ textAlign: "start" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica.logdsfqf qfd qsdf sqd fsq f Cette rubriques donne
                    accès aux résumés de différentes
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
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    Cultes ICC
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{ textAlign: "start" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica.logdsfqf qfd qsdf sqd fsq f
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
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    color="primary"
                  >
                    Autres résumés
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    style={{ textAlign: "start" }}
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica.logdsfqf qfd qsdf sqd fsq f
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
