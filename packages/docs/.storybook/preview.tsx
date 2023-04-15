import durumimTheme from "./durumimTheme";
import "./global.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  layout: "fullscreen",
  options: {
    theme: {
      mainBorder: "1px solid blue",
    },
    storySort: (a, b) =>
      a.id === b.id
        ? 0
        : a.id.localeCompare(b.id, undefined, { numeric: true }),
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  docs: {
    theme: durumimTheme,
  },
};
