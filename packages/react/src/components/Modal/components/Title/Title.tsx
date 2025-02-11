import { classNames } from 'src/utils/classNames'
import styles from './Title.module.scss'

type TitleProps = {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className: _className }: TitleProps) => {
  const className = classNames(styles.title, _className)

  return <h2 className={className}>{children}</h2>
}
