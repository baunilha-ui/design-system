import { useFormContext, get } from 'react-hook-form'

export const useError = (name: string) => {
  const { formState } = useFormContext()
  const { errors } = formState

  const field = get(errors, name)
  const message = field?.message as string

  return {
    message,
    hasError: !!field
  }
}
