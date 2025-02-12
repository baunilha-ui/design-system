import { Color, BaseTheme } from "../../constants/theme";
type UtilitySecondaryColor = Omit<Color, "25" | "800" | "900" | "950">;
type UtilityPrimaryColor = Omit<Color, "25" | "950">;
export type UtilityScheme = {
    gray: UtilityPrimaryColor;
    brand: UtilityPrimaryColor;
    error: UtilitySecondaryColor;
    warning: UtilitySecondaryColor;
    indigo: UtilitySecondaryColor;
    success: UtilitySecondaryColor;
    grayBlue: UtilitySecondaryColor;
    blueLight: UtilitySecondaryColor;
    blue: UtilitySecondaryColor;
    pink: UtilitySecondaryColor;
    purple: UtilitySecondaryColor;
    orange: UtilitySecondaryColor;
};
export declare const createLightUtilityScheme: (theme: BaseTheme) => UtilityScheme;
export declare const createDarkUtilityScheme: (theme: BaseTheme) => UtilityScheme;
export {};
//# sourceMappingURL=createUtilityScheme.d.ts.map