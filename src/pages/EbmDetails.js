import { Paper, Typography } from "@material-ui/core";
import { useParams } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import renderHTML from "react-html-parser";
import { useHistory } from "react-router-dom";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import GetAppIcon from "@material-ui/icons/GetApp";
import { MdMarkunread } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { UserContext } from "./USerContext";
import jsPDF from "jspdf";

const baseUrl = process.env.REACT_APP_API_RESUMES_ADD;
const baseUrlTag = process.env.REACT_APP_API_TAGS;

const EbmDetails = () => {
  const history = useHistory();
  const { resumeId } = useParams();
  const [resume, setResume] = useState();
  //const [reload, setReload] = useState(false);
  const { userId, dark, backg } = useContext(UserContext);

  const getAllCours = async () => {
    if (userId) {
      await axios
        .get(baseUrl + userId + "/" + resumeId)
        .then((res) => {
          console.log("Resume:=", res.data);
          setResume(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
        .get(baseUrl + resumeId)
        .then((res) => {
          console.log("Resume:=", res.data);
          setResume(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    getAllCours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        // setReload(!reload);
        //setOpenPopup(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const generatePDF = () => {
    //var doc = new jsPDF("landscape", "px", "a4", "false");
    var doc = new jsPDF("p", "pt", "a4");
    var doc2 = document.querySelector("#content");
    doc2.style.fontSize = "11px";
    doc2.style.padding = "10px";
    doc2.style.height = "842px";
    doc2.style.width = "595px";

    //doc.addPage();
    //doc.text(120, 410, { el });
    doc.html(doc2, {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
    //   setReload(!reload);
    // doc.save();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "start",
        padding: "0.15rem",
        //backgroundColor: "yellow",
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
          //backgroundColor: "green",
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
            {
              resume.tag ? (
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
                    style={{
                      fontSize: "30px",
                      color: "red",
                      marginRight: "5px",
                    }}
                  />
                  Non lu
                </div>
              ) : (
                ""
              ) /* (
              <MdMarkunread style={{ fontSize: "30px", color: "gray" }} />
            ) */
            }
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
            /* onClick={() => {
              print("a", "jsx-template");
            }} */
            onClick={generatePDF}
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
            <span style={{ paddingLeft: "20px" }}>
              {resume.date.substring(6, 8) +
                "/" +
                resume.date.substring(4, 6) +
                "/" +
                resume.date.substring(0, 4)}
            </span>{" "}
            <br />
            <div>
              <strong>
                {resume.firstname} {resume.lastname}
              </strong>
            </div>
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
              border: dark ? "" : "1px solid white",
              alignSelf: "center",
              borderRadius: "5px",
              backgroundColor: dark ? "#F5F5F5" : backg,
              color: dark ? backg : "white",
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
              //border: "1px solid black",
              alignSelf: "center",
              borderRadius: "5px",
              // color: "white",
              // backgroundColor: "#2E3134",
              backgroundColor: dark ? "#F5F5F5" : backg,
              color: dark ? backg : "white",
              //backgroundColor: "lightblue",
              //height: "400px",
              border: dark ? "" : "1px solid white",

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
                // id={"jsx-template"}
                /* style={{
                  width: "595px",
                  height: "842px",
                  padding: "10px",
                  fontSize: "13px",
                }} */
                id="content"
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
