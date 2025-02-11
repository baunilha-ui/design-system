type CreateFakeEvent = {
  value: string
  name: string
  type?: 'change' | 'blur'
}

export const createFakeEvent = ({ value, name, type }: CreateFakeEvent) => {
  return {
    target: { value, name },
    type,
  } as any
}
