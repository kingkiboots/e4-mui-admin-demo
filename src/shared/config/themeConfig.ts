import { createTheme } from "@mui/material/styles";

// TypeScript 타입 확장
declare module "@mui/material/styles" {
  interface Palette {
    sidebar: {
      background: string;
      text: string;
    };
  }
  interface PaletteOptions {
    sidebar?: {
      background?: string;
      text?: string;
      menu?: string;
      active?: string;
    };
  }
}

export const themeConfig = createTheme({
  typography: {
    fontFamily: '"Pretendard", "Noto Sans KR", sans-serif',
    htmlFontSize: 10, // 62.5%
  },
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
    },
  },
  spacing: 8,
});
