import { DefaultTheme, css } from "styled-components";
import { ToggleSizes } from "./types";

interface SizeStyleProps {
  size: ToggleSizes;
  isActive: boolean;
  theme: DefaultTheme;
}

export const ThumbSizes = (theme: DefaultTheme) => ({
  sm: {
    width: theme.space[4],
    height: theme.space[4],
    raw: {
      width: theme.raw.space[4],
      height: theme.raw.space[4],
    },
  },
  md: {
    width: theme.space[5],
    height: theme.space[5],
    raw: {
      width: theme.raw.space[5],
      height: theme.raw.space[5],
    },
  },
});

export const getThumbSpacingStyles = ({
  size,
  theme,
}: SizeStyleProps) => {
  const { width, height } = ThumbSizes(theme)[size];

  return css`
    width: ${width};
    height: ${height};
  `;
};

export const TrackSizes = (theme: DefaultTheme) => ({
  sm: {
    width: theme.space[9],
    height: theme.space[5],
  },
  md: {
    width: theme.space[11],
    height: theme.space[6],
  },
});

export const getTrackSpacingStyles = ({ size, theme }: SizeStyleProps) => {
  const { width, height } = TrackSizes(theme)[size];

  return css`
    width: ${width};
    height: ${height};
  `;
};
