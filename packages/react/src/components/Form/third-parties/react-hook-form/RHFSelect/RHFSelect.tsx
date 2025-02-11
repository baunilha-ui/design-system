import { useFormContext } from 'react-hook-form'
import { Form } from '../../../Form'
import { SelectProps } from 'src/components/Form/components/Select/Select'
import { useError } from '../hooks/useError'
import { useMemo } from 'react'

type RHFSelectProps<Option> = SelectProps<Option> & {
  name: string
}

export const RHFSelect = <Option,>({
  name,
  ...rest
}: RHFSelectProps<Option>) => {
  const methods = useFormContext()
  const { register } = methods
  const { hasError } = useError(name)

  const registerProps = useMemo(() => {
    const { ref, onBlur, onChange } = register(name)

    return { ref, onBlur, onChange, name }
  }, [register, name])

  return <Form.Select {...registerProps} {...rest} hasError={hasError} />
}
