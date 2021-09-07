import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import renderHTML from "react-html-parser";

const baseUrl = "http://localhost:9050/peb/resumes/category/";

const Cultes = () => {
  const history = useHistory();
  const [resumes, setResumes] = useState([]);
  const [reload, setReload] = useState(false);

  // Get all cours
  const getAllCours = async () => {
    await axios
      .get(baseUrl + "culte")
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
  }, [reload]);

  return (
    <>
      <MaterialTable
        columns={[
          {
            title: "Jour/Orateur",
            field: "Resumes",
            cellStyle: { paddingTop: "0px", paddingBottom: "0px" },
            render: (row) => (
              <div>
                <Typography variant="small">{row.date}</Typography>{" "}
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
          },
        }}
        title=""
      />
    </>
  );
};

export default Cultes;
