import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState } from "react";
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
import Kid from "./pages/Kid";

function App() {
  const name = "Michou";
  const [bonj, setBonj] = useState("");

  const fromKid = (y) => {
    setBonj(y);
  };
  return (
    /*     <div className="App" style={{ width: "85%" }}>
     */ <div
      className="App"
      style={{ width: "100%", backgroundColor: "#E7EEF0", height: "100%" }}
    >
      {/*       Test
      <Kid param1={name} greetPapa={(x) => fromKid(x)} />
      <div>From my kid : {bonj} </div> */}
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ebm">
            <Ebm />
          </Route>
          <Route path="/ebmdetails/:resumeId">
            <EbmDetails />
          </Route>
          <Route path="/cultes">
            <Cultes />
          </Route>
          <Route path="/autres">
            <Orateurs />
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
        </Switch>
      </Layout>
      <CssBaseline />
    </div>
  );
}

export default App;
