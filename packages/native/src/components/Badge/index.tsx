import { View } from "react-native";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { ComponentPropsProvider } from "../../providers/ComponentPropsProvider";
import { Container } from "./styles";
import { BadgeSizes, BadgeColors, BadgeVariants, BadgeType } from "./types";
import { FontSizeKeys } from "../../constants/theme";
import React from "react";

export interface BadgeProps {
  size?: BadgeSizes;
  color: BadgeColors;
  variant?: BadgeVariants;
  type?: BadgeType;
  children: React.ReactNode;
}

export const Badge = ({
  color,
  children,
  size = 2,
  type = "default",
  variant = "fill",
}: BadgeProps) => {
  const textSize: FontSizeKeys = size === 1 ? "2" : "3";
  const isOutline = variant === "outline";
  return (
    <ComponentPropsProvider value={{ color, textSize, isOutline }}>
      <View>
        <Container color={color} type={type} size={size} variant={variant}>
          {children}
        </Container>
      </View>
    </ComponentPropsProvider>
  );
};

Badge.Icon = Icon;
Badge.Text = Text;
