import CssBaseline from "@mui/material/CssBaseline";
import GlobalStyles from "@mui/material/GlobalStyles";
import { memo } from "react";

const GlobalStyle = memo(() => {
  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={(theme) => ({
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
          body: {
            letterSpacing: "0.1px",
            backgroundColor: "#fff",
            fontSize: "1.3rem",
          },
          "a:link,a:visited": {
            textDecoration: "none",
            color: theme.palette.text.primary,
            cursor: "pointer",
            backgroundColor: "transparent",
            touchAction: "manipulation",
          },
          "a:hover,a:active": {},
          "ul, ol": {
            listStyle: "none",
          },
        })}
      />
    </>
  );
});

GlobalStyle.displayName = "GlobalStyle";

export default GlobalStyle;
