import { Form } from '../../../Form'
import { useError } from '../hooks/useError'

type RHFErrorProps = {
  name: string
}

export const RHFError = ({ name }: RHFErrorProps) => {
  const { hasError, message } = useError(name)

  if (hasError && message) return <Form.Error>{message}</Form.Error>

  return null
}
