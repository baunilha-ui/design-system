import React from 'react'

import { useClickOutside } from 'src/hooks/useClickOutside'

import styles from './Content.module.scss'

export interface ContentProps {
  children: React.ReactNode
  onClose?: () => void
  isOpen?: boolean
  className?: string
  ref?: React.Ref<HTMLDivElement>
}

export const Content = ({ children, onClose, isOpen, ref }: ContentProps) => {
  useClickOutside(
    () => {
      if (isOpen) onClose?.()
    },
    [isOpen],
    ref as React.RefObject<HTMLElement>,
  )

  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.items}>{children}</div>
      </div>
    </div>
  )
}

Content.displayName = 'Content'
