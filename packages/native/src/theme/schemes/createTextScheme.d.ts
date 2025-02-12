import { BaseTheme } from "../../constants/theme";
export type TextScheme = {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    white: string;
    disabled: string;
    placeholder: string;
    placeholder_subtle: string;
    brandPrimary: string;
    brandSecondary: string;
    brandTertiary: string;
    brandTertiary_alt: string;
    errorPrimary: string;
    warningPrimary: string;
    successPrimary: string;
};
export declare const createLightTextScheme: (theme: BaseTheme) => TextScheme;
export declare const createDarkTextScheme: (theme: BaseTheme) => TextScheme;
//# sourceMappingURL=createTextScheme.d.ts.map