import { useEffect } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { ToggleSizes } from "../types";
import { useTheme } from "styled-components/native";
import { ThumbSizes } from "../Sizes";

type UseAnimatedStylesProps = {
  isActive: boolean;
  size: ToggleSizes;
};

export const useAnimatedStyles = ({
  isActive,
  size,
}: UseAnimatedStylesProps) => {
  const theme = useTheme();

  const { raw } = ThumbSizes(theme)[size];

  const thumbAnimatedStyles = useAnimatedStyle(
    () => ({
      transform: [
        { translateX: withTiming(isActive ? raw.width : 0, { duration: 300 }) },
      ],
    }),
    [isActive, size, theme]
  );

  const trackAnimatedStyles = useAnimatedStyle(
    () => ({
      backgroundColor: withTiming(
        isActive
          ? theme.colors.components.toggle.track.background.active
          : theme.colors.components.toggle.track.background.inactive,
        { duration: 300 }
      ),
    }),
    [isActive, theme]
  );

  return { thumbAnimatedStyles, trackAnimatedStyles };
};
