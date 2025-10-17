import React from "react";
import { Button } from "./ButtonUI";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import { memo } from "react";

type AlertDialogData = {
  title: string;
  description: string;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AlertDialog = memo(
  ({ title, description, open, setOpen }: AlertDialogData) => {
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
        <Dialog
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
            {/* <Button onClick={handleClose}>Disagree</Button> */}
            <Button onClick={handleClose} autoFocus>
              확인
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    );
  }
);

export default AlertDialog;
