import { useMemo } from 'react'
import styles from './Photo.module.scss'
import sizes from './Size.module.scss'
import { classNames } from 'src/utils/classNames'
import { Icon } from 'src/components/Icon/Icon'

export type PhotoProps = {
  size?: 1 | 2 | 3 | 4 | 5 | 6
  src?: string
  text?: string
  className?: string
}

export const Photo = ({
  className: _className,
  size = 2,
  text,
  src,
}: PhotoProps) => {
  const className = classNames(styles.photo, sizes[`size-${size}`], _className)

  const alternative = useMemo(() => {
    if (!text) return null

    const initials = text?.split(' ').map((word) => word[0].toUpperCase())

    const firstWord = initials[0]
    const lastWord = initials[initials.length - 1]

    return `${firstWord}${lastWord}`
  }, [text])

  const hasSrc = !!src

  return (
    <div className={className}>
      {/* {hasSrc && ( TODO: add Image here )} */}
      {!hasSrc && alternative && <span>{alternative}</span>}
      {!hasSrc && !alternative && <Icon name="user-01" />}
    </div>
  )
}
