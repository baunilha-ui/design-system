import  { createContext, useContext, useEffect, useState } from "react";
import {  ThemeProvider as StyledComponentesProvider } from "styled-components/native";
import { ThemeConfigProps } from "../types/theme";
import { mergeThemes } from "../services/initializeTheme";

import { useColorScheme as useNativeColorScheme } from "react-native";

import { createBorderRadiusInPixel } from "../theme/schemes/createBorderRadiusInPixel";
import { createFontSizeInPixel } from "../theme/schemes/createFontSizeInPixel";
import { createSpaceInPixel } from "../theme/schemes/createSpaceInPixel";
import { createLineHeightInPixel } from "../theme/schemes/createLineHeightInPixel";
import {
  createDarkTheme,
  createLightTheme,
} from "../theme/schemes/createTheme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { merge } from "../utils/merge";
import { Theme } from "@/constants/theme";

export type Scheme = "light" | "dark";
interface ThemeProviderProps {
  children: React.ReactNode;
  userTheme?: ThemeConfigProps;
}

interface ThemeContextProps {
  scheme: Scheme;
  theme: Theme;
  getScheme: () => Promise<void>;
  toggleScheme: () => Promise<void>;
}

const ThemeContext = createContext({} as ThemeContextProps);

const THEME_KEY = "@theme";


const ThemeProvider = ({ userTheme, children }: ThemeProviderProps) => {
  const userPreferredScheme = useNativeColorScheme();
  const [scheme, setScheme] = useState<Scheme>(userPreferredScheme || "light");

  const getScheme = async () => {
    try {
      const storageScheme = (await AsyncStorage.getItem(
        THEME_KEY
      )) as Scheme | null;
      if (storageScheme) setScheme(storageScheme);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleScheme = async () => {
    const updatedScheme = scheme === "light" ? "dark" : "light";
    try {
      await AsyncStorage.setItem(THEME_KEY, updatedScheme);
      setScheme(updatedScheme);
    } catch (error) {
      console.log("Toggle scheme error:", error);
    }
  };

  useEffect(() => {
    getScheme();
  }, []);

  const mergedTheme = mergeThemes(userTheme);

  const userLightTheme = userTheme?.light || {};
  const userDarkTheme = userTheme?.dark || {};

  const lightColors = merge(createLightTheme(mergedTheme), userLightTheme);
  const darkColors = merge(createDarkTheme(mergedTheme), userDarkTheme);

  const themeColors = scheme === "light" ? lightColors : darkColors;
  const theme: Theme = {
    ...mergedTheme,
    raw: {
      space: mergedTheme.space,
      borderRadius: mergedTheme.borderRadius,
      fontSize: mergedTheme.fontSize,
    },
    lineHeight: createLineHeightInPixel(mergedTheme.lineHeight),
    borderRadius: createBorderRadiusInPixel(mergedTheme.borderRadius),
    fontSize: createFontSizeInPixel(mergedTheme.fontSize),
    space: createSpaceInPixel(mergedTheme.space),
    colors: {
      ...mergedTheme.colors,
      ...themeColors,
    },
  };

  return (
    <ThemeContext.Provider value={{ toggleScheme, getScheme, scheme, theme }}>
      <StyledComponentesProvider theme={theme}>
        {children}
      </StyledComponentesProvider>
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
