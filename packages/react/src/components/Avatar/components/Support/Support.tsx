import { classNames } from 'src/utils/classNames'
import styles from './Support.module.scss'
import sizes from './Size.module.scss'

type SupportProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Support = ({
  children,
  className: _className,
  size = 2,
}: SupportProps) => {
  const className = classNames(
    styles.support,
    _className,
    sizes[`size-${size}`],
  )

  return <span className={className}>{children}</span>
}

Support.displayName = 'Support'
