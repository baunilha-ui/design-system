import { Children, JSX, useMemo } from 'react'

type UseGetChildProps = {
  children: React.ReactNode
  displayName: string
}

export const useGetChild = ({
  children,
  displayName,
}: UseGetChildProps): JSX.Element | null => {
  return useMemo(() => {
    let _child: JSX.Element | null = null

    Children.toArray(children).find((c) => {
      const child = c as JSX.Element
      const childName = child.type?.displayName

      if (childName === displayName) _child = child
    })

    return _child
  }, [children, displayName])
}
