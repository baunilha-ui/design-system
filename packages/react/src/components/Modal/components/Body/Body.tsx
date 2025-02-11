import styles from './Body.module.scss'
import { classNames } from 'src/utils/classNames'

type BodyProps = {
  children: React.ReactNode
  className?: string
}

export const Body = ({ children, className: _className }: BodyProps) => {
  const className = classNames(styles.body, _className)

  return <div className={className}>{children}</div>
}
