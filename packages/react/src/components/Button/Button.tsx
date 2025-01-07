import { classNames } from '../../utils/classNames'
import styles from './Button.module.scss'
import sizes from './Size.module.scss'
import variants from './Variant.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3 | 4 | 5
  variant?:
    | 'primary'
    | 'secondary'
    | 'secondary-color'
    | 'tertiary'
    | 'tertiary-color'
  disabled?: boolean
  onClick?: VoidFunction
  ref?: React.Ref<HTMLButtonElement>
}

export const Button = ({
  children,
  className: _className,
  size = 1,
  variant = 'primary',
  disabled,
  onClick,
  ref,
}: ButtonProps) => {
  const className = classNames(
    styles.button,
    _className,
    sizes[`size-${size}`],
    variants[`variant-${variant}`],
  )

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

Button.displayName = 'Button'
