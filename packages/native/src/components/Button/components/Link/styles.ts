import styled, { css, DefaultTheme } from "styled-components/native";
import { ButtonSize } from "../..";

const getGapStyles = (size: ButtonSize, theme: DefaultTheme) => {
  const sizes: Record<ButtonSize, { gap: string }> = {
    1: {
      gap: theme.space[1.5],
    },
    2: {
      gap: theme.space[1.5],
    },
    3: {
      gap: theme.space[2],
    },
    4: {
      gap: theme.space[2],
    },
    5: {
      gap: theme.space[3],
    },
  };

  const { gap } = sizes[size];

  return css`
    gap: ${gap};
  `;
};

export const ButtonLinkContainer = styled.View<{
  size: ButtonSize;
  theme: DefaultTheme;
}>`
  flex-direction: row;
  align-items: center;
  /* Gap */
  ${({ size, theme }) => getGapStyles(size, theme)}

  flex-direction: row;
  align-items: center;
`;
