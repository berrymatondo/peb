import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TextEditor from "./components/TextEditor";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./pages/Home";
import Ebm from "./pages/Ebm";
import Cultes from "./pages/Cultes";
import Autres from "./pages/Autres";
import Layout from "./components/Layout";
import EbmDetails from "./pages/EbmDetails";
function App() {
  return (
    /*     <div className="App" style={{ width: "85%" }}>
     */ <div
      className="App"
      style={{ width: "100%", backgroundColor: "#E7EEF0", height: "100%" }}
    >
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ebm">
            <Ebm />
          </Route>
          <Route path="/ebmdetails">
            <EbmDetails />
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
        </Switch>
      </Layout>
      <CssBaseline />
    </div>
  );
}

export default App;
