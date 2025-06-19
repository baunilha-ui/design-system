import { memo } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import styles from "./Input.module.scss";

type BaseProps = {
  type?: string;
  placeholder?: string;
  size?: 1 | 2;
  hasError?: boolean;
  name: string;
  format?: (value: string) => string;
  containerClassName?: string;
};

type InputOnlyProps = {
  multiline?: false;
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  rows?: never;
};

type TextareaOnlyProps = {
  multiline: true;
  ref?: React.Ref<HTMLTextAreaElement>;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  rows?: number;
};

export type InputProps = BaseProps & (InputOnlyProps | TextareaOnlyProps);

export const Input = ({
  rows = 3,
  type,
  placeholder,
  size,
  hasError,
  ref,
  onChange,
  onBlur,
  name,
  format,
  multiline,
  containerClassName
}: InputProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (multiline) return;

    if (format) e.target.value = format(e.target.value);
    onChange?.(e);
  };

  return (
    <BaseInput className={containerClassName} size={size} hasError={hasError} multiline={multiline}>
      {multiline ? (
        <textarea
          autoComplete="off"
          ref={ref as React.Ref<HTMLTextAreaElement>}
          id={name}
          name={name}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={styles.input}
          rows={rows}
        />
      ) : (
        <input
          autoComplete="off"
          ref={ref}
          id={name}
          name={name}
          onChange={onInputChange}
          onBlur={onBlur}
          type={type}
          placeholder={placeholder}
          className={styles.input}
        />
      )}
    </BaseInput>
  );
};

Input.displayName = "Input";

export const MemoizedInput = memo(Input) as typeof Input;
