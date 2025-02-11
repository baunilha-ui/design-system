import { classNames } from 'src/utils/classNames'
import styles from './Footer.module.scss'

type FooterProps = {
  children: React.ReactNode
  className?: string
}

export const Footer = ({ children, className: _className }: FooterProps) => {
  const className = classNames(styles.footer, _className)

  return <footer className={className}>{children}</footer>
}
