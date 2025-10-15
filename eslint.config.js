import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs["recommended-latest"],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      "@typescript-eslint/no-empty-object-type": "off",
      "react-hooks/exhaustive-deps": "off",
      "no-restricted-imports": [
        "error",
        {
          patterns: [{ regex: "^@mui/[^/]+$" }],
          paths: [
            {
              name: "@mui/material",
              importNames: ["Button", "Link"],
              message: "Use Button/Link from @/shared/ui instead",
            },
            {
              name: "@mui/material/Button",
              message: "Use Button from @/shared/ui instead",
            },
            {
              name: "@mui/material/Link",
              message: "Use Link from @/shared/ui instead",
            },
            {
              name: "@mui/material/ButtonGroup",
              message: "Use ButtonGroup from @/shared/ui instead",
            },
            {
              name: "@mui/material/Select",
              message: "Use Select from @/shared/ui instead",
            },
            {
              name: "@mui/material/TextField",
              message: "Use TextField from @/shared/ui instead",
            },
            {
              name: "@mui/x-date-pickers/DatePicker",
              message: "Use DatePicker from @/shared/ui instead",
            },
            {
              name: "@mui/x-data-grid",
              message: "Use DataGrid from @/shared/ui instead",
            },
          ],
        },
      ],
    },
  },
]);
