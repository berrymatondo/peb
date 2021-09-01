import { Button } from "@material-ui/core";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",

        width: "100%",
      }}
    >
      <Button
        size="small"
        style={{
          color: "white",
        }}
      >
        A Propos
      </Button>
      <Button
        size="small"
        style={{
          color: "white",
        }}
      >
        Nous contacter
      </Button>
    </div>
  );
};

export default Footer;
