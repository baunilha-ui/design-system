import { classNames } from 'src/utils/classNames'
import styles from './Row.module.scss'

type RowProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Row = ({ children, onClick }: RowProps) => {
  const className = classNames(styles.row, {
    [styles.row__clickable]: !!onClick,
  })

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
