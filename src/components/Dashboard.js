import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Hidden,
  Typography,
} from "@material-ui/core";
import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { UserContext } from "../pages/USerContext";
import DashboardItem from "./DashboardItem";
import axios from "axios";

const Dashboard = () => {
  const history = useHistory();
  const { isUser, isAdmin, firstname } = useContext(UserContext);
  const content31 =
    "Vous retrouverez ici d'autres résumés (non officels) de différentes exhortations au sein de la famille ";
  const content32 = ". Exemple: Méga Impact conférence, ...";
  const content21 =
    "Dans cette rubrique, vous trouverez les résumés (non officels) de différentes prédications qui ont eu lieu lors des cultes dominicaux au sein de la famille ";
  const content22 = ".";
  const content11 =
    "Cette rubrique donne accès aux résumés (non officels) de différentes études bibliques réalisées au sein d'";
  const content12 = "Bruxelles pendant les heures de midi.";

  const baseUrl = process.env.REACT_APP_API_TOTAL;

  const [totalEbm, setTotalEbm] = useState(0);
  const [totalCulte, setTotalCulte] = useState(0);
  const [totalAutre, setTotalAutre] = useState(0);

  // Get all cours
  const getAllCours = async () => {
    /*  if (userId) {
        myBaseUrl = baseUrl + "ebm" + `/${userId}`;
      } else {
      } */

    await axios
      .get(baseUrl)
      .then((res) => {
        // console.log("Resumes:=", res.data);
        setTotalEbm(res.data.totalEbm);
        setTotalCulte(res.data.totalCulte);
        setTotalAutre(res.data.totalAutre);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    // console.log(location.pathname); // result: '/secondpage'
    // console.log(location.search); // result: '?query=abc'
    //console.log(location.state.token); // result: 'some_value'
    getAllCours();
  }, []);

  return (
    <>
      <Hidden smDown>
        <div style={{ color: "white", fontSize: 15 }}>
          Plateforme d'Edification Biblique
        </div>
        {(isUser || isAdmin) && (
          <div style={{ color: "white" }}> Bienvenue {firstname}</div>
        )}

        {isAdmin && (
          <div style={{ color: "white", paddingBottom: "5px" }}>
            <br />
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => history.push("/edit")}
              style={{ marginRight: "10px" }}
            >
              New Resume
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => history.push("/orateurs")}
            >
              Liste Orateurs
            </Button>
          </div>
        )}
        <Grid
          container
          spacing={1}
          style={{
            paddingTop: "5rem",
            paddingLeft: "5%",
            paddingRight: "5%",
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
                    minHeight: "200px",
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
                  onClick={() => history.push("/culte")}
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
                  onClick={() => history.push("/autre")}
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
                    <strong>Mes statistiques</strong>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body1"
                    style={{ textAlign: "start" }}
                  >
                    Voir mes statistiques et mes notes
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button variant="contained" size="small" color="primary">
                  Acéder
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
                    Section Admin
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary"
                  disabled
                >
                  Accéder
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden mdUp>
        {(isUser || isAdmin) && (
          <div style={{ color: "white" }}> Bienvenue {firstname}</div>
        )}

        {isAdmin && (
          <div style={{ color: "white", paddingBottom: "5px" }}>
            <br />
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => history.push("/edit")}
              style={{ marginRight: "10px" }}
            >
              New Resume
            </Button>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => history.push("/orateurs")}
            >
              Liste Orateurs
            </Button>
          </div>
        )}

        <DashboardItem
          itemPanel="panel1"
          itemTitle="Etudes Bibliques du Midi"
          content31={content11}
          content32={content12}
          itemButton="Voir les résumés"
          itemPath="/ebm"
          total={totalEbm}
        />

        <DashboardItem
          itemPanel="panel2"
          itemTitle="Cultes ICC"
          content31={content21}
          content32={content22}
          itemButton="Voir les résumés"
          itemPath="/culte"
          total={totalCulte}
        />

        <DashboardItem
          itemPanel="panel3"
          itemTitle="Autres Résumés"
          content31={content31}
          content32={content32}
          itemButton="Voir les résumés"
          itemPath="/autre"
          total={totalAutre}
        />
      </Hidden>
    </>
  );
};

export default Dashboard;
