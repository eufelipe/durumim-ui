import React from "react";

import { colors } from "@durumim-ui/colors";

import durumimTheme from "./durumimTheme";
import "./global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  backgrounds: {
    default: "dark",
    values: [
      {
        name: "dark",
        value: colors.stone,
      },
      {
        name: "light",
        value: colors.stone,
      },
    ],
  },

  docs: {
    theme: durumimTheme,
  },
};

export const decorators = [
  (Story: any) => (
    <div className="content">
      <Story />
    </div>
  ),
];
