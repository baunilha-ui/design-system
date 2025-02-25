import { ThemeMode } from "@baunilha/tokens";
import { ReactNode } from "react";

export type TextWeight = 400 | 500 | 600 | 700;

export interface TextProps extends TextStylesProps {
  children: ReactNode;
}

export interface TextStylesProps {
  // TODO: Import TextSchema & FontSizeKeys from tokens
  color: keyof ThemeMode["colors"]["text"];
  size: keyof ThemeMode["fontSize"];
  weight?: TextWeight;
}
