import React from "react";
import { FieldContainer } from "./styles";

export const FormField = ({ children }: { children: React.ReactNode }) => {
  return <FieldContainer>{children}</FieldContainer>;
};
