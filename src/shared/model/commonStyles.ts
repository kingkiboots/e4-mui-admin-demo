import type { Theme } from "@mui/material/styles";

export const disabledInputStyles = (theme: Theme) => ({
    
    "& .Mui-disabled, & .Mui-readOnly": {
      cursor: "not-allowed !important",
      color: theme.palette.grey[600],
      opacity: 1,
      backgroundColor: theme.palette.text.disabled,
      WebkitTextFillColor: `${theme.palette.grey[600]} !important`,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.grey[50]}`,
    },
});

export const inputEndAdorementStyles = (theme: Theme) => ({
  "& .MuiInputAdornment-root .MuiIconButton-root": {
    height: "calc(1.8rem + 1.2rem + 2px)",
    padding: "0.4rem 0.8rem",
    marginRight: "-13px",
    borderRadius: "0 4px 4px 0",
    backgroundColor: theme.palette.grey[50],
    border: `1px solid ${theme.palette.grey[50]}`,
    borderLeft: "none",
    "&:hover": {
      backgroundColor: theme.palette.grey[100],
    },
  },
});
