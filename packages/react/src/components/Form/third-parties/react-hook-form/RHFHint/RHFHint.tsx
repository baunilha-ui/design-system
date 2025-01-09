import { Form } from '../../../Form'
import { useError } from '../hooks/useError'

type RHFHintProps = {
  children: React.ReactNode
  name: string
}

export const RHFHint = ({ name, children }: RHFHintProps) => {
  const { hasError } = useError(name)

  if (hasError) return null

  return <Form.Hint>{children}</Form.Hint>
}
