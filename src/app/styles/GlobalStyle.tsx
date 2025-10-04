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
          "a:link,a:visited": {
            textDecoration: "none",
            color: "#886ab5",
            cursor: "pointer",
            backgroundColor: "transparent",
            touchAction: "manipulation",
          },
          "a:hover,a:active": {},
          "ul, ol": {
            listStyle: "none",
            margin: 0,
            padding: 0,
          },
        }}
      />
    </>
  );
});

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
