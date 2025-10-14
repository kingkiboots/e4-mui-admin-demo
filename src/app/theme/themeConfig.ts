import { createTheme } from "@mui/material/styles";
import { paletteConfig } from "./themeConfig.palette";
import { typographyConfig } from "./themeConfig.typography";
import { componentsConfig } from "./themeConfig.components";

const themeConfig = createTheme({
  typography: typographyConfig,
  components: componentsConfig,
  spacing: (factor: number) =>
    `${[4, 8, 16, 24, 32, 40, 48, 56, 64][factor] / 10}rem`,

  palette: paletteConfig,
});

// themeConfig = responsiveFontSizes(themeConfig);

export { themeConfig };
