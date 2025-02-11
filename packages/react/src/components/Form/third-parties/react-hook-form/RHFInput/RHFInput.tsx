import { useFormContext } from 'react-hook-form'
import { Form } from '../../../Form'
import { InputProps } from 'src/components/Form/components/Input/Input'
import { useError } from '../hooks/useError'
import { useMemo } from 'react'

type RHFInputProps = InputProps & {
  name: string
}

export const RHFInput = ({ name, ...rest }: RHFInputProps) => {
  const methods = useFormContext()
  const { register } = methods
  const { hasError } = useError(name)

  const registerProps = useMemo(() => {
    const { ref, onBlur, onChange } = register(name)

    return { ref, onBlur, onChange, name }
  }, [register, name])

  return <Form.Input {...registerProps} {...rest} hasError={hasError} />
}
