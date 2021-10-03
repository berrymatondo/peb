import React, { useEffect, useState, useContext } from "react";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
//import MarkunreadIcon from "@material-ui/icons/Markunread";
import { MdMarkunread } from "react-icons/md";
import { MdDrafts } from "react-icons/md";
import { BiHide } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
import { MdEdit } from "react-icons/md";
import { UserContext } from "./USerContext";

//const baseUrl = "http://localhost:9050/peb/resumes/category/";
const baseUrl = process.env.REACT_APP_API_RESUMES;
const baseUrlTag = process.env.REACT_APP_API_TAGS;
const baseUrPublish = process.env.REACT_APP_API_PUBLISH;

const Cultes = () => {
  const history = useHistory();
  const [resumes, setResumes] = useState([]);
  const [reload, setReload] = useState(false);
  const { userId, isAdmin } = useContext(UserContext);

  // Get all cours
  const getAllCours = async () => {
    let myBaseUrl = baseUrl + "culte";

    if (userId) {
      myBaseUrl = baseUrl + `culte/${userId}`;
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
    // console.log(location.pathname); // result: '/secondpage'
    // console.log(location.search); // result: '?query=abc'
    //console.log(location.state.token); // result: 'some_value'
    getAllCours();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

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

  const handleTag = (ligne) => {
    // console.log("Resume to tag:=", ligne);
    //  console.log("USer to tag:=", userId);
    if (userId) {
      console.log("urladd:=", baseUrlTag);
      addTag(userId, ligne);
    }
  };

  //Update status publish
  const updatePublish = async (ligne) => {
    await axios
      .post(
        // "http://localhost:9050/peb/resumes/tag/add",
        baseUrPublish,
        {
          resId: ligne.resumeId,
          status: !ligne.published,
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

  const handlePublish = (ligne) => {
    console.log("Resume to publish:=", ligne);
    if (isAdmin) {
      console.log("urladd:=", baseUrlTag);
      console.log("resId: ", ligne.resumeId);
      console.log("status: ", !ligne.published);

      updatePublish(ligne);
    }
  };

  return (
    <>
      <br />
      {/* <div style={{ color: "white" }}>
        {process.env.NODE_ENV} - {process.env.REACT_APP_API_RESUMES}
      </div> */}
      <div style={{ color: "white", display: "flex" }}>
        <div
          style={{ color: "white", display: "flex", cursor: "pointer" }}
          onClick={() => history.push("/")}
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

        {/* <strong style={{ flexGrow: "1" }}>
          Plateforme d'Edification Biblique
        </strong> */}
      </div>
      <br />
      <MaterialTable
        style={{
          paddingLeft: "0.25rem",
          paddingRight: "0.25rem",
        }}
        columns={[
          {
            title: "Jour/Orateur",
            field: "date",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            defaultSort: "desc",
            render: (row) => (
              <div onClick={() => history.push("/ebmdetails/" + row.resumeId)}>
                <Typography variant="small">
                  {row.date.substring(6, 8) +
                    "/" +
                    row.date.substring(4, 6) +
                    "/" +
                    row.date.substring(0, 4)}
                </Typography>{" "}
                <Typography color="primary">
                  {row.firstname} {row.lastname}
                </Typography>{" "}
              </div>
            ),
          },

          {
            title: "Thème",
            field: "theme",
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
                  <strong>{row.theme}</strong>
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
            title: "Lu ?",
            field: "message",
            hidden: userId ? false : true,
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              /*               <div onClick={() => history.push("/ebmdetails")}>
               */ <div onClick={() => handleTag(row.resumeId)}>
                {row.tag ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
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
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
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
                  <MdMarkunread style={{ fontSize: "30px", color: "gray" }} />
                )}
              </div>
            ),
          },
          /*           {
            title: "Editer",
            field: "texte",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              <MdEdit
                style={{ fontSize: "25px", color: "orange" }}
                onClick={() => history.push("/resumeedit/" + row.resumeId)}
              />
            ),
          }, */
          {
            title: "Actions",
            field: "published",
            hidden: isAdmin ? false : true,
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              /*               <div onClick={() => history.push("/ebmdetails")}>
               */
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  // justifyContent: "space-between",
                }}
              >
                {/*                 <div onClick={() => handlePublish(row)}>
                 */}{" "}
                {row.published ? (
                  <AiFillEye
                    style={{
                      fontSize: "30px",
                      color: "green",
                      marginRight: "5px",
                    }}
                    onClick={() => handlePublish(row)}
                  />
                ) : (
                  <BiHide
                    style={{
                      fontSize: "30px",
                      color: "red",
                      marginRight: "5px",
                    }}
                    onClick={() => handlePublish(row)}
                  />
                )}
                {/*                 </div>
                 */}{" "}
                {/*                 <Tooltip title="Delete">
                 */}{" "}
                <MdEdit
                  style={{
                    fontSize: "25px",
                    color: "orange",
                    marginLeft: "30px",
                  }}
                  onClick={() => history.push("/resumeedit/" + row.resumeId)}
                />
                {/*                 </Tooltip>
                 */}{" "}
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
          columnsButton: true,
        }}
        title="Cultes"
      />
    </>
  );
};

export default Cultes;
