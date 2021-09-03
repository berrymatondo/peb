import React from "react";

import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Preview, print } from "react-html2pdf";
import { useState } from "react";
import renderHTML from "react-render-html";

const TextEditor = () => {
  const [don, setDon] = useState();
  const [don1, setDon1] = useState();
  const sendData = () => {
    console.log("DON vat:= ", don);
  };

  return (
    <div>
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={ClassicEditor}
        data="<p>Hello from CKEditor 5!</p>"
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("Editor is ready to use!", editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setDon(data);
          setDon1(renderHTML(data));
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log("Blur.", editor);
        }}
        onFocus={(event, editor) => {
          console.log("Focus.", editor);
        }}
      />
      <button onClick={sendData}>Envoyer</button>
      <br />
      <br />
      {don && <div className="app">{renderHTML(don)}</div>}
      <div>
        {/*         <Preview id={"jsx-template"}> {don}</Preview>
         */}{" "}
        <Preview id={"jsx-template"}> {don1}</Preview>
        <button onClick={() => print("a", "jsx-template")}> print</button>
      </div>
    </div>
  );
};

export default TextEditor;

/* import React, { useState, Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

const TextEditor = () => {

  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const onEditorStateChange = (editorState) => {

    setEditorState(editorState);
  };

  //const { editorState } = this.state;

  return (
    <div>
      <Editor
        editorState={editorState}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={onEditorStateChange}
      />
      <textarea
        disabled
        value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
      />
    </div>
  );
};

export default TextEditor;
 */
