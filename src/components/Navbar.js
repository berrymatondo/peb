import React, { useContext, useState } from "react";
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
import { BsMoon } from "react-icons/bs";
import { FiSun } from "react-icons/fi";
import Cookies from "js-cookie";

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
  //const [dark, setDark] = useState(true);
  const [icone, setIcone] = useState("BsMoon");
  const location = useLocation();
  const {
    user,
    setUser,
    tok,
    setTok,
    isUser,
    setIsUser,
    isAdmin,
    setIsAdmin,
    userId,
    setUserId,
    firstname,
    setBackg,
    setForg,
    dark,
    setDark,
  } = useContext(UserContext);

  const couleur = () => {
    setDark(!dark);
    if (dark === true) {
      setBackg("#070221");
      setForg("#FFFFFF");
    } else {
      setBackg("#10035c");
      setForg("#FFFFFF");
    }
  };

  const handleConnexion = () => {
    if (user) {
      setUser("");
      setTok("");
      setIsUser(false);
      setIsAdmin(false);
      setUserId("");
      Cookies.remove("user");
      Cookies.remove("firstname");
      Cookies.remove("userId");
      Cookies.remove("token");
      Cookies.remove("isUser");
      Cookies.remove("isAdmin");
      history.push("/login");
    } else {
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
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={couleur}
            >
              {dark ? (
                <BsMoon style={{ color: "yellow" }} />
              ) : (
                <FiSun style={{ color: "yellow" }} />
              )}
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
                  {firstname}
                </span>
              ) : (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => history.push("/login")}
                >
                  <ExitToAppIcon style={{ color: "lightgreen" }} />
                  {/* <span style={{ marginLeft: "0.2rem" }}>Connexion</span> */}
                </div>
              )}

              {user && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={handleConnexion}
                  // onClick={() => history.push("/login")}
                >
                  <ExitToAppIcon style={{ color: "red" }} />
                  {/*                     <span style={{ marginLeft: "0.2rem" }}>Déconnexion</span>
                   */}{" "}
                </div>
              )}
            </div>
          </Hidden>
          <Hidden smDown>
            <div
              onClick={() => history.push("/")}
              style={{ cursor: "pointer" }}
            >
              <Typography variant="h6">Edification Biblique </Typography>
            </div>
            <div>
              {user ? (
                <div>
                  <span style={{ color: "white", marginRight: "0.5rem" }}>
                    Bonjour {firstname}
                  </span>
                  <Button
                    color="secondary"
                    variant="outlined"
                    //style={{ color: user ? "red" : "white" }}
                    onClick={handleConnexion}
                  >
                    Déconnexion
                  </Button>
                </div>
              ) : (
                <Button
                  variant="outlined"
                  style={{ color: "white", marginRight: "0.2rem" }}
                  onClick={() => history.push("/login")}
                >
                  Connexion
                </Button>
              )}
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
