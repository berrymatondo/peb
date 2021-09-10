import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();
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
        onClick={() => history.push("/about")}
      >
        A Propos
      </Button>
      <Button
        size="small"
        style={{
          color: "white",
        }}
        onClick={() => history.push("/contact")}
      >
        Nous contacter
      </Button>
    </div>
  );
};

export default Footer;
