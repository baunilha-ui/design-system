import styles from './Label.module.scss'

type LabelProps = {
  children: React.ReactNode
  htmlFor?: string
  required?: boolean
}

export const Label = ({ children, htmlFor, required }: LabelProps) => {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
      {required && <span className={styles.required}>*</span>}
    </label>
  )
}
