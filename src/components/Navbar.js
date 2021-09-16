import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { Hidden, List, ListItem, ListItemText, Paper } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../pages/USerContext";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& .MuiListItemText": {
      display: "inline-block",
    },
  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,

    display: "flex",
    justifyContent: "center",
  },
  lien: {
    padding: "0px 20px",
  },
  active: {
    //backgroundColor: "#253053",
    color: "darkblue",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { user, setUser, tok, setTok, isUser, setIsUser, isAdmin, setIsAdmin } =
    useContext(UserContext);

  const handleConnexion = () => {
    console.log("User:=", user);
    if (user) {
      console.log("1111111111111111111111111111111111");
      setUser("");
      setTok("");
      setIsUser(false);
      setIsAdmin(false);
      history.push("/login");
    } else {
      console.log("2222222222222222222222222222222222");

      history.push("/signup");
    }
  };

  return (
    <div className={classes.root} style={{ marginBottom: "0.3rem" }}>
      <AppBar position="static">
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Hidden mdUp>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={() => history.push("/")}
            >
              <HomeIcon />
            </IconButton>
            <div className={classes.title}>
              <Typography variant="body1">Edification Biblique</Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {user ? (
                <span
                  style={{
                    color: "white",
                    marginRight: "0.2rem",
                    paddingRight: "10px",
                  }}
                >
                  Bonjour {user}
                </span>
              ) : (
                /*   <div
                  // variant="outlined"
                  style={{ color: "white", marginRight: "0.2rem" }}
                  onClick={() => history.push("/login")}
                >
                  Se Connecter
                </div> */

                <ExitToAppIcon
                  onClick={() => history.push("/login")}
                  style={{ color: "lightgreen" }}
                />
              )}

              {/* <div
                style={{ color: user ? "red" : "white" }}
                onClick={handleConnexion}
              >
                {user ? "Déconnexion" : "S'inscrire"}
              </div> */}
              {user ? (
                <ExitToAppIcon
                  onClick={handleConnexion}
                  style={{ color: "red" }}
                />
              ) : (
                <span style={{ marginLeft: "10px" }} onClick={handleConnexion}>
                  S'inscrire
                </span>
              )}
            </div>
          </Hidden>
          <Hidden smDown>
            <div>
              <Typography variant="h6">Edification Biblique </Typography>
            </div>
            <div>
              {user ? (
                <span style={{ color: "white", marginRight: "0.2rem" }}>
                  Bonjour {user}
                </span>
              ) : (
                <Button
                  variant="outlined"
                  style={{ color: "white", marginRight: "0.2rem" }}
                  onClick={() => history.push("/login")}
                >
                  Se Connecter
                </Button>
              )}

              <Button
                style={{ color: user ? "red" : "white" }}
                onClick={handleConnexion}
              >
                {user ? "Déconnexion" : "S'inscrire"}
              </Button>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
      {/*       <Paper
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#3F51B5",
          marginTop: "0.75rem",
        }}
      >
        <Typography
          variant="h6"
          onClick={() => history.push("/ebm")}
          className={location.pathname === "/ebm" ? classes.active : null}
          style={{ padding: "0px 20px", cursor: "pointer" }}
        >
          EBM
        </Typography>
        <Typography
          variant="h6"
          onClick={() => history.push("/cultes")}
          className={location.pathname === "/cultes" ? classes.active : null}
          style={{ padding: "0px 20px", cursor: "pointer" }}
        >
          Cultes
        </Typography>
        <Typography
          variant="h6"
          onClick={() => history.push("/autres")}
          className={location.pathname === "/autres" ? classes.active : null}
          style={{ padding: "0px 20px", cursor: "pointer" }}
        >
          Autres
        </Typography>
      </Paper> */}
    </div>
  );
};

export default Navbar;
