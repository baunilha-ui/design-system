import { ButtonSize } from "../..";
import { FontSizeInPixels } from "@/constants/theme";

interface GetVariantSpacingStylesProps {
  size: ButtonSize;
}

export const getTextSizeStyles = ({ size }: GetVariantSpacingStylesProps) => {
  const sizes: Record<ButtonSize, keyof FontSizeInPixels> = {
    1: "3",
    2: "3",
    3: "4",
    4: "4",
    5: "5",
  };

  return sizes[size];
};
