import { classNames } from 'src/utils/classNames'
import styles from './Item.module.scss'
import { Icon } from 'src/components/Icon/Icon'
import { useDropdown } from '../../providers/useDropdown'

type ItemProps = {
  children: React.ReactNode
  selected?: boolean
  disabled?: boolean
  onClick?: () => void
  className?: string
  shouldCloseOnClick?: boolean
}

export const Item = ({
  children,
  className: _className,
  onClick,
  selected,
  disabled,
  shouldCloseOnClick = true,
}: ItemProps) => {
  const { onClose } = useDropdown()

  const itemClassName = classNames(
    styles.item,
    {
      [styles.item__clickable]: !!onClick,
      [styles.item__selected]: !!selected,
      [styles.item__disabled]: !!disabled,
    },
    _className,
  )

  const handleOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    
    if (!!onClick) {
      if (shouldCloseOnClick) onClose()
      onClick()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div
        className={itemClassName}
        onClick={disabled ? undefined : handleOnClick}
      >
        <span>{children}</span>
        {selected && <Icon name="check" size={3} />}
      </div>
    </div>
  )
}
