import { createTheme } from "@mui/material/styles";

// TypeScript 타입 확장
declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      background: string;
      backgroundImage: string;
      text: string;
      menu: string;
      active: string;
      hover: string;
    };
  }
  interface PaletteOptions extends Partial<Palette> {}

  interface TypeBackground {
    dark: string;
  }
}

export const themeConfig = createTheme({
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
    htmlFontSize: 10, // 1rem = 10px (62.5%)
  },
  spacing: (factor: number) =>
    `${[4, 8, 16, 24, 32, 40, 48, 56, 64][factor] / 10}rem`,

  palette: {
    text: {
      primary: "#0114A7",
      disabled: "#F3F3F3",
    },
    primary: {
      main: "#0018CE",
      dark: "#000f80ff",
    },
    secondary: {
      main: "#7C757D",
    },
    info: {
      main: "#0114A7",
    },
    success: {
      main: "#24b3a4",
    },
    grey: {
      "50": "#d5d5d5",
      "100": "#dbdbdb",
      "200": "#a6a6a6",
      "300": "#868e96",
      "400": "#666666",
      "500": "#212529",
      "600": "#333",
    },
    background: {
      default: "#f8f8f8",
      paper: "#fff",
      dark: "#505050",
    },
    sidebar: {
      background: "#2e323a",
      backgroundImage:
        "linear-gradient(270deg, rgba(255, 255, 255, 0), transparent)",
      text: "#ffffff",
      menu: "#b5b5b5",
      active: "#a8b2ff",
      hover: "rgba(0, 0, 0, 0.1)",
    },
  },
});
