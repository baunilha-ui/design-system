import { RefObject, useImperativeHandle } from 'react'

export type SelectRef = {
  value: string
  focus: () => void
  blur: () => void
  type: string
}

type UseFileInputRef<Option> = {
  ref?: React.Ref<SelectRef>
  targetRef: RefObject<HTMLInputElement | null>
}

// Need it to allow change select value doing ref.value = 'value'
export const useFileInputRef = <Option>({
  ref,
  targetRef,
}: UseFileInputRef<Option>) => {
  useImperativeHandle(
    ref,
    () => ({
      get value() {
        if (targetRef.current) return targetRef.current.value

        return ''
      },
      set value(newValue: string) {
        // TODO: Check if we really need this, I don't think so

        // console.log('set value', newValue, targetRef.current)
        // if (newValue) {
        //   if (!selectedOption || newValue !== getOptionValue(selectedOption)) {
        //     if (targetRef.current) {
        //       const option = options.find(
        //         (option) => getOptionValue(option) === newValue,
        //       )

        //       if (option) setSelectedOption(option)
        //     }
        //   }
        // }
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
    [],
  )
}
