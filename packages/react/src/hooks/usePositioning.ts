import { DependencyList, useEffect } from 'react'

type UsePositioningProps = {
  component: React.RefObject<HTMLElement | null>
  target: React.RefObject<HTMLElement | null>
  placement: 'bottom' //  'top' | 'right' | 'bottom' | 'left'
}

function getElementBoundingClient(element: any) {
  const rect = element.getBoundingClientRect()
  const scrollLeft = document.documentElement.scrollLeft
  const scrollTop = document.documentElement.scrollTop

  const absoluteLeft = rect.left + scrollLeft
  const absoluteTop = rect.top + scrollTop
  const absoluteRight = rect.right + scrollLeft
  const absoluteBottom = rect.bottom + scrollTop

  return {
    top: absoluteTop,
    left: absoluteLeft,
    right: absoluteRight,
    bottom: absoluteBottom,

    width: rect.width,
    height: rect.height,
  }
}

// TODO: Fix this hook
// We need to separate the logic to handle different placements and think in a way to call the calculation recursively if some boundings are out of the screen.
// Bad scenario: The component width has the same width as the document width;
// Then teorically the component right is not out of the screen yet, but the component left is;
// Then we change left to 0, but now the component right is out of the screen;
export const usePositioning = (
  { component, target, placement = 'bottom' }: UsePositioningProps,
  dependencies: DependencyList,
) => {
  useEffect(() => {
    if (target.current && component.current) {
      const {
        top: targetTop,
        left: targetLeft,
        height: targetHeight,
        width: targetWidth,
      } = getElementBoundingClient(target.current)

      const { width: componentWidth } = getElementBoundingClient(
        component.current,
      )

      const documentWidth = document.documentElement.scrollWidth

      const targetWidthIsGreaterThanComponentWidth =
        targetWidth > componentWidth

      // Width cannot be less than the target width
      const width = targetWidthIsGreaterThanComponentWidth
        ? targetWidth
        : componentWidth

      const top = targetTop + targetHeight
      const left = targetLeft + targetWidth / 2 - width / 2
      const right = left + width

      let leftStyle = `${left}px`

      if (right > documentWidth) {
        leftStyle = `calc(${documentWidth}px - ${width}px - var(--margin-default))`
      }

      if (left < 0) leftStyle = 'var(--margin-default)'

      // TODO: Create logic to handle other placements

      if (placement === 'bottom')
        component.current.style.paddingTop = 'var(--space-2)'

      component.current.style.position = 'absolute'
      component.current.style.top = `${top}px`
      component.current.style.left = leftStyle
      component.current.style.minWidth = `${width}px`
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies)
}
