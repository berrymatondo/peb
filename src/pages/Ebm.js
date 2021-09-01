import React from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import { Typography } from "@material-ui/core";

const Ebm = () => {
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        columns={[
          {
            title: "Jour/Auteur",
            field: "Référence",
            render: (row) => (
              <div>
                <Typography variant="small">{row.date}</Typography>{" "}
                <Typography color="primary">{row.name}</Typography>{" "}
              </div>
            ),
          },

          {
            title: "Référence",
            field: "birthCity",
            render: (row) => (
              <div>
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
            passage: "Car Dieu a tant aimé le monde ...",
          },
          {
            name: "Eric Zola",
            reference: "1 Thessaloniciens 5:17",
            date: "13/07/2021",
            passage: "Priez sans cesse",
          },
        ]}
        title=""
      />
    </div>
  );
};

export default Ebm;
