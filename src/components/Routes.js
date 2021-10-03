import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "../pages/About";
import Autres from "../pages/Autres";
import Contact from "../pages/Contact";
import Cultes from "../pages/Cultes";
import Ebm from "../pages/Ebm";
import EbmDetails from "../pages/EbmDetails";
import Login from "../pages/Login";
import Orateurs from "../pages/orateurs/Orateurs";
import ResumeEdit from "../pages/ResumeEdit";
import SignUp from "../pages/SignUp";
import Dashboard from "./Dashboard";
import TextEdit from "./TextEdit";

const Routes = () => {
  return (
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
      <Route path="/culte">
        <Cultes />
      </Route>
      <Route path="/autre">
        <Autres />
      </Route>
      {/* <Route path="/editor">
        <TextEditor />
      </Route> */}
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
  );
};

export default Routes;
