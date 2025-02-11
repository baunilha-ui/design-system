import { useCallback } from 'react'

const getScrollbarWidth = () =>
  window.innerWidth - document.documentElement.clientWidth

const useAdjustScrollbar = () => {
  const handleToggleScrollbar = useCallback((status: boolean) => {
    const isTablet = window.innerWidth <= 1024

    const hasScrollbar =
      document.documentElement.scrollHeight >
      document.documentElement.clientHeight

    if (status) {
      if (hasScrollbar) {
        const scrollbarWidth = getScrollbarWidth()
        document.body.style.paddingRight = isTablet
          ? '0'
          : `${scrollbarWidth}px`
      }
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'inherit'
      document.body.style.paddingRight = '0'
    }
  }, [])

  return { toggleScrollbar: handleToggleScrollbar }
}

export default useAdjustScrollbar
