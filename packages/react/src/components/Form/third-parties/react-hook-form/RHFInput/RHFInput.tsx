import { useFormContext } from 'react-hook-form'
import { Form } from '../../../Form'
import { InputProps } from 'src/components/Form/components/Input/Input'
import { useError } from '../hooks/useError'

type RHFInputProps = InputProps & {
  name: string
}

export const RHFInput = ({ name, ...rest }: RHFInputProps) => {
  const methods = useFormContext()
  const { register } = methods
  const { hasError } = useError(name)

  return <Form.Input {...register(name)} {...rest} hasError={hasError} />
}
