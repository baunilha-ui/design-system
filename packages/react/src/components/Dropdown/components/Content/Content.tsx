import React from 'react'

import styles from './Content.module.scss'
import { classNames } from 'src/utils/classNames'

export type ContentProps = {
  children: React.ReactNode
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

export const Content = ({
  children,
  className: _className,
  ref,
}: ContentProps) => {
  const className = classNames(styles.content, _className)

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={className}>
        <div className={styles.items}>{children}</div>
      </div>
    </div>
  )
}

Content.displayName = 'Content'
