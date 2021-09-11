import { Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import renderHTML from "react-html-parser";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//const baseUrl = "http://localhost:9050/peb/resumes/";
const baseUrl = "http://pebback.herokuapp.com/peb/resumes/";

const EbmDetails = () => {
  const history = useHistory();
  const { resumeId } = useParams();
  const [resume, setResume] = useState();

  const getAllCours = async () => {
    await axios
      .get(baseUrl + resumeId)
      .then((res) => {
        console.log("Resume:=", res.data);
        setResume(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCours();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        padding: "0.15rem",
      }}
    >
      <div style={{ color: "white", display: "flex" }}>
        <div
          style={{
            color: "white",
            display: "flex",
            paddingBottom: "0.5rem",
            cursor: "pointer",
          }}
          onClick={() => history.goBack()}
        >
          <ArrowBackIosIcon
            style={{ paddingLeft: "0.5rem", paddingBottom: "5px" }}
          />
          <span style={{ fontSize: 15 }}>Retour</span>
        </div>

        {/*        <strong style={{ flexGrow: "1", alignSelf: "flex-end" }}>
          Plateforme d'Edification Biblique
        </strong> */}
      </div>

      {resume && (
        <div align="left" style={{ color: "white" }}>
          <span>{resume.date}</span>
          <br />
          <strong>
            {resume.firstname} {resume.lastname}
          </strong>
        </div>
      )}
      <br />
      <div
        style={{
          alignSelf: "center",
          //  width: "80%",
        }}
      >
        {resume && (
          <Paper
            style={{
              border: "1px solid black",
              alignSelf: "center",
              borderRadius: "5px",
              // backgroundColor: "#E6EDEF",
            }}
          >
            <Typography variant="subtitle2">
              {/*               <span style={{ color: "#2E3134", padding: "0.75rem" }}>
               */}{" "}
              <span style={{ color: "#3F51B5", padding: "0.75rem" }}>
                {resume.category === "ebm" ? resume.reference : resume.theme}
              </span>
            </Typography>
            <Typography>
              {resume.category === "ebm" ? resume.texte : ""}
            </Typography>
          </Paper>
        )}
        <br />
        {resume && (
          <Paper
            style={{
              padding: "5px",
              border: "1px solid black",
              alignSelf: "center",
              borderRadius: "5px",
              // color: "white",
              // backgroundColor: "#2E3134",
              backgroundColor: "#F5F5F5",
              //height: "400px",

              // width: "500px",
              height: "400px",
              overflowX: "hidden",
              overflowY: "auto",
              textAlign: "justify",
            }}
          >
            <main>
              <Typography paragraph align="left" style={{}}>
                {renderHTML(resume.message)}
              </Typography>
            </main>
          </Paper>
        )}
      </div>
    </div>
  );
};

export default EbmDetails;
