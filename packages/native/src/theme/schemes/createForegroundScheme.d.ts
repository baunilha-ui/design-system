import { BaseTheme } from "../../constants/theme";
export type ForegroundScheme = {
    primary: string;
    secondary: string;
    tertiary: string;
    quaternary: string;
    quinary: string;
    senary: string;
    white: string;
    disabled: string;
    disabled_subtle: string;
    brandPrimary: string;
    brandPrimary_alt: string;
    brandSecondary: string;
    errorPrimary: string;
    errorSecondary: string;
    warningPrimary: string;
    warningSecondary: string;
    successPrimary: string;
    successSecondary: string;
};
export declare const createLightForegroundScheme: (theme: BaseTheme) => ForegroundScheme;
export declare const createDarkForegroundScheme: (theme: BaseTheme) => ForegroundScheme;
//# sourceMappingURL=createForegroundScheme.d.ts.map