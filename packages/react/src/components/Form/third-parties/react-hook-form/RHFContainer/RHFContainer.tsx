import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { Form } from '../../../Form'

type RHFForm<Data extends FieldValues = FieldValues> = UseFormReturn<Data>

type RHFContainerProps<Data extends FieldValues = FieldValues> = {
  children: React.ReactNode
  form: RHFForm<Data>
  onSubmit: (data: Data) => void
  className?: string
}

export const RHFContainer = <Data extends FieldValues = FieldValues>({
  children,
  form,
  onSubmit,
  className,
}: RHFContainerProps<Data>) => {
  const { handleSubmit } = form

  return (
    <FormProvider {...form}>
      <Form.Container className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </Form.Container>
    </FormProvider>
  )
}
