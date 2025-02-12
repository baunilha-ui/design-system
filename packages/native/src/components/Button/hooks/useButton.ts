import React, { useMemo, useState } from "react";
import { useTheme } from "@/providers/ThemeProvider";
import { getButtonState } from "../Colors";
import { ButtonSize } from "..";

type GradientTuple = [string, string];

interface UseButtonProps {
  disabled: boolean;
  size: ButtonSize;
}

const skeumorphicInner = {
  light: ["transparent", "rgba(16, 24, 40, 0.05)"] as GradientTuple,
  dark: ["transparent", "rgba(12, 17, 29, 0.05)"] as GradientTuple,
};

export const useButton = ({ disabled, size }: UseButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const { scheme, theme } = useTheme();

  const handleTogglePress = () => {
    setIsPressed((prev) => !prev);
  };

  const currentState = useMemo(() => getButtonState(isPressed), [isPressed]);
  const gradientColors = skeumorphicInner[scheme];

  const baseProps = {
    disabled: disabled,
    isPressed: isPressed,
    size: size,
  };
  return {
    gradientColors,
    theme,
    currentState,
    baseProps,
    handleTogglePress,
  };
};
