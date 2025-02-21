import { StyledBaseText } from "./styles";
import { TextProps } from "./types";

export const BaseText = ({ children, ...props }: TextProps) => {
  return <StyledBaseText {...props}>{children}</StyledBaseText>;
};
