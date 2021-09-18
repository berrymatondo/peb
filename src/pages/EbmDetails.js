import {
  FormControl,
  FormControlLabel,
  Hidden,
  Paper,
  Switch,
  Typography,
} from "@material-ui/core";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import renderHTML from "react-html-parser";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { Preview, print } from "react-html2pdf";
import { Button } from "@material-ui/core";
import GetAppIcon from "@material-ui/icons/GetApp";
import { MdMarkunread } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { UserContext } from "./USerContext";

//const baseUrl = "http://localhost:9050/peb/resumes/";
//const baseUrl = "http://pebback.herokuapp.com/peb/resumes/";
const baseUrl = process.env.REACT_APP_API_RESUMES_ADD;
const baseUrlTag = process.env.REACT_APP_API_TAGS;

const EbmDetails = () => {
  const history = useHistory();
  const { resumeId } = useParams();
  const [resume, setResume] = useState();
  const [reload, setReload] = useState(false);
  const { userId } = useContext(UserContext);

  const getAllCours = async () => {
    if (userId) {
      await axios
        .get(baseUrl + userId + "/" + resumeId)
        .then((res) => {
          // console.log("Resume:=", res.data);
          setResume(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
        .get(baseUrl + resumeId)
        .then((res) => {
          // console.log("Resume:=", res.data);
          setResume(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getAllCours();
  }, [reload]);

  const handleTag = () => {
    // console.log("Resume to tag:=", resumeId);
    // console.log("USer to tag:=", userId);
    if (userId) {
      //console.log("urladd:=", baseUrlTag);
      addTag(userId, resumeId);
    }
  };

  //Tag resume
  const addTag = async (appUSer, ResumeId) => {
    await axios
      .post(
        // "http://localhost:9050/peb/resumes/tag/add",
        baseUrlTag,
        {
          usId: appUSer,
          resId: ResumeId,
        } /* ,
          {
            headers: { Authorization: `Bearer ${location.state.token}` },
          } */
      )
      .then((res) => {
        setReload(!reload);
        //setOpenPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        padding: "0.15rem",
        // backgroundColor: "yellow",
      }}
    >
      <br />
      <div
        style={{
          color: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          //  backgroundColor: "green",
        }}
      >
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
            style={{
              paddingLeft: "0.5rem",
              paddingBottom: "5px",
              color: "yellow",
            }}
          />
          <span style={{ fontSize: 15, color: "yellow" }}>Retour</span>
        </div>
        {resume && (
          <div onClick={() => handleTag()}>
            {resume.tag ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdDrafts
                  style={{
                    fontSize: "30px",
                    color: "green",
                    marginRight: "5px",
                  }}
                />
                Lu
              </div>
            ) : userId ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <MdMarkunread
                  style={{ fontSize: "30px", color: "red", marginRight: "5px" }}
                />
                Non lu
              </div>
            ) : (
              <MdMarkunread style={{ fontSize: "30px", color: "gray" }} />
            )}
          </div>
        )}

        {/*        <strong style={{ flexGrow: "1", alignSelf: "flex-end" }}>
          Plateforme d'Edification Biblique
        </strong> */}

        {/*  {resume && (
          <Hidden xsUp>
            <span>Test 1</span>
            <Preview id={"jsx-template"}> {renderHTML(resume.message)}</Preview>
            <span>Test 1</span>
          </Hidden>
        )} */}
        {resume && (
          /*           <Button
            color="secondary"
            onClick={() => {
              print("a", "jsx-template");

            }}
          >
            {" "}
            Télécharger pdf
          </Button> */
          <div
            onClick={() => {
              print("a", "jsx-template");
            }}
            style={{ marginTop: "5px", marginRight: "5px", cursor: "pointer" }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <GetAppIcon
                size="large"
                style={{ color: "yellow", MarginTop: "30px" }}
              />{" "}
              <span> pdf</span>
            </div>
          </div>
        )}
      </div>

      {resume && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ color: "white" }}>
            <span style={{ paddingLeft: "10px" }}>{resume.date}</span> -{" "}
            <strong>
              {resume.firstname} {resume.lastname}
            </strong>
          </div>

          {/*           <div style={{ color: "white", paddingRight: "10px" }}>
            Marquer comme lu
          </div> */}
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
              //backgroundColor: "lightblue",
              //height: "400px",

              // width: "500px",
              maxHeight: "400px",
              overflowX: "hidden",
              overflowY: "auto",
              textAlign: "justify",
              width: "95vw",
            }}
          >
            <main style={{ width: "100%" }}>
              <Typography
                paragraph
                align="left"
                // style={{ fontSize: "12pt" }}
                id={"jsx-template"}
                //  style={{ paddingRight: "50%", paddingLeft: "10px" }}
              >
                {renderHTML(resume.message)}
              </Typography>
            </main>
          </Paper>
        )}

        {/* <form
          action="https://v2.convertapi.com/convert/docx/to/pdf?Secret=<YOUR SECRET HERE>&download=attachment"
          method="post"
          enctype="multipart/form-data"
        >
          <input type="file" name="File" />
          <input type="hidden" name="StoreFile" value="true" />
          <input type="submit" value="Convert file" />
        </form> */}
      </div>
    </div>
  );
};

export default EbmDetails;
