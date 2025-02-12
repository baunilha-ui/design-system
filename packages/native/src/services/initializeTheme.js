import { merge } from "../utils/merge";
import { BASE_THEME } from "../constants/theme";
export const mergeThemes = (userTheme = {}) => {
    return merge(BASE_THEME, userTheme);
};
