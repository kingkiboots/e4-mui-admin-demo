import type { Theme } from "@mui/material/styles";

export const disabledInputStyles = (theme: Theme) => ({
  "&.Mui-disabled, &.Mui-readOnly, & .Mui-disabled, & .Mui-readOnly": {
    cursor: "not-allowed",
    backgroundColor: theme.palette.text.disabled,
    opacity: 1,
    color: theme.palette.grey[600],
    WebkitTextFillColor: theme.palette.grey[600],
  },
});
