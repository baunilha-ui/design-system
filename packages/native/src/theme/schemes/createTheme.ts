import { BaseTheme, ColorScheme } from "../../constants/theme";
import {
  createDarkBackgroundScheme,
  createLightBackgroundScheme,
} from "./createBackgroundScheme";
import {
  createDarkBorderScheme,
  createLightBorderScheme,
} from "./createBorderScheme";
import {
  createLightComponentsScheme,
  createDarkComponentsScheme,
} from "./createComponentsScheme";
import {
  createDarkForegroundScheme,
  createLightForegroundScheme,
} from "./createForegroundScheme";
import {
  createDarkTextScheme,
  createLightTextScheme,
} from "./createTextScheme";
import {
  createLightUtilityScheme,
  createDarkUtilityScheme,
} from "./createUtilityScheme";

export const createDarkTheme = (theme: BaseTheme): ColorScheme => {
  return {
    components: createDarkComponentsScheme(theme),
    utility: createDarkUtilityScheme(theme),
    background: createDarkBackgroundScheme(theme),
    border: createDarkBorderScheme(theme),
    text: createDarkTextScheme(theme),
    foreground: createDarkForegroundScheme(theme),
  };
};

export const createLightTheme = (theme: BaseTheme): ColorScheme => {
  return {
    components: createLightComponentsScheme(theme),
    utility: createLightUtilityScheme(theme),
    background: createLightBackgroundScheme(theme),
    border: createLightBorderScheme(theme),
    text: createLightTextScheme(theme),
    foreground: createLightForegroundScheme(theme),
  };
};
