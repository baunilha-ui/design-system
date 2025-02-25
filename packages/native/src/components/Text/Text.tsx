import { Text as NativeText } from "react-native";
import { TextProps } from "./Text.types";
import { useStyles } from "./Text.styles";

export const Text = ({
  children,
  weight = 400,
  size = 3,
  color = "secondary",
}: TextProps) => {
  const styles = useStyles({ size, weight, color });

  return <NativeText style={styles.text}>{children}</NativeText>;
};
