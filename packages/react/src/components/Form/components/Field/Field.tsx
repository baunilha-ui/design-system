import styles from './Field.module.scss'

type FieldProps = {
  children: React.ReactNode
}

export const Field = ({ children }: FieldProps) => {
  return <div className={styles.field}>{children}</div>
}
