import type { PaletteColorOptions, PaletteOptions } from "@mui/material/styles";

// TypeScript 타입 확장
declare module "@mui/material/styles" {
  interface Palette {
    dark: PaletteColorOptions;

    sidebar: {
      background: string;
      backgroundImage: string;
      text: string;
      menu: string;
      activeMenu: string;
      active: string;
      hover: string;
    };
  }
  interface PaletteOptions extends Partial<Palette> {
    dark?: Palette["dark"];
  }

  interface Color {
    40: string;
  }

  interface TypeText {
    default: string;
  }
  interface TypeBackground {
    dark: string;
  }
}

export const paletteConfig: PaletteOptions = {
  text: {
    default: "#212529",
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
  dark: {
    main: "#4e4e4e",
    contrastText: "#fff",
  },
  success: {
    main: "#868e96",
  },
  grey: {
    "40": "#e0e0e0",
    "50": "#E5E5E5",
    "100": "#d5d5d5",
    "200": "#dbdbdb",
    "300": "#a6a6a6",
    "400": "#868e96",
    "500": "#666666",
    "600": "#495057",
    "700": "#333",
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
    activeMenu: "rgba(255, 255, 255, 0.04)",
    active: "#a8b2ff",
    hover: "rgba(0, 0, 0, 0.1)",
  },
};
