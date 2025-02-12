import { useComponentProps } from "../../../../providers/ComponentPropsProvider";
import React from "react";
import { BadgeChildrenProps } from "../../types";
import { StyledBadgeText } from "./styles";

const Text = ({ children }: { children: React.ReactNode }) => {
  const { color, textSize } = useComponentProps<BadgeChildrenProps>();

  return (
    <StyledBadgeText size={textSize} badgeColor={color}>
      {children}
    </StyledBadgeText>
  );
};

export default Text;
