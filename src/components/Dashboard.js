import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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

import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";

const Dashboard = () => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      {/*       <Hidden mdUp>
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
                    différentes études bibliques réalisées au sein d'
                    <a target="_blank" href="https://impactcentrechretien.com/">
                      Impact Centre Chrétien
                    </a>{" "}
                    Bruxelles pendant les heures de midi.
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
                    des cultes dominicaux au sein de la famille{" "}
                    <a target="_blank" href="https://impactcentrechretien.com/">
                      Impact Centre Chrétien
                    </a>
                    .
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/cultes")}
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
                    <strong>Autres résumés</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Vous retrouverez ici d'autres résumés (non officels) de
                    différentes exhortations au sein de la famille{" "}
                    <a target="_blank" href="https://impactcentrechretien.com/">
                      Impact Centre Chrétien
                    </a>
                    . Exemple: Méga Impact conférence, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/autres")}
                >
                  Voir les résumés
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Hidden> */}
      {/* Full screnn
       */}{" "}
      <Hidden smDown>
        <div style={{ color: "white", fontSize: 15 }}>
          Plateforme d'Edification Biblique
        </div>
        <Grid
          container
          spacing={1}
          style={{
            paddingTop: "5rem",
            paddingLeft: "15rem",
            paddingRight: "15rem",
          }}
        >
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
                    différentes études bibliques réalisées au sein d'Impact
                    Centre Chrétien Bruxelles pendant les heures de midi.
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
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/cultes")}
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
                    <strong>Autres résumés</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Vous retrouverez ici d'autres résumés (non officels) de
                    différentes exhortations au sein de la famille Impact Centre
                    Chrétien. Exemple: Méga Impact conférence, ...
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  onClick={() => history.push("/autres")}
                >
                  Voir les résumés
                </Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} md={8}>
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
                    Chrétien. Exemple: Méga Impact conférence, ...
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
                    <strong>Espace Admin</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Vous retrouverez ici d'autres résumés (non officels) de
                    différentes exhortations au sein de la famille Impact Centre
                    Chrétien. Exemple: Méga Impact conférence, ...
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
      <Hidden mdUp>
        <Accordion
          square
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="primary"
            >
              <strong>Etudes Bibliques du Midi</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant="body1"
                style={{ textAlign: "start" }}
              >
                Cette rubrique donne accès aux résumés (non officels) de
                différentes études bibliques réalisées au sein d'
                <a target="_blank" href="https://impactcentrechretien.com/">
                  Impact Centre Chrétien
                </a>{" "}
                Bruxelles pendant les heures de midi.
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => history.push("/cultes")}
              >
                Voir les résumés
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          square
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="primary"
            >
              <strong>Cultes ICC</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant="body1"
                style={{ textAlign: "start" }}
              >
                Dans cette rubrique, vous trouverez les résumés (non officels)
                de différentes prédications qui ont eu lieu lors des cultes
                dominicaux au sein de la famille{" "}
                <a target="_blank" href="https://impactcentrechretien.com/">
                  Impact Centre Chrétien
                </a>
                .
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => history.push("/cultes")}
              >
                Voir les résumés
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>

        <Accordion
          square
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              color="primary"
            >
              <strong>Autres Résumés</strong>
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            style={{
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#f0f0f0",
            }}
          >
            <div>
              <Typography
                gutterBottom
                variant="body1"
                style={{ textAlign: "start" }}
              >
                Vous retrouverez ici d'autres résumés (non officels) de
                différentes exhortations au sein de la famille{" "}
                <a target="_blank" href="https://impactcentrechretien.com/">
                  Impact Centre Chrétien
                </a>
                . Exemple: Méga Impact conférence, ...
              </Typography>
              <Button
                variant="contained"
                size="small"
                color="primary"
                onClick={() => history.push("/cultes")}
              >
                Voir les résumés
              </Button>
            </div>
          </AccordionDetails>
        </Accordion>
      </Hidden>
    </>
  );
};

export default Dashboard;
