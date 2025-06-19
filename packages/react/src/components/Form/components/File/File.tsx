import { memo, useImperativeHandle, useRef, useState } from "react";
import { BaseInput } from "../BaseInput/BaseInput";
import styles from "./File.module.scss";
import { classNames } from "src/utils/classNames";
import { createFakeEvent } from "../../utils/create-fake-event";
import { useFileInputRef } from "./useFileInputRef";

export type FileProps = {
  ref?: React.Ref<HTMLInputElement>;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  size?: 1 | 2;
  hasError?: boolean;
  name: string;
  format?: (value: string) => string;
  containerClassName?: string;
  children?: React.ReactNode;
  onFileChange?: (file: File) => Promise<any>;
};

export const File = ({
  placeholder,
  size,
  hasError,
  ref,
  onChange,
  onBlur,
  name,
  format,
  containerClassName,
  children,
  onFileChange,
}: FileProps) => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<any>();

  const onInputFileBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (file) {
      onBlur?.(
        createFakeEvent({
          name,
          value: file,
          type: "blur",
        })
      );
    }
  };

  const onInputFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const result = await onFileChange?.(file);

    if (result) {
      setFile(result);
      onChange?.(
        createFakeEvent({
          name,
          value: result,
          type: "change",
        })
      );
    }
  };

  useFileInputRef({
    ref,
    targetRef: fileRef,
  });

  const containerClassNames = classNames(styles.container, containerClassName);

  return (
    <BaseInput
      className={containerClassNames}
      size={size}
      hasError={hasError}
      onClick={fileRef.current?.click}
    >
      {children}
      <input
        ref={fileRef}
        id={name}
        name={name}
        onChange={onInputFileChange}
        onBlur={onInputFileBlur}
        type={"file"}
        placeholder={placeholder}
        className={styles.input}
        onClick={(e) => e.stopPropagation()}
      />
    </BaseInput>
  );
};

File.displayName = "File";

export const MemoizedFile = memo(File) as typeof File;
