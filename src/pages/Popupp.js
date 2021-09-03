import { Dialog, DialogContent, DialogTitle } from "@material-ui/core";
import React from "react";

const Popupp = (props) => {
  return (
    <div>
      <Dialog
        open={props.openPopup} /* style={{ Width: "600px", height: "400px" }} */
      >
        <DialogTitle>
          <span align="center" color="primary">
            {props.title}
          </span>
        </DialogTitle>
        <DialogContent dividers>
          <div>{props.children}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Popupp;
