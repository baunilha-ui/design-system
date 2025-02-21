import { BaseText } from "@/components/BaseText";
import styled from "styled-components/native";
import { ButtonSize } from "../..";
import { getTextSizeStyles } from "./Sizes";

type StyledTextProps = {
  textColor: string;
  buttonSize: ButtonSize;
};

export const StyledButtonText = styled(BaseText).attrs<StyledTextProps>(({ buttonSize }) => ({
  size: getTextSizeStyles({ size: buttonSize }),
}))<StyledTextProps>`
  color: ${({ textColor }) => textColor};
`;
