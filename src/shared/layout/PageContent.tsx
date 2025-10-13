import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import type { MuiExtraProps } from "../type";

export const PageContent = styled(Stack, {
  label: "page-content",
})<MuiExtraProps>(({ theme }) => ({
  color: theme.palette.grey[500],
  padding: `${theme.spacing(2)} ${theme.spacing(3)}`,
  position: "relative",
  flex: "1 1 auto",
  order: 3,
}));
