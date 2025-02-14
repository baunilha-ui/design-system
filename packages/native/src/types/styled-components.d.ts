import "styled-components";
import { Theme } from "../constants/theme";

const theme = {
  color: "red",
} as const;

declare module "styled-components" {
  type ThemeType = typeof theme;
  interface DefaultTheme extends ThemeType {}
}
