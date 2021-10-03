import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import MaterialTable from "material-table";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Popupp from "../Popupp";
import AddOrateur from "./AddOrateur";
import EditOrateur from "./EditOrateur";
import DeleteOrateur from "./DeleteOrateur";
import { UserContext } from "../USerContext";

const baseUrl = process.env.REACT_APP_API_ORATEURS;

const Orateurs = () => {
  const [orateurs, setOrateurs] = useState([]);
  const [openPopup, setOpenPopup] = useState(false);
  const [reload, setReload] = useState(false);
  const [title, setTitle] = useState("");
  const [typact, setTypact] = useState("");
  const [selectedOrateur, setSelectedOrateur] = useState("");
  const { tok, isAdmin } = useContext(UserContext);

  const reloadAndClose = () => {
    setOpenPopup(false);
    setReload(!reload);
  };

  // Get all orateurs
  const getOrateurs = async () => {
    await axios
      .get(baseUrl, {
        // headers: { Authorization: `Bearer ${location.state.token}` },
        //  headers: { Authorization: `Bearer ${tok}` },
      })
      .then((res) => {
        console.log("Orateurs:=", res.data);
        setOrateurs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getOrateurs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  const columns = [
    {
      title: "Nom",
      field: "lastname",
      sorting: true,
      defaultSort: "asc",
      cellStyle: { paddingTop: "0px", paddingBottom: "0px" },
    },

    {
      title: "Prénom",
      field: "firstname",
      sorting: true,

      cellStyle: { paddingTop: "0px", paddingBottom: "0px" },
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>Gestion des orateurs</h2>
      <MaterialTable
        style={{ width: "85%" }}
        columns={columns}
        data={orateurs}
        title="Liste des orateurs "
        actions={[
          {
            icon: () => (
              <AddCircleIcon style={{ color: "#3F51B5", fontSize: 40 }} />
            ),
            hidden: isAdmin ? false : true,
            tooltip: "Créer un orateur",
            isFreeAction: true,
            onClick: () => {
              setTitle("Ajouter un orateur");
              setTypact("A");
              setOpenPopup(true);
            },
          },

          {
            icon: () => <EditIcon style={{ color: "orange" }} />,
            tooltip: "Modifier un orateur",
            hidden: isAdmin ? false : true,
            onClick: (event, rowData) => {
              setTitle("Modifier un orateur ");
              setTypact("M");
              setSelectedOrateur(rowData);
              setOpenPopup(true);
            },
          },
          {
            icon: () => <DeleteIcon style={{ color: "red" }} />,
            tooltip: "Supprimer un orateur",
            hidden: isAdmin ? false : true,
            onClick: (event, rowData) => {
              console.log("rowData", rowData);
              setTitle("Supprimer un orateur ");
              setTypact("D");
              setSelectedOrateur(rowData);
              setOpenPopup(true);
            },
          },
        ]}
        options={{
          filtering: false,
          exportButton: true,
          exportAllData: true,
          actionsColumnIndex: -1,
          rowStyle: (data, index) =>
            index % 2 === 0 ? { background: "#f5f5f5" } : null,
          headerStyle: {
            background: "#3F51B5",
            fontStyle: "bold",
            color: "white",
          },
        }}
      />

      <Popupp
        title={title}
        typact={typact}
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        {typact === "A" && <AddOrateur setOpenPopup={reloadAndClose} />}
        {typact === "M" && (
          <EditOrateur
            orateur={selectedOrateur}
            setOpenPopup={reloadAndClose}
          />
        )}
        {typact === "D" && (
          <DeleteOrateur
            orateur={selectedOrateur}
            setOpenPopup={reloadAndClose}
          />
        )}
      </Popupp>
    </div>
  );
};

export default Orateurs;
