import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import { List, ListItem, ListItemText, Paper } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

    "& .MuiListItemText": {
      display: "inline-block",
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
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

  return (
    <div className={classes.root} style={{ marginBottom: "20px" }}>
      <AppBar position="static">
        <Toolbar>
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
            {/*             <Typography
              variant="h6"
              onClick={() => history.push("/")}
              className={location.pathname === "/" ? classes.active : null}
              style={{ padding: "0px 20px", cursor: "pointer" }}
            >
              Home
            </Typography> */}
            <Typography
              variant="h6"
              //onClick={() => history.push("/ebm")}
              //  className={location.pathname === "/ebm" ? classes.active : null}
              //style={{ padding: "0px 20px", cursor: "pointer" }}
            >
              Platforme d'édification biblique
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <Paper
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
      </Paper>
    </div>
  );
};

export default Navbar;
