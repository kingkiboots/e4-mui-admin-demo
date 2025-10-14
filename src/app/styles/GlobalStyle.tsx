import CssBaseline from "@mui/material/CssBaseline";
import { memo } from "react";

const GlobalStyle = memo(() => {
  return (
    <>
      <CssBaseline />
    </>
  );
});

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
