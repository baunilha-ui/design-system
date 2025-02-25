// import type { CSSProp } from "styled-components";

// interface NossoTema {
//     color: {
//         primary: string;
//     }
// }

//  declare module "styled-components" {
//   export interface DefaultTheme extends NossoTema {}
//  }

//  declare module "react" {
//   interface DOMAttributes<T> {
//     css?: CSSProp;
//   }
//  }

import 'styled-components/native'


declare module 'styled-components/native' {
  export interface DefaultTheme {
    borderRadius: string;


    colors: {
      main: string;
      secondary: string;
    };
  }
}

