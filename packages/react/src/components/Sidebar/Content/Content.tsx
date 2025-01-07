import { classNames } from '../../../utils/classNames'
import styles from './Content.module.scss'

type ContentProps = {
  children: React.ReactNode
  className?: string
}

export const Content = ({ children, className: _className }: ContentProps) => {
  const className = classNames(styles.content, _className)

  return <div className={className}>{children}</div>
}
