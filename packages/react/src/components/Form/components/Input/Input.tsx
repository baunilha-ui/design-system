import { memo } from 'react'
import { BaseInput } from '../BaseInput/BaseInput'
import styles from './Input.module.scss'

export type InputProps = {
  type?: string
  placeholder?: string
  size?: 1 | 2
  hasError?: boolean

  ref?: React.Ref<HTMLInputElement>
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void
  name: string
  format?: (value: string) => string
}

export const Input = ({
  type,
  placeholder,
  size,
  hasError,
  ref,
  onChange,
  onBlur,
  name,
  format,
}: InputProps) => {
  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (format) e.target.value = format(e.target.value)

    onChange?.(e)
  }

  return (
    <BaseInput size={size} hasError={hasError}>
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
    </BaseInput>
  )
}

Input.displayName = 'Input'

export const MemoizedInput = memo(Input) as typeof Input
