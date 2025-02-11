import { classNames } from 'src/utils/classNames'
import styles from './Text.module.scss'
import sizes from './Size.module.scss'

type TextProps = {
  children: React.ReactNode
  className?: string
  size?: 1 | 2 | 3 | 4 | 5 | 6
}

export const Text = ({
  children,
  className: _className,
  size = 2,
}: TextProps) => {
  const className = classNames(styles.text, _className, sizes[`size-${size}`])

  return <p className={className}>{children}</p>
}

Text.displayName = 'Text'
