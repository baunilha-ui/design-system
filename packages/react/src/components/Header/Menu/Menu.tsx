import { classNames } from 'src/utils/classNames'
import styles from './Menu.module.scss'

type MenuProps = {
  children: React.ReactNode
  className?: string
}

export const Menu = ({ children, className: _className }: MenuProps) => {
  const className = classNames(styles.menu, _className)

  return <div className={className}>{children}</div>
}
