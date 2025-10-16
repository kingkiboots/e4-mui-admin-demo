import type { Theme } from "@mui/material/styles";

export const disabledInputStyles = (theme: Theme) => ({
  "&.Mui-disabled, &.Mui-readOnly": {
    opacity: 1,
    cursor: "not-allowed !important",
    backgroundColor: theme.palette.text.disabled,

    "& .Mui-disabled, & .Mui-readOnly": {
      color: theme.palette.grey[600],
      WebkitTextFillColor: `${theme.palette.grey[600]} !important`,
    },
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: `${theme.palette.grey[50]}`,
    },
  },
});
