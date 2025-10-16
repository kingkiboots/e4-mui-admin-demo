import Paper from "@mui/material/Paper";
import MUIModal, {
  type ModalProps as MUIModalProps,
} from "@mui/material/Modal";
import React, {
  useCallback,
  type Dispatch,
  type MouseEventHandler,
  type SetStateAction,
} from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

export interface ModalProps extends Omit<MUIModalProps, "children" | "open"> {
  isOpen: boolean;
  title?: string;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: React.ReactNode;
}

const StyledModalContainer = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,

  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "100%",
  maxHeight: "90%",
  overflowY: "auto",
}));

export const Modal = ({
  isOpen,
  title,
  setIsOpen,
  onClose,
  children,
}: ModalProps) => {
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
      <StyledModalContainer className="modal-container" elevation={2}>
        <Header title={title} closeModal={closeModal} />
        <Box
          className="modal-body"
          sx={{
            padding: (theme) => theme.spacing(2),
            borderRadius: `0 0 4px 4px`,
          }}
        >
          {children}
        </Box>
        <Box className="modal-footer"></Box>
      </StyledModalContainer>
    </MUIModal>
  );
};

/**
 * SECTION - 모달 헤더
 */
const StyledModalHeader = styled(Box, {
  label: "modal-header",
})({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `1px solid rgba(0,0,0,0.07)`,
  borderRadius: "4px",
  minHeight: "4rem",
});
const StyledModalHeaderTypography = styled(Typography, {
  name: "modal-title",
})(({ theme }) => ({
  padding: `0 ${theme.spacing(2)}`,

  fontWeight: "bold",
  letterSpacing: "-1px",
  lineHeight: "4rem",
  flex: 1,
  fontSize: "1.4rem",
  margin: 0,
  display: "flex",
  alignItems: "center",
  color: theme.palette.grey[700],
  position: "relative",
}));
const StyledModalHeaderCloseIcon = styled(IconButton, {
  label: "close-modal",
})(({ theme }) => ({
  marginLeft: "auto",
  padding: `0 ${theme.spacing(2)}`,
}));
interface HeaderProps {
  title: ModalProps["title"];
  closeModal: MouseEventHandler<HTMLButtonElement>;
}
const Header = React.memo(({ title, closeModal }: HeaderProps) => {
  return (
    <StyledModalHeader className="modal-header">
      <StyledModalHeaderTypography variant="h5" className="modal-title">
        {title}
      </StyledModalHeaderTypography>
      <StyledModalHeaderCloseIcon onClick={closeModal}>
        <ClearIcon fontSize="small" aria-label="Close Modal" />
      </StyledModalHeaderCloseIcon>
    </StyledModalHeader>
  );
});
Header.displayName = "ModalHeader";
