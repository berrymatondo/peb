import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import renderHTML from "react-html-parser";
import { Preview, print } from "react-html2pdf";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import fileDownload from "js-file-download";

import moment from "moment";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { FileDownload } from "@mui/icons-material";
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
const ResumeEdit = () => {
  const [data, setData] = useState("");
  const [dataHtml, setDataHtml] = useState("");
  const history = useHistory();
  const [date, setDate] = useState();
  const { resumeId } = useParams();

  const [theme, setTheme] = useState("");
  const classes = useStyles();
  const [cat, setCat] = React.useState("");
  const [resume, setResume] = useState("");
  const [orateur, setOrateur] = useState("");
  const [orateurs, setOrateurs] = useState([]);
  const [texte, setTexte] = useState("");
  const [reference, setReference] = useState("");
  const [message, setMessage] = useState("");
  const [orateurId, setOrateurId] = useState("");
  const [file, setFile] = useState("");
  const [published, setPublished] = useState("");

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

  const downloadFile = (e) => {
    let url = "http://localhost:9050/download/3";

    axios({
      url: url,
      method: "GET",
      responseType: "blob",
    }).then((res) => {
      console.log("response", res.data);
      FileDownload(res.data, "download");
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
    updateResume();
  };

  // Get resume
  const getResume = async () => {
    await axios
      .get(baseUrl + `${resumeId}`)
      //.get(`http://localhost:9050/peb/orateurs`)
      //.get(`https://pebback.herokuapp.com/peb/orateurs`)
      .then((res) => {
        console.log("Resumé trouvé", res.data);
        setResume(res.data);
        setOrateur(res.data.orateurId);
        setCat(res.data.category);
        setReference(res.data.reference);
        setTexte(res.data.texte);
        setTheme(res.data.theme);
        setMessage(res.data.message);
        setPublished(res.data.published);
        setDate(
          res.data.date.substring(4, 6) +
            "/" +
            res.data.date.substring(6, 8) +
            "/" +
            res.data.date.substring(0, 4)
        );
      })
      .catch((error) => {
        console.log(error);
      });
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
    console.log("Edition");
    getResume();
    getAllOrateurs();
  }, []);

  // Add new ortaeur
  const updateResume = async () => {
    await axios
      .put(baseUrl + "update", {
        resumeId: resumeId,
        //date: moment(date).format("DD/MM/YYYY"),
        date: moment(date).format("YYYYMMDD"),
        theme: theme,
        message: data,
        category: cat,
        texte: texte,
        reference: reference,
        orateurId: orateur,
        published: published,
      })
      .then((res) => {
        history.push("/" + cat);
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
      style={{ display: "flex", flexDirection: "column", padding: "10rem" }}
    >
      <div>
        <h1>Edit a Resume</h1>
      </div>

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
                label="Date"
                format="dd/MM/yyyy"
                value={date}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>

            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">
                Choisir un orateur
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={orateur}
                onChange={(e, data) => {
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

        <div>
          <CKEditor
            editor={ClassicEditor}
            //data={renderHTML(message)}
            data={message}
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
          <Button onClick={() => history.push("/" + cat)} color="secondary">
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
        {/*         <a href={`http://localhost:9050/download/3`}>TELECHARG</a>
         */}{" "}
        <br />
        <Button
          variant="outlined"
          color="secondary"
          onClick={(dataHtml) => generatePDF(dataHtml)}
        >
          Preview Téléchargement Fichier
        </Button>
      </div>
      {/*       <br />
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
      <br /> */}
    </Paper>
  );
};

export default ResumeEdit;
