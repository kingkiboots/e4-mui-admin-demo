import { themeConfig } from "@/shared/config";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { PropsWithChildren } from "react";
import type React from "react";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return <MuiThemeProvider theme={themeConfig}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
