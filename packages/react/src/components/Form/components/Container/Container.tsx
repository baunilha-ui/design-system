import { classNames } from 'src/utils/classNames'
import styles from './Container.module.scss'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Container = ({
  children,
  onSubmit,
  className: _className,
}: ContainerProps) => {
  const className = classNames(styles.form, _className)

  return (
    <form onSubmit={onSubmit} className={className}>
      {children}
    </form>
  )
}
