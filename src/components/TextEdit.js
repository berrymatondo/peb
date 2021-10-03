import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import renderHTML from "react-html-parser";
//import { Preview, print } from "react-html2pdf";
import { useHistory } from "react-router-dom";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import moment from "moment";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  //KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import jsPDF from "jspdf";

//const baseUrl = "http://localhost:9050/peb/resumes";
//const baseUrl = "https://pebback.herokuapp.com/peb/resumes";
const baseUrl = process.env.REACT_APP_API_RESUMES_ADD;
const baseUrlOrateurs = process.env.REACT_APP_API_ORATEURS;

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
  const [date, setDate] = useState(new Date());

  const [theme, setTheme] = useState("");
  const classes = useStyles();
  const [cat, setCat] = React.useState("");
  const [orateur, setOrateur] = useState("");
  const [orateurs, setOrateurs] = useState([]);
  const [texte, setTexte] = useState("");
  const [reference, setReference] = useState("");
  //const [orateurId, setOrateurId] = useState("");
  const [file, setFile] = useState("");

  const [selectedDate, setSelectedDate] = React.useState(
    new Date()
    //new Date("2014-08-18T21:11:54")
  );
  const [newDate, setNewDate] = useState(
    moment(selectedDate).format("DD/MM/YYYY")
  );

  const handlefile = (e) => {
    console.log(e.target.files);
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const generatePDF = (el) => {
    //var doc = new jsPDF("landscape", "px", "a4", "false");
    var doc = new jsPDF("p", "pt", "a4");
    //doc.addPage();
    //doc.text(120, 410, { el });
    doc.html(document.querySelector("#content1"), {
      callback: function (pdf) {
        pdf.save("mypdf.pdf");
      },
    });
    // doc.save();
  };

  /*   const handleUpload = (e) => {
    // console.log();
    let formdata = new FormData(file);
    formdata.append("file", file);

    axios({
      url: "http://localhost:9050/upload",
      method: "POST",
      headers: { authorization: "youy token" },
      data: formdata,
    }).then(
      (res) => {
        console.log("SUCCESSSSSS");
      },
      (err) => {
        console.log("KOOOOO");
      }
    );
  }; */

  const handleUpload = (e) => {
    console.log("fillllleeee=", file);
    const data = new FormData();
    data.append("file", file);
    console.warn(file);
    let url = "http://localhost:9050/upload";

    axios
      .post(url, data, {
        // receive two parameter endpoint url ,form data
      })
      .then((res) => {
        // then print response status
        console.warn(res);
      });
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setDate(date);
    console.log("selectedDate", selectedDate);
    setNewDate(moment(date).format("DD/MM/YYYY"));
    console.log("my text", newDate);
    console.log("Good date", moment(date).format("DD/MM/YYYY"));
  };

  const handleChange = (e, editor) => {
    setData(editor.getData());
    setDataHtml(renderHTML(editor.getData()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("orateur=", orateur);
    //console.log("data:=", data);
    console.log("baseUrl=", baseUrl);
    addResume();
  };

  // Get all orateurs
  const getAllOrateurs = async () => {
    await axios
      // .get(baseUrlCours + promotionId)
      .get(baseUrlOrateurs)
      //.get(`http://localhost:9050/peb/orateurs`)
      //.get(`https://pebback.herokuapp.com/peb/orateurs`)
      .then((res) => {
        console.log("Liste orateurs", res.data);
        setOrateurs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllOrateurs();
  }, []);

  // Add new ortaeur
  const addResume = async () => {
    await axios
      .post(baseUrl + "add", {
        //  date: moment(date).format("DD/MM/YYYY"),
        date: moment(date).format("YYYYMMDD"),
        theme: theme,
        message: data,
        category: cat,
        texte: texte,
        reference: reference,
        orateurId: orateur,
      })
      .then((res) => {
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeCat = (event) => {
    setCat(event.target.value);
  };

  return (
    <Paper
      style={{
        display: "flex",
        flexDirection: "column",
        paddingLeft: "1rem",
        paddingRight: "1rem",
      }}
    >
      <h2>Ajouter un résumé</h2>
      {/*       <div>
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
 */}
      <form
        className={classes.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container>
          <Grid item sx={6}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="Date picker dialog"
                format="dd/MM/yyyy"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            {/*   <TextField
              onChange={(e) => setDate(e.target.value)}
              //className={classes.field}
              label="Date"
              variant="outlined"
              value={date}
            /> */}
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choisir un orateur
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orateur}
                onChange={(e, data) => {
                  /* setOrateurId(
                    orateurs.find((ell) => ell.orateurId === e.target.value)
                      .description
                  ); 
 */
                  setOrateur(e.target.value);
                }}
                // error={descriptionError}
              >
                {orateurs.map((ye, index) => (
                  <MenuItem key={ye.orateurId} value={ye.orateurId}>
                    {ye.firstname} {ye.lastname}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Catégorie</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={cat}
                onChange={handleChangeCat}
              >
                <MenuItem value="ebm">ebm</MenuItem>
                <MenuItem value="culte">culte</MenuItem>
                <MenuItem value="autre">autre</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item sx={6}>
            {(cat === "culte" || cat === "autre") && (
              <TextField
                onChange={(e) => setTheme(e.target.value)}
                // className={classes.field}
                label="Thème"
                variant="outlined"
                value={theme}
              />
            )}
            {cat === "ebm" && (
              <TextField
                onChange={(e) => setReference(e.target.value)}
                // className={classes.field}
                label="Référence"
                variant="outlined"
                value={reference}
              />
            )}
            {cat === "ebm" && (
              <TextField
                onChange={(e) => setTexte(e.target.value)}
                // className={classes.field}
                label="Texte"
                variant="outlined"
                value={texte}
              />
            )}
          </Grid>
        </Grid>

        <br />
        <div id="content">
          <h1>Test</h1>
          <p>Ceci est un vrai test</p>
        </div>
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
          <Button onClick={() => history.push("/")} color="secondary">
            Annuler
          </Button>
        </div>
      </form>

      <h2>Télécharger un fichier</h2>
      <div>
        <input type="file" name="file" onChange={(e) => handlefile(e)} />
        <Button
          variant="outlined"
          color="primary"
          onClick={(e) => handleUpload(e)}
        >
          Upload file
        </Button>
      </div>
      <div>
        <a href={`http://localhost:9050/download/3`}>TELECHARG</a>
        <br />
        <Button color="secondary" onClick={(dataHtml) => generatePDF(dataHtml)}>
          Télécharger Fichier
        </Button>
      </div>
      <br />
      <br />
      <div>{data} </div>
      <br />
      <br />
      <div
        id="content1"
        style={{
          width: "595px",
          height: "842px",
          padding: "10px",
          fontSize: "5px",
        }}
      >
        {dataHtml}{" "}
      </div>
      <br />
      <br />
    </Paper>
  );
};

export default TextEdit;
