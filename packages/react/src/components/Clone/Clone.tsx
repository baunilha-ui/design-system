import { cloneElement, forwardRef, JSX } from 'react'

type CloneProps<T = any> = {
  children: JSX.Element | null
} & T

export const Clone = forwardRef(({ children, ...rest }: CloneProps, ref) => {
  if (!children) return null

  return cloneElement(children, {
    ...rest,
    ref,
  })
})

Clone.displayName = 'Clone'
