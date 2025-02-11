import { RefObject, useImperativeHandle } from 'react'

export type SelectRef = {
  value: string
  focus: () => void
  blur: () => void
  type: string
}

type UseSelectInputRef<Option> = {
  ref?: React.Ref<SelectRef>
  targetRef: RefObject<HTMLInputElement | null>
  selectedOption: any
  options: Option[]
  getOptionValue: (option: Option) => string
  setSelectedOption: (option: Option) => void
}

// Need it to allow change select value doing ref.value = 'value'
export const useSelectInputRef = <Option>({
  ref,
  targetRef,
  selectedOption,
  options,
  getOptionValue,
  setSelectedOption,
}: UseSelectInputRef<Option>) => {
  useImperativeHandle(
    ref,
    () => ({
      get value() {
        if (targetRef.current) return targetRef.current.value

        return ''
      },
      set value(newValue: string) {
        if (newValue) {
          if (!selectedOption || newValue !== getOptionValue(selectedOption)) {
            if (targetRef.current) {
              const option = options.find(
                (option) => getOptionValue(option) === newValue,
              )

              if (option) setSelectedOption(option)
            }
          }
        }
      },
      focus: () => {
        if (targetRef.current) targetRef.current.focus()
      },
      blur: () => {
        if (targetRef.current) targetRef.current.blur()
      },
      type: 'input',
    }),

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [selectedOption],
  )
}
