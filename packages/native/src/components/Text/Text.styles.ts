import { useCreateThemedStyles } from "src/theme/useCreateThemedStyles";
import { TextStylesProps } from "./Text.types";

export const getTextLineHeight = (textSize: number) => {
  const lineHeights = {
    1: 18,
    2: 18,
    3: 20,
    4: 24,
    5: 28,
    6: 30,
    7: 32,
    8: 38,
    9: 44,
    10: 60,
    11: 72,
    12: 90,
  };

  return lineHeights[textSize as keyof typeof lineHeights];
};

export const useStyles = useCreateThemedStyles((theme, { size, color, weight }: TextStylesProps) => ({
    text: {
        color: theme.colors.text[color],
        fontSize: theme.raw.fontSize[size],
        fontWeight: weight,
        lineHeight: getTextLineHeight(size)
    }
}))