var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useEffect, useState, } from "react";
import { ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { mergeThemes } from "../services/initializeTheme";
import { useColorScheme as useNativeColorScheme } from "react-native";
import { createBorderRadiusInPixel } from "../theme/schemes/createBorderRadiusInPixel";
import { createFontSizeInPixel } from "../theme/schemes/createFontSizeInPixel";
import { createSpaceInPixel } from "../theme/schemes/createSpaceInPixel";
import { createLineHeightInPixel } from "../theme/schemes/createLineHeightInPixel";
import { createDarkTheme, createLightTheme, } from "../theme/schemes/createTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { merge } from "../utils/merge";
const ThemeContext = createContext({});
const THEME_KEY = "@theme";
const ThemeProvider = ({ userTheme, children }) => {
    const userPreferredScheme = useNativeColorScheme();
    const [scheme, setScheme] = useState(userPreferredScheme || "light");
    const getScheme = () => __awaiter(void 0, void 0, void 0, function* () {
        try {
            const storageScheme = (yield AsyncStorage.getItem(THEME_KEY));
            if (storageScheme)
                setScheme(storageScheme);
        }
        catch (error) {
            console.log(error);
        }
    });
    const toggleScheme = () => __awaiter(void 0, void 0, void 0, function* () {
        const updatedScheme = scheme === "light" ? "dark" : "light";
        try {
            yield AsyncStorage.setItem(THEME_KEY, updatedScheme);
            setScheme(updatedScheme);
        }
        catch (error) {
            console.log("Toggle scheme error:", error);
        }
    });
    useEffect(() => {
        getScheme();
    }, []);
    const mergedTheme = mergeThemes(userTheme);
    const userLightTheme = (userTheme === null || userTheme === void 0 ? void 0 : userTheme.light) || {};
    const userDarkTheme = (userTheme === null || userTheme === void 0 ? void 0 : userTheme.dark) || {};
    const lightColors = merge(createLightTheme(mergedTheme), userLightTheme);
    const darkColors = merge(createDarkTheme(mergedTheme), userDarkTheme);
    const themeColors = scheme === "light" ? lightColors : darkColors;
    const theme = Object.assign(Object.assign({}, mergedTheme), { raw: {
            space: mergedTheme.space,
            borderRadius: mergedTheme.borderRadius,
            fontSize: mergedTheme.fontSize,
        }, lineHeight: createLineHeightInPixel(mergedTheme.lineHeight), borderRadius: createBorderRadiusInPixel(mergedTheme.borderRadius), fontSize: createFontSizeInPixel(mergedTheme.fontSize), space: createSpaceInPixel(mergedTheme.space), colors: Object.assign(Object.assign({}, mergedTheme.colors), themeColors) });
    return (_jsx(ThemeContext.Provider, { value: { toggleScheme, getScheme, scheme, theme }, children: _jsx(StyledComponentesProvider, { theme: theme, children: children }) }));
};
function useTheme() {
    return useContext(ThemeContext);
}
export { ThemeProvider, useTheme };
