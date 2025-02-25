import { useCreateThemedStyles } from "src/theme/useCreateThemedStyles";
import { IconSizes, IconStylesProps } from "./Icon.types";
import { ThemeMode } from "@baunilha/tokens";

const getIconSizes = (size: IconSizes, theme: ThemeMode) => {
  const sizes = {
    1: {
      width: theme.raw.space[4],
      height: theme.raw.space[4],
    },
    2: {
      width: theme.raw.space[5],
      height: theme.raw.space[5],
    },
    3: {
      width: theme.raw.space[6],
      height: theme.raw.space[6],
    },
  };

  return sizes[size] || sizes[1];
};

export const useStyles = useCreateThemedStyles((theme: ThemeMode, { size }: IconStylesProps ) => ({
  icon: {
    width: getIconSizes(size, theme).width,
    height: getIconSizes(size, theme).height,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}))