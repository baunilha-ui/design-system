import { classNames } from 'src/utils/classNames'
import styles from './Container.module.scss'
import { useSidebar } from '../SidebarContext'

type ContainerProps = {
  children: React.ReactNode
  className?: string
  // isOpen?: boolean
}

export const Container = ({
  children,
  className: _className,
  // isOpen,
}: ContainerProps) => {
  const { isOpen } = useSidebar()

  const className = classNames(styles.container, _className, {
    [styles.container__opened]: isOpen === true,
    [styles.container__closed]: isOpen === false,
  })

  return <div className={className}>{children}</div>
}
