import { classNames } from 'src/utils/classNames'
import styles from './Item.module.scss'

type ItemProps = {
  children: React.ReactNode
  onClick?: () => void
}

export const Item = ({ children, onClick }: ItemProps) => {
  const itemClassName = classNames(styles.item, {
    [styles.item__clickable]: !!onClick,
  })
  return (
    <div className={styles.wrapper}>
      <div className={itemClassName} onClick={onClick}>
        {children}
      </div>
    </div>
  )
}
