import { useFormContext } from 'react-hook-form'
import { Form } from '../../../Form'
import { useError } from '../hooks/useError'
import { useMemo } from 'react'
import { FileProps } from 'src/components/Form/components/File/File'

type RHFFileProps = FileProps & {
  name: string
}

export const RHFFile = ({ name, ...rest }: RHFFileProps) => {
  const methods = useFormContext()
  const { register } = methods
  const { hasError } = useError(name)

  const registerProps = useMemo(() => {
    const { ref, onBlur, onChange } = register(name)

    return { ref, onBlur, onChange, name }
  }, [register, name])

  return <Form.File {...registerProps} {...rest} hasError={hasError} />
}
