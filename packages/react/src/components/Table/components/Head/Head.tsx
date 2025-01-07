import styles from './Head.module.scss'

type HeadProps = {
  children: React.ReactNode
}

export const Head = ({ children }: HeadProps) => {
  return <div className={styles.head}>{children}</div>
}
