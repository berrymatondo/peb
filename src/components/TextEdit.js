import React, { useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import renderHTML from "react-html-parser";
import { Preview, print } from "react-html2pdf";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";

const baseUrl = "http://localhost:9050/peb/resumes";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormControl-root": {
      width: "80%",
      margin: theme.spacing(1),
    },
  },
}));
const TextEdit = () => {
  const [data, setData] = useState("");
  const [dataHtml, setDataHtml] = useState("");
  const history = useHistory();
  const [date, setDate] = useState("dd/mm/yyyy");
  const [theme, setTheme] = useState("");
  const classes = useStyles();

  const handleChange = (e, editor) => {
    setData(editor.getData());
    setDataHtml(renderHTML(editor.getData()));
  };
  const handleSubmit = () => {
    console.log("handlesubmit");
    addOrateur();
  };

  // Add new ortaeur
  const addOrateur = async () => {
    await axios
      .post(baseUrl + "/add", {
        date: date,
        theme: theme,
        message: data,
      })
      .then((res) => {
        history.push("/ebm");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", padding: "10rem" }}>
      <div>
        <Preview id={"jsx-template"}> {dataHtml}</Preview>
        <button
          onClick={() => {
            print("a", "jsx-template");
            history.push("/ebm");
          }}
        >
          {" "}
          print
        </button>
      </div>

      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item sx={6}>
            <TextField
              onChange={(e) => setDate(e.target.value)}
              //className={classes.field}
              label="Date"
              variant="outlined"
              value={date}
            />

            <TextField
              onChange={(e) => setTheme(e.target.value)}
              // className={classes.field}
              label="Thème"
              variant="outlined"
              value={theme}
            />
          </Grid>
          <Grid item sx={6}></Grid>
        </Grid>

        <br />
        <div>
          <CKEditor
            editor={ClassicEditor}
            onChange={(e, editor) => {
              handleChange(e, editor);
            }}
          />
        </div>
        <br />
        <div align="right">
          <Button color="primary" variant="contained" type="submit">
            Confirmer
          </Button>
          <Button onClick={() => history.push("/ebm")} color="secondary">
            Annuler
          </Button>
        </div>
      </form>

      <br />
      <br />
      <div>{data} </div>
      <br />
      <br />
      <div>{dataHtml} </div>
      <br />
      <br />
    </div>
  );
};

export default TextEdit;
