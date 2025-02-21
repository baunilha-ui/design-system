import "styled-components";
import { Theme } from "../constants/theme";

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
