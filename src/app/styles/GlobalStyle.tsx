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
            margin: 0,
            padding: 0,
          },
          html: {
            fontSize: "62.5%",
            direction: "ltr",
            textRendering: "optimizeLegibility",
          },
          "html, body": {
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
          },
        }}
      />
    </>
  );
});

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
