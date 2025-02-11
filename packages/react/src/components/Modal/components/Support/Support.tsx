import { classNames } from 'src/utils/classNames'
import styles from './Support.module.scss'

type SupportProps = {
  children: React.ReactNode
  className?: string
}

export const Support = ({ children, className: _className }: SupportProps) => {
  const className = classNames(styles.support, _className)

  return <p className={className}>{children}</p>
}
