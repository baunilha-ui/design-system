import { classNames } from 'src/utils/classNames'
import styles from './Container.module.scss'

type ContainerProps = {
  children: React.ReactNode
  hide: boolean
  onClose: any
  disableOutsideClick?: boolean
}

export const Container = ({
  children,
  hide,
  onClose,
  disableOutsideClick,
}: ContainerProps) => {
  const overlayClassName = classNames(styles.overlay, {
    [styles.overlay__hide]: !!hide,
    [styles.overlay__disable_close]: !!disableOutsideClick,
    test: true,
  })

  const containerClassName = classNames(styles.container, {
    [styles.hide]: !!hide,
  })

  const handleClose = (e: React.MouseEvent<HTMLDivElement>) => {
    if (disableOutsideClick) return

    const isNotContent = [overlayClassName, containerClassName].includes(
      (e.target as HTMLDivElement).className,
    )

    if (isNotContent) {
      onClose()
    }
  }

  return (
    <div className={overlayClassName} onClick={handleClose}>
      <div className={containerClassName}>{children}</div>
    </div>
  )
}
