import type { StorybookConfig } from "@storybook/react-vite";
import { resolve } from "path";

const config: StorybookConfig = {
  stories: ["./**/*.stories.@(js|jsx|mjs|ts|tsx)"],

  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  docs: {
    defaultName: "Documentation",
  },
  typescript: {
    check: false,
    // Enables the `react-docgen-typescript` parser.
    // See https://storybook.js.org/docs/api/main-config/main-config-typescript for more information about this option.
    reactDocgen: "react-docgen-typescript",
  },

  async viteFinal(config) {
    const { mergeConfig } = await import("vite");

    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": resolve(__dirname, "../src"),
        },
      },
    });
  },
};
export default config;
