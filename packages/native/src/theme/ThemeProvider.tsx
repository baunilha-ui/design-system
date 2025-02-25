import React, { createContext, useContext, useEffect, useState } from "react";
import { useColorScheme } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

import {
  createTheme,
  CustomTheme,
  getDarkTheme,
  getLightTheme,
  ThemeMode,
} from "@baunilha/tokens";

export type Scheme = "light" | "dark";

interface ThemeProviderProps {
  children: React.ReactNode;
  customTheme?: CustomTheme;
}

interface ThemeContextProps {
  theme: ThemeMode;
  scheme: Scheme;
  getScheme: () => Promise<void>;
  toggleScheme: () => Promise<void>;
}

const ThemeContext = createContext({} as ThemeContextProps);

const THEME_KEY = "@theme";

const ThemeProvider = ({ customTheme, children }: ThemeProviderProps) => {
  const userPreferredScheme = useColorScheme();

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

  const theme = createTheme({ customTheme, options: { unityType: "px" } });

  const themeByScheme =
    scheme === "light" ? getLightTheme(theme) : getDarkTheme(theme);

  return (
    <ThemeContext.Provider
      value={{ toggleScheme, getScheme, scheme, theme: themeByScheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): ThemeContextProps {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };
