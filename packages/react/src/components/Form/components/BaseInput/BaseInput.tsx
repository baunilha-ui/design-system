import { classNames } from 'src/utils/classNames'
import styles from './BaseInput.module.scss'
import sizes from './Size.module.scss'

type BaseInputProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2
  hasError?: boolean
}

export const BaseInput = ({
  className: _className,
  children,
  size = 1,
  hasError = false,
}: BaseInputProps) => {
  const className = classNames(
    styles.baseInput,
    _className,
    sizes[`size-${size}`],
    {
      [styles.hasError]: hasError,
    },
  )

  return <div className={className}>{children}</div>
}
