import styled, { DefaultTheme } from "styled-components/native";
import { IconSizes } from ".";

const getIconSizes = (iconSize: IconSizes, theme: DefaultTheme) => {
  const sizes = {
    1: {
      width: theme.space[4],
      height: theme.space[4],
    },
    2: {
      width: theme.space[5],
      height: theme.space[5],
    },
    3: {
      width: theme.space[6],
      height: theme.space[6],
    },
  };

  return sizes[iconSize] || sizes[1];
};

export const IconContainer = styled.View<{ size: IconSizes }>`
  width: ${({ size, theme }) => getIconSizes(size, theme).width};
  height: ${({ size, theme }) => getIconSizes(size, theme).height};
  aspect-ratio: 1;
  display: grid;
  place-items: center;
`;
