import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";

const Ebm = () => {
  const history = useHistory();
  return (
    <>
      <MaterialTable
        columns={[
          {
            title: "Jour/Orateur",
            field: "reference",
            cellStyle: { paddingTop: "0px", paddingBottom: "0px" },
            render: (row) => (
              <div>
                <Typography variant="small">{row.date}</Typography>{" "}
                <Typography color="primary">{row.name}</Typography>{" "}
              </div>
            ),
          },

          {
            title: "Référence",
            field: "passage",
            cellStyle: {
              paddingTop: "0px",
              paddingBottom: "0px",
              cursor: "pointer",
            },
            render: (row) => (
              <div onClick={() => history.push("/ebmdetails")}>
                <Typography variant="subtitle2">{row.reference}</Typography>{" "}
                <Typography noWrap color="primary">
                  {row.passage}
                </Typography>{" "}
              </div>
            ),
          },
        ]}
        data={[
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
        ]}
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

export default Ebm;
