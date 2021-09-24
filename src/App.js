import { Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import TextEditor from "./components/TextEditor";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./pages/Home";
import Ebm from "./pages/Ebm";
import Cultes from "./pages/Cultes";
import Autres from "./pages/Autres";
import Layout from "./components/Layout";
import EbmDetails from "./pages/EbmDetails";
import Orateurs from "./pages/orateurs/Orateurs";
import TextEdit from "./components/TextEdit";
import About from "./pages/About";
import Dashboard from "./components/Dashboard";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { UserContext } from "./pages/USerContext";
import { UseDarkMode } from "./components/UseDarkMode";
import ResumeEdit from "./pages/ResumeEdit";

function App() {
  const [user, setUser] = useState("");
  const [tok, setTok] = useState("");
  const [roles, setRoles] = useState("");
  const [isUser, setIsUser] = useState("");
  const [isAdmin, setIsAdmin] = useState("");
  const [userId, setUserId] = useState("");
  const [firstname, setFirstname] = useState("");
  const [backg, setBackg] = useState("#10035c");
  const [forg, setForg] = useState("#FFFFFF");
  const [dark, setDark] = useState(true);
  const [expanded, setExpanded] = React.useState("panel1");

  useEffect(() => {
    console.log("backg:=", backg);
  }, [backg]);

  return (
    /*     <div className="App" style={{ width: "85%" }}>
     */ <div
      className="App"
      style={{ width: "100%", backgroundColor: backg, height: "100vh" }}
    >
      {/*       Test
      <Kid param1={name} greetPapa={(x) => fromKid(x)} />
      <div>From my kid : {bonj} </div> */}
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
          <Switch>
            <Route exact path="/">
              <Dashboard />
            </Route>
            <Route path="/ebm">
              <Ebm />
            </Route>
            <Route path="/ebmdetails/:resumeId">
              <EbmDetails />
            </Route>
            <Route path="/resumeedit/:resumeId">
              <ResumeEdit />
            </Route>
            <Route path="/cultes">
              <Cultes />
            </Route>
            <Route path="/autres">
              <Autres />
            </Route>
            <Route path="/editor">
              <TextEditor />
            </Route>
            <Route path="/orateurs">
              <Orateurs />
            </Route>
            <Route path="/edit">
              <TextEdit />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <SignUp />
            </Route>
          </Switch>
        </Layout>
      </UserContext.Provider>
      <CssBaseline />
    </div>
  );
}

export default App;
