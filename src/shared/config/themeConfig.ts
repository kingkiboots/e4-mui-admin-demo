import { createTheme } from "@mui/material/styles";

// TypeScript 타입 확장
declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      background: string;
      text: string;
      menu: string;
      active: string;
      hover: string;
    };
  }
  interface PaletteOptions extends Partial<Palette> {}
}

export const themeConfig = createTheme({
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
    htmlFontSize: 10, // 1rem = 10px (62.5%)
  },
  spacing: (factor: number) =>
    `${[4, 8, 16, 24, 32, 40, 48, 56, 64][factor] / 10}rem`,
  palette: {
    primary: {
      main: "#886ab5",
    },
    secondary: {
      main: "#7C757D",
    },
    info: {
      main: "#ff5a00",
    },
    success: {
      main: "#24b3a4",
    },
    sidebar: {
      background: "#2e323a",
      text: "#ffffff",
      menu: "#b5b5b5",
      active: "#ff5a00",
      hover: "rgba(0, 0, 0, 0.1)",
    },
  },
});
