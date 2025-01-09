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
  name?: string
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
}: InputProps) => {
  return (
    <BaseInput size={size} hasError={hasError}>
      <input
        ref={ref}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.input}
      />
    </BaseInput>
  )
}
