import { classNames } from 'src/utils/classNames'
import styles from './Container.module.scss'
import { Children, useMemo } from 'react'

type ContainerProps = {
  children: React.ReactNode
  className?: string
}

const CONTENT_COMPONENTS = ['Support', 'Text']

export const Container = ({
  children,
  className: _className,
}: ContainerProps) => {
  const className = classNames(styles.container, _className)

  const rest = useMemo(
    () =>
      Children.map(children, (c) => c as React.JSX.Element)?.filter(
        (child) => !CONTENT_COMPONENTS.includes(child.type?.displayName),
      ),
    [children],
  )

  const content = useMemo(
    () =>
      Children.map(children, (child) => child as React.JSX.Element)?.filter(
        (child) => CONTENT_COMPONENTS.includes(child.type?.displayName),
      ),
    [children],
  )

  return (
    <div className={className}>
      {rest}
      {content && <div className={styles.content}>{content}</div>}
    </div>
  )
}
