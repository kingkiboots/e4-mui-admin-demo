import { createTheme } from "@mui/material/styles";
import { typographyConfig } from "./themeConfig.typography";
import { paletteConfig } from "./themeConfig.palette";

// TypeScript 타입 확장
declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    dark: true;
  }
}

export const themeConfig = createTheme({
  typography: typographyConfig,
  spacing: (factor: number) =>
    `${[4, 8, 16, 24, 32, 40, 48, 56, 64][factor] / 10}rem`,

  palette: paletteConfig,
});
