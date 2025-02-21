import React from "react";
import { ButtonSize, ButtonVariant } from "../..";
import { ButtonLinkContainer } from "./styles";
import { ComponentPropsProvider } from "@/providers/ComponentPropsProvider";
import { useButton } from "../../hooks/useButton";
import { TouchableOpacityProps, TouchableWithoutFeedback } from "react-native";
import { ComponentScheme } from "@/theme/schemes/createComponentsScheme";

export interface LinkProps extends TouchableOpacityProps {
  size?: ButtonSize;
  variant?: keyof ComponentScheme["buttonLink"];
  children: React.ReactNode;
  onPress: () => void;
}

export const Link = ({
  children,
  disabled = false,
  size = 2,
  variant = "gray",
  onPress,
  ...props
}: LinkProps) => {
  const { handleTogglePress, theme, currentState, baseProps } = useButton({
    disabled,
    size,
  });

  const textColor = disabled
    ? theme.colors.foreground.disabled
    : theme.colors.components.buttonLink[variant].foreground[currentState];

  return (
    <ComponentPropsProvider value={{ textColor, size }}>
      <TouchableWithoutFeedback
        delayPressIn={0}
        delayPressOut={0}
        onPressIn={handleTogglePress}
        onPress={disabled ? undefined : onPress}
        onPressOut={handleTogglePress}
        {...props}
      >
        <ButtonLinkContainer {...baseProps}>{children}</ButtonLinkContainer>
      </TouchableWithoutFeedback>
    </ComponentPropsProvider>
  );
};
