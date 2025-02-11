import { useEffect, DependencyList } from 'react'

export const useClickOutside = (
  callback: (event: MouseEvent) => void,
  dependencies: DependencyList = [],
  _refs:
    | React.RefObject<HTMLElement | null>
    | React.RefObject<HTMLElement | null>[],
) => {
  const handleClickOutside = (event: MouseEvent) => {
    let refs: React.RefObject<HTMLElement | null>[]

    if (!Array.isArray(_refs)) {
      refs = [_refs]
    } else {
      refs = _refs
    }

    const isOutside = refs.every((ref) => {
      return ref.current && !ref.current.contains(event.target as Node)
    })

    if (isOutside) {
      setTimeout(() => {
        callback(event)
      }, 0)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
