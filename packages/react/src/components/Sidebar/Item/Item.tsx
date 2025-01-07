import { classNames } from '../../../utils/classNames'
import styles from './Item.module.scss'

type ItemProps = {
  children: React.ReactNode
  active?: boolean
  ref?: React.Ref<HTMLDivElement>
}

export const Item = ({ children, active = false, ref }: ItemProps) => {
  const className = classNames(styles.item, {
    [styles.active]: active,
  })
  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  )
}
