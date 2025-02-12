import { BaseTheme } from "../../constants/theme";
export type BorderScheme = {
    primary: string;
    secondary: string;
    tertiary: string;
    disabled: string;
    disabled_subtle: string;
    brand: string;
    brandAlt: string;
    error: string;
    error_subtle: string;
};
export declare const createLightBorderScheme: (theme: BaseTheme) => BorderScheme;
export declare const createDarkBorderScheme: (theme: BaseTheme) => BorderScheme;
//# sourceMappingURL=createBorderScheme.d.ts.map