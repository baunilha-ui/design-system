import { classNames } from '../../../utils/classNames'
import styles from './Header.module.scss'

type HeaderProps = {
  children: React.ReactNode
  className?: string
}

export const Header = ({ children, className: _className }: HeaderProps) => {
  const className = classNames(styles.header, _className)

  return <div className={className}>{children}</div>
}
