import styles from './Hint.module.scss'

type HintProps = {
  children: React.ReactNode
}

export const Hint = ({ children }: HintProps) => {
  return <span className={styles.hint}>{children}</span>
}
