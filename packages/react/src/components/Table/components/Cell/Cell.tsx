import { Text } from './components/Text/Text'

import styles from './Cell.module.scss'
import { Support } from './components/Support/Support'
import { useMemo, Children } from 'react'

type CellProps = {
  children: React.ReactNode
}

const CONTENT_COMPONENTS = ['Support', 'Text']

export const Cell = ({ children }: CellProps) => {
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

  const hasContent = !!content?.length

  return (
    <div className={styles.cell}>
      {rest}
      {hasContent && <div className={styles.content}>{content}</div>}
    </div>
  )
}

Cell.Text = Text
Cell.Support = Support
