import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import { Modal } from '../Modal'
import useAdjustScrollbar from 'src/hooks/useAdjustScrollbar'

interface ModalProviderProps {
  children: React.ReactNode
}

type ModalOptions = {
  onClose?: (...args: any) => void
  disableOutsideClick?: boolean
}

interface ModalContextDataProps {
  openModal: (component: ReactNode, options?: ModalOptions) => void
  closeModal: (...args: any) => void
}

interface ModalProps {
  id?: string
  component: ReactNode
  hide: boolean
  onClose?: (...args: any) => void
  disableOutsideClick?: boolean
}

const ModalContext = createContext({} as ModalContextDataProps)

let id = 0

function ModalProvider({ children }: ModalProviderProps) {
  const [modalQueue, setModalQueue] = useState<ModalProps[]>([])

  const { toggleScrollbar } = useAdjustScrollbar()

  useEffect(() => {
    toggleScrollbar(modalQueue.length > 0)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalQueue.length])

  const openModal = (component: ReactNode, options?: ModalOptions) => {
    id++

    setModalQueue((prevQueue) => {
      if (prevQueue.some((modal) => modal.component === component)) {
        return prevQueue
      }
      return [
        ...prevQueue,
        { id: `modal-${id}`, hide: false, component, ...options },
      ]
    })
  }

  const handleShift = (...args: any) => {
    const newQueue = [...modalQueue]

    if (newQueue.length === 0) {
      setModalQueue([])
    }

    const currentModal = newQueue[newQueue.length - 1]

    newQueue.pop()

    setModalQueue(newQueue)

    currentModal.hide = true
    currentModal?.onClose?.(...args)
  }

  return (
    <ModalContext.Provider value={{ openModal, closeModal: handleShift }}>
      {children}

      {modalQueue.map((modal) => (
        <Modal.Container
          key={modal.id}
          hide={modal.hide}
          onClose={handleShift}
          disableOutsideClick={modal.disableOutsideClick}
        >
          {modal.component}
        </Modal.Container>
      ))}
    </ModalContext.Provider>
  )
}
function useModal(): ModalContextDataProps {
  return useContext(ModalContext)
}

export { ModalProvider, useModal }
