import { DefaultTheme } from "styled-components/native";
import { BadgeSizes, BadgeType } from "./types";

const PADDING: Record<BadgeSizes, (theme: DefaultTheme) => string> = {
  1: (theme) => `${theme.space[0.5]} ${theme.space[2]}`,
  2: (theme) => `${theme.space[0.5]} ${theme.space[2.5]}`,
  3: (theme) => `${theme.space[1]} ${theme.space[3]}`,
};

const RADIUS: Record<BadgeSizes, (theme: DefaultTheme) => string> = {
  1: (theme) => theme.borderRadius["1.5"],
  2: (theme) => theme.borderRadius["1.5"],
  3: (theme) => theme.borderRadius["2"],
};

export const getBadgePadding = (size: BadgeSizes, theme: DefaultTheme) => {
  return PADDING[size](theme);
};

export const getBadgeRadius = (
  type: BadgeType,
  size: BadgeSizes,
  theme: DefaultTheme
) => {
  if (type === "default") {
    return RADIUS[size](theme);
  }
  return "99999px";
};
