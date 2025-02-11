import { classNames } from 'src/utils/classNames'
import styles from './BaseInput.module.scss'
import sizes from './Size.module.scss'

type BaseInputProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2
  hasError?: boolean
  ref?: React.Ref<HTMLInputElement>
  onClick?: () => void
}

export const BaseInput = ({
  ref,
  className: _className,
  children,
  size = 1,
  hasError = false,
  onClick,
}: BaseInputProps) => {
  const className = classNames(
    styles.baseInput,
    _className,
    sizes[`size-${size}`],
    {
      [styles.hasError]: hasError,
    },
  )

  return (
    <div ref={ref} onClick={onClick} className={className}>
      {children}
    </div>
  )
}
