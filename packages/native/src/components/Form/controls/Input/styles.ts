import { getTextLineHeight } from "@/components/BaseText/styles";
import { TextInput, View } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";

interface InputContainerProps {
  hasSuffixIcon?: boolean;
  isFocused?: boolean;
  hasError?: boolean;
}

const getInputBorderColor = (
  isFocused: boolean = false,
  theme: DefaultTheme,
  hasError: boolean = false
) => {
  if (hasError) return theme.colors.border.error;
  if (isFocused) return theme.colors.border.brand;
  return theme.colors.border.primary;
};

export const SuffixContainer = styled.View`
  position: absolute;

  /* TODO: Add theme variable */
  top: 50%;

  /* TODO: Review transform value */
  transform: translateY(-8px);
  right: ${({ theme }) => theme.space[2.5]};
`;
export const InputContainer = styled.View<InputContainerProps>`
  width: 100%;
  position: relative;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  padding: ${({ theme }) => `0px ${theme.space[2.5]}`};
  padding-right: ${({ hasSuffixIcon }) => (hasSuffixIcon ? "36px" : "12px")};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  elevation: 2;
`;

export const BorderContainer = styled.View<{
  isFocused?: boolean;
  hasError?: boolean;
}>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-width: ${({ isFocused }) => (isFocused ? "2px" : "1px")};
  border-color: ${({ theme, isFocused, hasError }) =>
    getInputBorderColor(isFocused, theme, hasError)};
  border-radius: ${({ theme }) => theme.borderRadius[3]};
  pointer-events: none;
`;

export const StyledInput = styled(TextInput)<{ minHeight?: string }>`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.space[2]};
  color: ${({ theme }) => theme.colors.text.primary};
  outline-style: none;
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize[3]};
  padding: ${({ theme }) => `${theme.space[2]} 0px`};
  min-height: ${({ minHeight }) => minHeight || "auto"};
  height: ${({ theme, multiline }) => (multiline ? "auto" : theme.space[10])};
`;
