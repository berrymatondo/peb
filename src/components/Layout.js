import { Paper } from "@material-ui/core";
import React from "react";
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
        }}
      >
        <div
          style={{
            width: "100%",
            // backgroundColor: "blue",
            //  height: "100vh",
            //    margin: "0.5rem",
          }}
        >
          {props.children}
        </div>

        <Paper
          style={{
            width: "100%",
            // backgroundColor: "#3F51B5",
            backgroundColor: "#3F51B5",
            //backgroundColor: "#010230",
            //  height: "100vh",
            marginTop: "0.5rem",
          }}
        >
          <Footer />
        </Paper>
      </div>
    </>
  );
};

export default Layout;
