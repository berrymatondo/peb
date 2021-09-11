import React, { useEffect, useState } from "react";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import axios from "axios";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

//const baseUrl = "http://localhost:9050/peb/resumes/category/";
const baseUrl = process.env.REACT_APP_API_RESUMES;

const Autres = () => {
  const history = useHistory();
  const [resumes, setResumes] = useState([]);

  // Get all cours
  const getAllCours = async () => {
    await axios
      .get(baseUrl + "autre")
      .then((res) => {
        console.log("Resumes:=", res.data);
        setResumes(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllCours();
  }, []);

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
            title: "Thème",
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
                  {row.theme}
                  {/*                   {renderHTML(row.message.substring(0, 20))}
                   */}{" "}
                </Typography>{" "}
                {/*  <Typography noWrap color="primary">
                  {row.passage}
                </Typography>{" "} */}
              </div>
            ),
          },
        ]}
        data={resumes}
        /*         data={[
          {
            name: "Christian Sabouloulou",
            reference: "Jean 3:16",
            date: "12/07/2021",
            passage: "Car Dieu a tant aimé le ...",
          },
          {
            name: "Eric Zola",
            reference: "1 Thessaloniciens 5:17",
            date: "13/07/2021",
            passage: "Priez sans cesse",
          },
        ]} */
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

export default Autres;
