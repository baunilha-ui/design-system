import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { Form } from '../../../Form'


type RHFContainerProps<Data extends FieldValues = FieldValues> = {
  children: React.ReactNode
  form: any // It's not working with UseFormReturn<Data>, so using any for now
  onSubmit: (data: Data) => void
  className?: string
}

export const RHFContainer = <Data extends FieldValues = FieldValues>({
  children,
  form,
  onSubmit,
  className,
}: RHFContainerProps<Data>) => {
  const { handleSubmit } = form as UseFormReturn<Data>

  return (
    <FormProvider {...form}>
      <Form.Container className={className} onSubmit={handleSubmit(onSubmit)}>
        {children}
      </Form.Container>
    </FormProvider>
  )
}
