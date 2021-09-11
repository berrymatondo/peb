import React, { useState, useEffect } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import renderHTML from "react-html-parser";
import { Preview, print } from "react-html2pdf";
import { useHistory, useLocation } from "react-router-dom";
import { Button, Grid, Paper, TextField, makeStyles } from "@material-ui/core";
import axios from "axios";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

//const baseUrl = "http://localhost:9050/peb/resumes";
//const baseUrl = "https://pebback.herokuapp.com/peb/resumes";
const baseUrl = process.env.REACT_APP_API_RESUMES;
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
  const [date, setDate] = useState("dd/mm/yyyy");
  const [theme, setTheme] = useState("");
  const classes = useStyles();
  const [cat, setCat] = React.useState("");
  const [orateur, setOrateur] = useState("");
  const [orateurs, setOrateurs] = useState([]);
  const [texte, setTexte] = useState("");
  const [reference, setReference] = useState("");
  const [orateurId, setOrateurId] = useState("");

  const handleChange = (e, editor) => {
    setData(editor.getData());
    setDataHtml(renderHTML(editor.getData()));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log("orateur=", orateur);
    console.log("data:=", data);
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
      .post(baseUrl + "/add", {
        date: date,
        theme: theme,
        message: data,
        category: cat,
        texte: texte,
        reference: reference,
        orateurId: orateur,
      })
      .then((res) => {
        history.push("/ebm");
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
    </Paper>
  );
};

export default TextEdit;
