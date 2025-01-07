import styles from './Header.module.scss'

type HeaderProps = {
  children?: React.ReactNode
  width?: string
  minWidth?: string
}

export const Header = ({ children }: HeaderProps) => {
  return <div className={styles.header}>{children}</div>
}
