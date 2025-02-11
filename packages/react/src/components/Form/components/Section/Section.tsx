import { classNames } from 'src/utils/classNames'
import styles from './Section.module.scss'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Section = ({
  children,
  className: _className,
}: ContainerProps) => {
  const className = classNames(styles.section, _className)

  return <div className={className}>{children}</div>
}
