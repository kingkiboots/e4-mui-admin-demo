import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { memo } from "react";

const GlobalStyle = memo(() => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          "*": {
            boxSizing: "border-box",
          },
          "html, body": {
            direction: "ltr",
            textRendering: "optimizeLegibility",
            fontSize: "62.5%",
            letterSpacing: "0.1px",
            backgroundColor: "#fff",
          },
        }}
      />
    </>
  );
});

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
