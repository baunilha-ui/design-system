import styles from './Text.module.scss'

type TextProps = {
  children: React.ReactNode
}

export const Text = ({ children }: TextProps) => {
  return <p className={styles.text}>{children}</p>
}

Text.displayName = 'Text'
