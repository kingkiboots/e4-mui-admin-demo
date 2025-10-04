import { createTheme } from "@mui/material/styles";

export const themeConfig = createTheme({
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
    htmlFontSize: 10, // 62.5%
  },
  palette: {
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  spacing: 8,
});
