import { useComponentProps } from "@/providers/ComponentPropsProvider";
import React from "react";
import { StyledButtonText } from "./styles";
import { ButtonChildrenProps } from "../..";

const Text = ({ children }: { children: React.ReactNode }) => {
  const { textColor, size } = useComponentProps<ButtonChildrenProps>();

  return (
    <StyledButtonText textColor={textColor} weight={600} buttonSize={size}>
      {children}
    </StyledButtonText>
  );
};

export default Text;
