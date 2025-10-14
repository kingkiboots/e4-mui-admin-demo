import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import type { PropsWithChildren } from "react";
import type React from "react";
import GlobalStyle from "../styles/GlobalStyle";
import themeConfig from "../theme/themeConfig";

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <MuiThemeProvider theme={themeConfig}>
      <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
        <GlobalStyle />
        {children}
      </LocalizationProvider>
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
