import styles from './Error.module.scss'

type ErrorProps = {
  children: React.ReactNode
}

export const Error = ({ children }: ErrorProps) => {
  return <span className={styles.error}>{children}</span>
}
