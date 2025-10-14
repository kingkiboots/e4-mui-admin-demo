import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";
import type React from "react";
import { themeConfig } from "../theme/themeConfig";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
