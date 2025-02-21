import React, { useState } from "react";
import {
  NativeSyntheticEvent,
  Platform,
  TextInputFocusEventData,
  TextInputProps,
} from "react-native";
import {
  BorderContainer,
  InputContainer,
  StyledInput,
  SuffixContainer,
} from "./styles";
import { IconKeys, BaseIcon } from "../../../BaseIcon";
import { useTheme } from "@/providers/ThemeProvider";
import { getTextLineHeight } from "@/components/BaseText/styles";

export interface InputProps extends TextInputProps {
  hasError?: boolean;
  suffix?: IconKeys;
  mask?: (value: string) => string;
  onFocus?: (event?: any) => void;
  onBlur?: (event?: any) => void;
  onChange?: (event?: any) => void;
  value?: string;
}

export const Input = ({
  hasError,
  suffix,
  onFocus,
  onBlur,
  onChange,
  mask,
  value,
  ...props
}: InputProps) => {
  const { theme } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleOnChange = (text: string) => {
    const maskedText = mask ? mask(text) : text;
    onChange?.(maskedText);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const suffixIcon = suffix ? suffix : hasError ? "alert-circle" : null;

  const minHeight = Platform.select({
    android: `${(props.numberOfLines || 1) * getTextLineHeight("3")}px`,
    default: "auto",
  });

  return (
    <InputContainer
      isFocused={isFocused}
      hasSuffixIcon={!!suffixIcon}
      hasError={hasError}
    >
      <BorderContainer hasError={hasError} isFocused={isFocused} />
      <StyledInput
        minHeight={minHeight}
        underlineColorAndroid={"transparent"}
        onFocus={handleFocus}
        onBlur={handleBlur}
        textAlignVertical="top"
        placeholderTextColor={theme.colors.text.placeholder}
        selectionColor={theme.colors.primary.brand[400]}
        onChangeText={handleOnChange}
        value={value}
        {...props}
      />
      {suffixIcon && (
        <SuffixContainer>
          <BaseIcon
            size={1}
            color={
              hasError
                ? theme.colors.primary.error[500]
                : theme.colors.foreground.quinary
            }
            name={suffixIcon}
          />
        </SuffixContainer>
      )}
    </InputContainer>
  );
};
