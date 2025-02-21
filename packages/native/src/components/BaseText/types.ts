import { FontSizeInPixels, FontSizeKeys } from "@/constants/theme";
import { TextScheme } from "@/theme/schemes/createTextScheme";
import { ReactNode } from "react";

export type CustomTextWeight = 400 | 500 | 600 | 700;

export interface TextProps extends CustomTextProps {
  children: ReactNode;
}

export interface CustomTextProps {
  color?: keyof TextScheme;
  size?: keyof FontSizeInPixels;
  weight?: CustomTextWeight;
}
