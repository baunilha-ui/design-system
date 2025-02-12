import { ReactNode } from "react";
import { ThemeConfigProps } from "../types/theme";
import { Theme } from "../constants/theme";
export type Scheme = "light" | "dark";
interface ThemeProviderProps {
    children: ReactNode;
    userTheme?: ThemeConfigProps;
}
interface ThemeContextProps {
    scheme: Scheme;
    theme: Theme;
    getScheme: () => Promise<void>;
    toggleScheme: () => Promise<void>;
}
declare const ThemeProvider: ({ userTheme, children }: ThemeProviderProps) => import("react/jsx-runtime").JSX.Element;
declare function useTheme(): ThemeContextProps;
export { ThemeProvider, useTheme };
//# sourceMappingURL=ThemeProvider.d.ts.map