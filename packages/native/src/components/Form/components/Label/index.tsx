import React from "react";
import { BaseText } from "../../../BaseText";

export interface LabelProps {
  isRequired?: boolean;
  children: React.ReactNode;
}
export const Label = ({ children, isRequired }: LabelProps) => {
  return (
    <BaseText color="secondary" weight={500}>
      {children}
      {isRequired && (
        <BaseText color={"brandTertiary"} weight={500}>
          {" "}
          *
        </BaseText>
      )}
    </BaseText>
  );
};
