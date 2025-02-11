import { classNames } from 'src/utils/classNames'
import styles from './Header.module.scss'

type HeaderProps = {
  children: React.ReactNode
  className?: string
}

export const Header = ({ children, className: _className }: HeaderProps) => {
  const className = classNames(styles.header, _className)

  return (
    <header className={className}>
      <div className={styles.content}>{children}</div>
    </header>
  )
}
