import { classNames } from 'src/utils/classNames'
import styles from './Overlay.module.scss'
import { useSidebar } from '../SidebarContext'

type OverlayProps = {
  className?: string
}

export const Overlay = ({ className: _className }: OverlayProps) => {
  const { isOpen, toggle } = useSidebar()

  const className = classNames(styles.overlay, _className, {
    [styles.overlay__opened]: isOpen === true,
    [styles.overlay__closed]: isOpen === false,
  })

  return <div className={className} onClick={toggle} />
}
