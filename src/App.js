import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Layout from "./components/Layout";
import { UserContext } from "./pages/USerContext";
import Cookies from "js-cookie";
import Routes from "./components/Routes";

function App() {
  const [user, setUser] = useState(Cookies.get("user"));
  const [tok, setTok] = useState(Cookies.get("token"));
  const [roles, setRoles] = useState("");
  const [isUser, setIsUser] = useState(Cookies.get("isUser"));
  const [isAdmin, setIsAdmin] = useState(Cookies.get("isAdmin"));
  const [userId, setUserId] = useState(Cookies.get("userId"));
  const [firstname, setFirstname] = useState(Cookies.get("firstname"));
  const [backg, setBackg] = useState("#10035c");
  const [forg, setForg] = useState("#FFFFFF");
  const [dark, setDark] = useState(true);
  const [expanded, setExpanded] = React.useState("panel1");

  useEffect(() => {}, [backg]);

  return (
    <div
      className="App"
      style={{ width: "100%", backgroundColor: backg, height: "100vh" }}
    >
      <UserContext.Provider
        value={{
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
          backg,
          setBackg,
          forg,
          setForg,
          dark,
          setDark,
          expanded,
          setExpanded,
        }}
      >
        <Layout>
          <Routes />
        </Layout>
      </UserContext.Provider>
      <CssBaseline />
    </div>
  );
}

export default App;
