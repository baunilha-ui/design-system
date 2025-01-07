import React from 'react'
import { Clone } from 'src/components/Clone/Clone'

export interface TriggerProps {
  children: React.ReactNode
  className?: string
  onOpen?: () => void
  ref?: React.Ref<HTMLDivElement>
  isOpen?: boolean
}

export const Trigger = ({ children, onOpen, isOpen, ref }: TriggerProps) => {
  return (
    <Clone ref={ref} isOpen={isOpen} onClick={onOpen}>
      {children}
    </Clone>
  )
}

Trigger.displayName = 'Trigger'
