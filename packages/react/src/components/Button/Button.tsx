import { classNames } from '../../utils/classNames'
import styles from './Button.module.scss'
import sizes from './Size.module.scss'
import variants from './Variant.module.scss'

export type ButtonProps = {
  ref?: React.Ref<HTMLButtonElement>
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3 | 4 | 5
  variant?:
    | 'primary'
    | 'secondary'
    | 'secondary-color'
    | 'tertiary'
    | 'tertiary-color'
    | 'danger'
  disabled?: boolean
  type?: 'button' | 'submit'
  full?: boolean
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = ({
  ref,
  children,
  className: _className,
  size = 1,
  variant = 'primary',
  disabled,
  type = 'button',
  onClick,
  full = false,
}: ButtonProps) => {
  const className = classNames(
    styles.button,
    _className,
    sizes[`size-${size}`],
    variants[`variant-${variant}`],
    {
      [styles.full]: full,
    },
  )

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={className}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
