import { classNames } from '../../utils/classNames'
import { Icon } from '../Icon/Icon'
import styles from './Avatar.module.scss'
import sizes from './Size.module.scss'

export type AvatarProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  src?: string
  className?: string
}

export const Avatar = ({
  className: _className,
  size = 2,
  src,
}: AvatarProps) => {
  const className = classNames(styles.avatar, sizes[`size-${size}`], _className)

  return (
    <div className={className}>
      {src ? <Icon name="user-01" /> : <Icon name="user-01" />}
    </div>
  )
}
