import { Content, GradientContainer, Container } from "./styles";
import { ComponentScheme } from "@/theme/schemes/createComponentsScheme";
import { ComponentPropsProvider } from "@/providers/ComponentPropsProvider";
import Icon from "./components/Icon";
import Text from "./components/Text";
import { TouchableOpacityProps, TouchableWithoutFeedback } from "react-native";
import { useButton } from "./hooks/useButton";
import { Link } from "./components/Link";

export interface ButtonChildrenProps {
  size: ButtonSize;
  textColor: string;
}
export type ButtonVariant = keyof ComponentScheme["button"];
export type ButtonSize = 1 | 2 | 3 | 4 | 5;

export interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const hasGradient: Record<ButtonVariant, boolean> = {
  "secondary-color": true,
  "tertiary-color": false,
  "primary-error": true,
  "secondary-error": true,
  "tertiary-error": false,
  primary: true,
  secondary: true,
  tertiary: false,
};

export const Button = ({
  variant = "primary",
  size = 2,
  children,
  disabled = false,
  onPress,
  ...props
}: ButtonProps) => {
  const { handleTogglePress, theme, baseProps, currentState, gradientColors } =
    useButton({
      disabled,
      size,
    });

  const textColor = disabled
    ? theme.colors.foreground.disabled
    : theme.colors.components.button[variant].foreground[currentState];

  const shouldShowGradient = !disabled && hasGradient[variant];

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
        <Container {...baseProps} variant={variant}>
          {shouldShowGradient && <GradientContainer colors={gradientColors} />}

          <Content variant={variant} {...baseProps}>
            {children}
          </Content>
        </Container>
      </TouchableWithoutFeedback>
    </ComponentPropsProvider>
  );
};

Button.Icon = Icon;
Button.Text = Text;
Button.Link = Link;
