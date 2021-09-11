import { Grid, Hidden } from "@material-ui/core";
import { Paper } from "@material-ui/core";
import React from "react";
import Dashboard from "./Dashboard";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "85%",
          //backgroundColor: "red",
        }}
      >
        <Hidden mdUp>
          <div
            container
            style={{
              width: "100%",
              //  backgroundColor: "green",
              // flexGrow: "1",
              //  height: "100vh",
              //    margin: "0.5rem",
            }}
          >
            {props.children}
            {/*           <Dashboard />
             */}{" "}
          </div>
        </Hidden>
        {/* Large screens
         */}{" "}
        <Hidden smDown>
          <div
            container
            style={{
              width: "85%",
              //  backgroundColor: "green",
              // flexGrow: "1",
              //  height: "100vh",
              //    margin: "0.5rem",
            }}
          >
            {props.children}
            {/*           <Dashboard />
             */}{" "}
          </div>
        </Hidden>
        <Paper
          style={{
            width: "100%",
            // backgroundColor: "#3F51B5",
            backgroundColor: "#3F51B5",
            //backgroundColor: "#010230",
            //  height: "100vh",
            marginTop: "0.3rem",
          }}
        >
          <Footer style={{ alignSelf: "flex-end" }} />
        </Paper>
      </div>
    </>
  );
};

export default Layout;
