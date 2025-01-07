import styles from './Support.module.scss'

type SupportProps = {
  children: React.ReactNode
}

export const Support = ({ children }: SupportProps) => {
  return <span className={styles.support}>{children}</span>
}

Support.displayName = 'Support'
