import { BaseTheme, ColorScheme } from "../constants/theme";
import { DeepPartial } from "./utils";
export type ThemeConfigProps = DeepPartial<BaseTheme> & {
    light?: DeepPartial<ColorScheme>;
    dark?: DeepPartial<ColorScheme>;
};
//# sourceMappingURL=theme.d.ts.map