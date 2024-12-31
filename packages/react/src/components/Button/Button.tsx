import { classNames } from '../../utils/classNames'
import styles from './Button.module.scss'
import sizes from './Size.module.scss'

export type ButtonProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3
}

export const Button = ({
  children,
  className: _className,
  size = 1,
}: ButtonProps) => {
  const className = classNames(styles.button, _className, sizes[`size-${size}`])
  return <button className={className}>{children}</button>
}
