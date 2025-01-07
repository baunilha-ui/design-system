import { useEffect, DependencyList } from 'react'

export const useClickOutside = (
  callback: (event: MouseEvent) => void,
  dependencies: DependencyList = [],
  ref: React.RefObject<HTMLElement | null>,
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setTimeout(() => {
        callback(event)
      }, 0)
    }
  }

  useEffect(() => {
    document.addEventListener('mouseup', handleClickOutside)

    return () => {
      document.removeEventListener('mouseup', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
