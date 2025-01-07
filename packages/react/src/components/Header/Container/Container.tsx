import { classNames } from 'src/utils/classNames'
import styles from './Container.module.scss'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

export const Container = ({
  children,
  className: _className,
}: ContainerProps) => {
  const className = classNames(styles.header, _className)

  return (
    <header className={className}>
      <div className={styles.container}>{children}</div>
    </header>
  )
}
