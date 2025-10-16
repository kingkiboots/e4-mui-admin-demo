import Paper from "@mui/material/Paper";
import MUIModal, {
  type ModalProps as MUIModalProps,
} from "@mui/material/Modal";
import { useCallback, type Dispatch, type SetStateAction } from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";

export interface ModalProps extends Pick<MUIModalProps, "onClose"> {
  isOpen: boolean;
  title?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}
export const Modal = ({ isOpen, title, setIsOpen, onClose }: ModalProps) => {
  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const handleClose: MUIModalProps["onClose"] = useCallback(
    (evt: {}, reason: "backdropClick" | "escapeKeyDown") => {
      closeModal();
      onClose?.(evt, reason);
    },
    [closeModal, onClose]
  );

  return (
    <MUIModal
      open={isOpen}
      onClose={handleClose}
      aria-labelledby={title}
      aria-describedby="modal-description"
      className="modal"
    >
      <Paper
        className="modal-container"
        elevation={2}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          maxWidth: "100%",
          maxHeight: "90%",
          overflowY: "auto",
        }}
      >
        <Box
          className="modal-header"
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: `1px solid rgba(0,0,0,0.07)`,
          }}
        >
          <h5 className="modal-title">{title}</h5>
          <IconButton onClick={closeModal}>
            <ClearIcon fontSize="small" aria-label="Close Modal" />
          </IconButton>
        </Box>
        <Box
          className="modal-body"
          sx={{
            padding: (theme) => theme.spacing(2),
            borderRadius: `0 0 4px 4px`,
          }}
        ></Box>
        <Box className="modal-footer"></Box>
      </Paper>
    </MUIModal>
  );
};
