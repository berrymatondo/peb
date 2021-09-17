import React, { useEffect, useState, useContext } from "react";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import MarkunreadIcon from "@material-ui/icons/Markunread";
import { MdMarkunread } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { useLocation } from "react-router-dom";
import { UserContext } from "./USerContext";

//const baseUrl = "http://localhost:9050/peb/resumes/category/";
const baseUrl = process.env.REACT_APP_API_RESUMES;
const baseUrlTag = process.env.REACT_APP_API_TAGS;

const Ebm = () => {
  const history = useHistory();
  const [resumes, setResumes] = useState([]);
  const [reload, setReload] = useState(false);
  const location = useLocation();
  const { userId } = useContext(UserContext);

  // Get all cours
  const getAllCours = async () => {
    let myBaseUrl = baseUrl + "ebm";

    if (userId) {
      myBaseUrl = baseUrl + "ebm" + `/${userId}`;
    } else {
    }

    await axios
      .get(
        myBaseUrl
        /* , {
        headers: { Authorization: `Bearer ${location.state.token}` },
      } */
      )
      .then((res) => {
        console.log("Resumes:=", res.data);
        setResumes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log(location.pathname); // result: '/secondpage'
    console.log(location.search); // result: '?query=abc'
    //console.log(location.state.token); // result: 'some_value'
    getAllCours();
  }, [reload]);

  //Tag resume
  const addTag = async (appUSer, ResumeId) => {
    await axios
      .post(
        // "http://localhost:9050/peb/resumes/tag/add",
        baseUrlTag + "add",
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

  const handleTag = (ligne) => {
    //   console.log("Resume to tag:=", ligne);
    // console.log("USer to tag:=", userId);
    if (userId) {
      addTag(userId, ligne);
    }
  };

  return (
    <>
      {/* <div style={{ color: "white" }}>
        {process.env.NODE_ENV} - {process.env.REACT_APP_API_RESUMES}
      </div> */}
      <div style={{ color: "white", display: "flex" }}>
        <div
          style={{ color: "white", display: "flex", cursor: "pointer" }}
          onClick={() => history.push("/")}
        >
          <ArrowBackIosIcon
            style={{ paddingLeft: "0.5rem", paddingBottom: "5px" }}
          />
          <span style={{ fontSize: 15 }}>Retour</span>
        </div>

        <strong style={{ flexGrow: "1" }}>
          Plateforme d'Edification Biblique
        </strong>
      </div>
      <MaterialTable
        style={{
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        }}
        columns={[
          {
            title: "Jour/Orateur",
            field: "Resumes",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              <div onClick={() => history.push("/ebmdetails/" + row.resumeId)}>
                <Typography variant="small">{row.date}</Typography>{" "}
                <Typography color="primary">
                  {row.firstname} {row.lastname}
                </Typography>{" "}
              </div>
            ),
          },

          {
            title: "Référence",
            field: "message",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              /*               <div onClick={() => history.push("/ebmdetails")}>
               */ <div
                onClick={() => history.push("/ebmdetails/" + row.resumeId)}
              >
                <Typography variant="body2">
                  <strong>{row.reference}</strong> - {row.texte}
                  {/*                   {renderHTML(row.message.substring(0, 20))}
                   */}{" "}
                </Typography>{" "}
                {/*  <Typography noWrap color="primary">
                  {row.passage}
                </Typography>{" "} */}
              </div>
            ),
          },
          {
            title: "Lu",
            field: "tag",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              /*               <div onClick={() => history.push("/ebmdetails")}>
               */ <div onClick={() => handleTag(row.resumeId)}>
                {row.tag ? (
                  <MdDrafts style={{ fontSize: "30px", color: "green" }} />
                ) : userId ? (
                  <MdMarkunread style={{ fontSize: "30px", color: "red" }} />
                ) : (
                  <MdMarkunread style={{ fontSize: "30px", color: "gray" }} />
                )}
              </div>
            ),
          },
        ]}
        data={resumes}
        options={{
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: {
            background: "#3F51B5",
            fontStyle: "bold",
            color: "white",
            paging: true,
            pageSizeOptions: [5, 10],
            paginationPosition: "left",
          },
        }}
        title=""
      />
    </>
  );
};

export default Ebm;
