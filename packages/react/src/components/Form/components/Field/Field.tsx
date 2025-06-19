import { classNames } from 'src/utils/classNames'
import styles from './Field.module.scss'

type FieldProps = {
  children: React.ReactNode
  className?: string
}

export const Field = ({ children, className: _className }: FieldProps) => {
  const className = classNames(
    styles.field,
    _className,
  )

  return <div className={className}>{children}</div>
}
