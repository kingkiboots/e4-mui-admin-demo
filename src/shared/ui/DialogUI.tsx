import React from "react";
import { Button } from "./ButtonUI";
import MUIDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { memo } from "react";

type AlertDialogData = {
  type: "alert" | "confirm";
  title: string;
  description: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Dialog = memo(
  ({ type, title, description, open, setOpen }: AlertDialogData) => {
    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    return (
      <React.Fragment>
        <Button variant="outlined" onClick={handleClickOpen}>
          {title}
        </Button>
        <MUIDialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {description}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            {type == "confirm" ? (
              <Button onClick={handleClose}>취소</Button>
            ) : (
              <></>
            )}
            <Button onClick={handleClose} autoFocus>
              확인
            </Button>
          </DialogActions>
        </MUIDialog>
      </React.Fragment>
    );
  }
);
