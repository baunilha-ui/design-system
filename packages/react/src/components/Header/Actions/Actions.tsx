import styles from './Actions.module.scss'

type ActionsProps = {
  children: React.ReactNode
}

export const Actions = ({ children }: ActionsProps) => {
  return <div className={styles.actions}>{children}</div>
}
