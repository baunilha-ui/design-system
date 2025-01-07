import { classNames } from '../../../utils/classNames'
import styles from './IconButton.module.scss'
import sizes from './Size.module.scss'

type IconButtonProps = {
  children: React.ReactNode
  size?: 1 | 2
  className?: string
  onClick?: VoidFunction
  disabled?: boolean
}

export const IconButton = ({
  children,
  size,
  className: _className,
  onClick,
  disabled,
}: IconButtonProps) => {
  const className = classNames(styles.button, _className, sizes[`size-${size}`])

  return (
    <button onClick={onClick} disabled={disabled} className={className}>
      {children}
    </button>
  )
}
