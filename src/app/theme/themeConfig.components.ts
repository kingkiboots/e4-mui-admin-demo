import type { CssVarsThemeOptions } from "@mui/material/styles";

export const componentsConfig: CssVarsThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: (theme) => `
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }

      html {
        font-size: 62.5%;
        direction: ltr;
        text-rendering: optimizeLegibility;
      }

      body {
        letter-spacing: 0.1px;
        background-color: #fff;
        font-size: 1.3rem;
      }

      a {
        text-decoration: none;
        color: ${theme.palette.text.primary};
        cursor: pointer;
        background-color: transparent;
        touch-action: manipulation;
      }
        
      a:hover, a:active {
        text-decoration: none;          
      }

      ul, ol {
        list-style: none;
      }
    `,
  },
};
