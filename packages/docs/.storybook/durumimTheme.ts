import { colors } from "@durumim-ui/colors";
import { create, themes } from "@storybook/theming";

export default create({
  ...themes.dark,
  base: "dark",

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  brandTitle: "durumim UI",
  brandUrl: "https://github.com/eufelipe/durumim-ui",
  brandImage:
    "https://res.cloudinary.com/eufelipe/image/upload/v1678545033/durumim/brand_vo366a.png",
  brandTarget: "_self",

  colorPrimary: colors.primary,
  colorSecondary: colors.secondary,

  // UI
  appBg: colors.stone,
  appContentBg: colors.stone,
  appBorderColor: colors.gray200,
  appBorderRadius: 4,

  // Text colors
  textColor: colors.white,
  textInverseColor: colors.orange500,

  // Toolbar default and active colors
  barTextColor: colors.success,
  barSelectedColor: colors.white,
  barBg: colors.stone,

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
