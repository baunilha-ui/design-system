import { merge } from "../utils/merge";
import { BASE_THEME, BaseTheme } from "../constants/theme";
import { ThemeConfigProps } from "../types/theme";

export const mergeThemes = (userTheme: ThemeConfigProps = {}): BaseTheme => {
  return merge(BASE_THEME, userTheme);
};
