import { BaseTheme } from "../../constants/theme";
interface ColorScheme {
    default: string;
    hover: string;
}
interface ButtonScheme {
    foreground: ColorScheme;
    background: ColorScheme;
    border?: ColorScheme;
}
export interface ComponentScheme {
    button: {
        primary: ButtonScheme;
        secondary: ButtonScheme;
        tertiary: ButtonScheme;
        "secondary-color": ButtonScheme;
        "tertiary-color": ButtonScheme;
        "primary-error": ButtonScheme;
        "secondary-error": ButtonScheme;
        "tertiary-error": ButtonScheme;
    };
    buttonLink: {
        gray: {
            foreground: ButtonScheme["foreground"];
        };
        color: {
            foreground: ButtonScheme["foreground"];
        };
        error: {
            foreground: ButtonScheme["foreground"];
        };
    };
    toggle: {
        track: {
            background: {
                active: string;
                inactive: string;
                hover: string;
            };
        };
    };
}
export declare const createLightComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export declare const createDarkComponentsScheme: (theme: BaseTheme) => ComponentScheme;
export {};
//# sourceMappingURL=createComponentsScheme.d.ts.map