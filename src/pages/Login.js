import React, { useContext, useState } from "react";
import {
  Avatar,
  Grid,
  Paper,
  TextField,
  Checkbox,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { UserContext } from "./USerContext";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    // height: "100vh",
    margin: "20px auto",
    padding: 20,
    width: "95%",
    maxWidth: 400,
    // backgroundColor: "blue",
    /*     [theme.breakpoints.up("sm")]: {
      backgroundColor: "red",
      //width: 280,
      // maxWidth: 100,
    },
    [theme.breakpoints.up("md")]: {
      backgroundColor: "green",
      maxWidth: 400,
    },
    [theme.breakpoints.up("lg")]: {
      backgroundColor: "orange",
      maxWidth: 500,
    },
    [theme.breakpoints.up("xl")]: {
      backgroundColor: "cyan",
      maxWidth: 600,
    }, */
  },
}));

const baseUrl = process.env.REACT_APP_API_AUTH;

//const paperStyle = {
//padding: 20,
//height: "70vh",
//width: 400,
// margin: "20px auto",
//};
const avatarStyle = {
  backgroundColor: "#3F51B5",
};

const btnStyle = { margin: "30px 0" };
const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [usernameErr, setUsernameErr] = useState(false);
  const [helperTextName, setHelperTextName] = useState("");
  const [helperTextPass, setHelperTextPass] = useState("");
  const [password, setPassword] = useState("");
  const [passwordErr, setPasswordErr] = useState(false);
  const {
    user,
    setUser,
    tok,
    setTok,
    roles,
    setRoles,
    isUser,
    setIsUser,
    isAdmin,
    setIsAdmin,
    userId,
    setUserId,
    firstname,
    setFirstname,
  } = useContext(UserContext);

  const handleSubmit = () => {
    console.log("username:", username);
    console.log("password:", password);
    setUsernameErr(false);
    setPasswordErr(false);
    if (username === "") {
      setUsernameErr(true);
      setHelperTextName("Ce champ est obligatoire");
    }

    if (password === "") {
      setPasswordErr(true);
      setHelperTextPass("Ce champ est obligatoire");
    }

    auth();
  };

  const auth = async () => {
    await axios
      .post(baseUrl, {
        username: username,
        password: password,
      })
      .then((res) => {
        // Set the Usercontext
        console.log(res.data);
        setTok(res.data.jwtToken);
        setTok(res.data.jwtToken);
        setUser(username);
        setRoles(res.data.roles);
        setUserId(res.data.appUserId);
        setFirstname(res.data.firstname);
        if (res.data.roles.length > 0) {
          for (let i = 0; i < res.data.roles.length; i++) {
            if (res.data.roles[i] === "ROLE_USER") {
              setIsUser(true);
            }
            if (res.data.roles[i] === "ROLE_ADMIN") {
              setIsAdmin(true);
            }
          }
        }

        history.push({
          pathname: "/",
          state: { token: res.data.jwtToken },
        });
      })
      .catch((error) => {
        setUsernameErr(true);
        setHelperTextName(error.response.data.message);
        console.log(error.response.data.message);
      });
  };
  const classes = useStyles();

  return (
    <Grid>
      {/*       <Paper elevation={10} style={paperStyle}>
       */}{" "}
      <Paper elevation={10} className={classes.root}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockIcon />
          </Avatar>
          <h2>Se connecter</h2>
        </Grid>
        <TextField
          label="Email"
          fullWidth
          placeholder="Entrer votre email"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          error={usernameErr}
          helperText={helperTextName}
        />
        <br />
        <br />

        <TextField
          label="Mot de passe"
          type="password"
          fullWidth
          placeholder="Entrer votre mot de passe"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErr}
          helperText={helperTextPass}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          {/*           <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <FormControlLabel
              control={
                <Checkbox
                  // checked={state.checkedB}
                  //onChange={handleChange}
                  disabled
                  name="remember"
                  color="primary"
                  style={{
                    marginRight: "0px",
                  }}
                />
              }
              //label="Se souvenir de moi"
            />{" "}
            Se souvenir de moi
          </div> */}
          <Button
            style={btnStyle}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Connexion
          </Button>
          <Typography variant="body2" align="left">
            <Link>Mot de passe oublié ?</Link>
          </Typography>
          <br />
          <Typography variant="body2" align="left">
            Avez-vous déjà un compte ? Si non,
            <Link
              onClick={() => history.push("/signup")}
              style={{ cursor: "pointer" }}
            >
              {" "}
              <strong>enregistrez-vous</strong>
            </Link>
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
