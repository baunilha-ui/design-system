import { Divider as CommonDivider } from 'src/components/Divider/Divider'

import styles from './Divider.module.scss'
import { classNames } from 'src/utils/classNames'

type DividerProps = {
  className?: string
}

export const Divider = ({ className: _className }: DividerProps) => {
  const className = classNames(styles.divider, _className)

  return <CommonDivider className={className} />
}
