import {
  useMemo,
  useRef,
  useState,
  useCallback,
  useImperativeHandle,
} from 'react'
import { useGetChild } from '../../hooks/useGetChild'
import { Portal } from 'src/components/Portal/Portal'
import { Clone } from 'src/components/Clone/Clone'
import { usePositioning } from 'src/hooks/usePositioning'
import { useClickOutside } from 'src/hooks/useClickOutside'
import { DropdownProvider } from '../../providers/useDropdown'

export type DropdownRef = {
  close: () => void
  open: () => void
  isOpen: boolean
}

type ContainerProps = {
  children: React.ReactNode
  onClose?: () => void
  ref?: React.Ref<DropdownRef>
}

export const Container = ({ children, ref, onClose }: ContainerProps) => {
  const triggerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = useCallback(() => {
    if (isOpen) {
      setIsOpen(false)
      onClose?.()
    }
  }, [isOpen, onClose])

  const handleOpen = useCallback(() => {
    if (!isOpen) setIsOpen(true)
  }, [isOpen])

  const trigger = useGetChild({ children, displayName: 'Trigger' })
  const content = useGetChild({ children, displayName: 'Content' })

  usePositioning(
    {
      component: contentRef,
      target: triggerRef,
      placement: 'bottom',
    },
    [isOpen],
  )

  useClickOutside(
    () => {
      if (isOpen) handleClose()
    },
    [isOpen],
    [contentRef, triggerRef],
  )

  useImperativeHandle(ref, () => {
    return {
      close() {
        handleClose()
      },
      open() {
        handleOpen()
      },
      isOpen,
    }
  }, [handleClose, handleOpen, isOpen])

  const isEmpty = useMemo(() => {
    return content?.props?.children?.filter?.((c: unknown) => !!c).length === 0
  }, [content])

  if (isEmpty) return null

  return (
    <DropdownProvider isOpen={isOpen} onOpen={handleOpen} onClose={handleClose}>
      <Clone ref={triggerRef}>{trigger}</Clone>

      {isOpen && (
        <Portal>
          <Clone ref={contentRef}>{content}</Clone>
        </Portal>
      )}
    </DropdownProvider>
  )
}
