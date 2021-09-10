import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import logo from "./home.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 150,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <
      // className={classes.root}
      /*       style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }} */
    >
      {/*       <Card>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={logo}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h4" component="h2">
              <span style={{ color: "#4A6473" }}>
                Plateforme d'édification biblique
              </span>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <br />
              Bienvenue sur cette plateforme d'édification biblique dont le but
              principal est de nous rendre encore amoureux de la Parole de Dieu.
              <br />
              <br />
              Il ne suffit pas simplement de se limiter aux résumés proposés sur
              cette platforme, mais d'aller encore plus loin, puiser, creuser,
              chercher et appliquer la Parole de Dieu afin de la vivre
              véritablement.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",

              width: "100%",
            }}
          >
            <Button size="small" color="primary">
              Comment utiliser la platforme ?
            </Button>
          </div>
        </CardActions>
      </Card> */}
    </>
  );
};

export default Home;
