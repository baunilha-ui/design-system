import { useMemo, useRef, useState, Fragment, useCallback } from 'react'
import { useGetChild } from '../../hooks/useGetChild'
import { Portal } from 'src/components/Portal/Portal'
import { Clone } from 'src/components/Clone/Clone'
import { usePositioning } from 'src/hooks/usePositioning'

type ContainerProps = {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const triggerRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState(false)

  const handleClose = useCallback(() => {
    if (isOpen) setIsOpen(false)
  }, [isOpen])

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

  const isEmpty = useMemo(() => {
    return content?.props?.children?.filter?.((c: unknown) => !!c).length === 0
  }, [content])

  if (isEmpty) return null

  return (
    <Fragment>
      <Clone ref={triggerRef} isOpen={isOpen} onOpen={handleOpen}>
        {trigger}
      </Clone>

      {isOpen && (
        <Portal>
          <Clone ref={contentRef} isOpen={isOpen} onClose={handleClose}>
            {content}
          </Clone>
        </Portal>
      )}
    </Fragment>
  )
}
