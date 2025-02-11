import React from 'react'
import { Clone } from 'src/components/Clone/Clone'
import { useDropdown } from '../../providers/useDropdown'

export interface TriggerProps {
  children: React.ReactNode
  className?: string
  onOpen?: () => void
  ref?: React.Ref<HTMLDivElement>
  isOpen?: boolean
}

export const Trigger = ({ children, ref }: TriggerProps) => {
  const { isOpen, onOpen } = useDropdown()

  return (
    <Clone ref={ref} isOpen={isOpen} onClick={onOpen}>
      {children}
    </Clone>
  )
}

Trigger.displayName = 'Trigger'
