import { classNames } from 'src/utils/classNames'
import styles from './Badge.module.scss'
import sizes from './Size.module.scss'
import variants from './Variant.module.scss'

export type BadgeProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3
  variant?:
    | 'gray'
    | 'gray'
    | 'brand'
    | 'error'
    | 'warning'
    | 'success'
    | 'gray-blue'
    | 'light-blue'
    | 'blue'
    | 'indigo'
    | 'purple'
    | 'pink'
    | 'orange'
  outline?: boolean
  pill?: boolean
}

export const Badge = ({
  children,
  className: _className,
  size = 1,
  variant = 'gray',
  pill = false,
  outline = false,
}: BadgeProps) => {
  const className = classNames(
    styles.badge,
    sizes?.[`size-${size}`],
    variants?.[`variant-${variant}`],
    {
      [variants.outline]: outline,
      [styles.pill]: pill,
      [sizes.pill]: pill,
    },
    _className,
  )

  return <div className={className}>{children}</div>
}
