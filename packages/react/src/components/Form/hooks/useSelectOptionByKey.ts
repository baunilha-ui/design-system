import { useCallback, useEffect, useState } from 'react'
import { DropdownRef } from 'src/components/Dropdown/components/Container/Container'

type UseSelectOptionByKey<Option> = {
  options: Option[]
  onSelectOption: (option: Option) => void
  dropdownRef: React.RefObject<DropdownRef | null>
}

const AllowedKeys = ['ArrowDown', 'ArrowUp', 'Enter', 'Escape']
const NotAllowedToOpenKeys = ['Tab', 'Escape']

export const useSelectOptionByKey = <Option>({
  dropdownRef,
  options,
  onSelectOption,
}: UseSelectOptionByKey<Option>) => {
  const [focusedOptionIndex, setFocusedOptionIndex] = useState<number | null>(
    null,
  )

  useEffect(() => {
    if (dropdownRef.current?.isOpen) {
      setFocusedOptionIndex(null)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options])

  const onInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const isAllowedToOpen = !NotAllowedToOpenKeys.includes(e.key)

      if (!dropdownRef.current?.isOpen && isAllowedToOpen) {
        dropdownRef.current?.open()
      }

      const isAllowedKey = AllowedKeys.includes(e.key)
      const optionsLength = options.length - 1

      if (dropdownRef.current?.isOpen && isAllowedKey) {
        e.preventDefault()

        if (e.key === 'ArrowDown') {
          setFocusedOptionIndex((prevOptionIndex) => {
            if (prevOptionIndex === null) return 0
            if (prevOptionIndex < optionsLength) return prevOptionIndex + 1

            return prevOptionIndex
          })
        }
        if (e.key === 'ArrowUp') {
          setFocusedOptionIndex((prevOptionIndex) => {
            if (prevOptionIndex === null) return optionsLength
            if (prevOptionIndex > 0) return prevOptionIndex - 1

            return prevOptionIndex
          })
        }
        if (e.key === 'Enter') {
          if (options.length > 0) {
            onSelectOption(options[focusedOptionIndex || 0])
          }
        }
        if (e.key === 'Escape') {
          dropdownRef.current.close()
          setFocusedOptionIndex(null)
        }
      }

      if (e.key === 'Tab') {
        dropdownRef?.current?.close()
        setFocusedOptionIndex(null)
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [focusedOptionIndex, onSelectOption, options],
  )

  return { onInputKeyDown, focusedOptionIndex, setFocusedOptionIndex }
}
