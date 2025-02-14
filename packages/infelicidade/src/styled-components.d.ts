import "styled-components";
import { ThemeType } from "./constants/theme";

declare module "styled-components/native" {
  export interface DefaultTheme extends ThemeType {}
}
