import type { TypographyVariantsOptions } from "node_modules/@mui/material/esm/styles/createTypography";

export const typographyConfig: TypographyVariantsOptions = {
  fontFamily: [
    "Pretendard",
    "-apple-system",
    "BlinkMacSystemFont",
    "sans-serif",
  ].join(","),
  h1: {
    fontWeight: 700,
  },
  body1: {
    fontWeight: 400,
  },
  htmlFontSize: 10, // 1rem = 10px (62.5%)
};
