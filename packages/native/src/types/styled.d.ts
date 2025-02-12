import { Theme } from "../constants/theme";
import "styled-components";
import "styled-components/native"
import type { CSSProp } from "styled-components";


declare module "styled-components/native" {
  interface DefaultTheme extends Theme {}

}

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}

 declare module "react" {  interface DOMAttributes<T> {    css?: CSSProp;  } }