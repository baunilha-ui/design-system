import { classNames } from 'src/utils/classNames'
import styles from './Divider.module.scss'

type DividerProps = {
  className?: string
}

export const Divider = ({ className: _className }: DividerProps) => {
  const className = classNames(styles.divider, _className)

  return <div className={className} />
}
