import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Typography,
} from "@material-ui/core";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../pages/USerContext";

const DashboardItem = (props) => {
  const history = useHistory();
  // const [expanded, setExpanded] = React.useState("panel1");
  const { dark, backg, expanded, setExpanded } = useContext(UserContext);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <>
      <Accordion
        square
        expanded={expanded === props.itemPanel}
        onChange={handleChange(props.itemPanel)}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          style={{
            border: dark ? "" : "1px solid white",
            backgroundColor: dark ? "white" : backg,
          }}
        >
          <Typography gutterBottom variant="h6" component="h2" color="primary">
            <strong style={{ color: dark ? "" : "white" }}>
              {props.itemTitle}
            </strong>
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          style={{
            display: "flex",
            flexDirection: "column",
            //backgroundColor: "#f0f0f0",
            border: dark ? "" : "1px solid white",
            backgroundColor: dark ? "#F0F0F0" : backg,
          }}
        >
          <div>
            <Typography
              gutterBottom
              variant="body1"
              style={{ textAlign: "start", color: dark ? backg : "white" }}
            >
              {props.content31}
              <a
                style={{ color: dark ? backg : "yellow" }}
                target="_blank"
                href="https://impactcentrechretien.com/"
              >
                Impact Centre Chrétien
              </a>
              {props.content32}
            </Typography>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => history.push(props.itemPath)}
            >
              {props.itemButton}
            </Button>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default DashboardItem;
