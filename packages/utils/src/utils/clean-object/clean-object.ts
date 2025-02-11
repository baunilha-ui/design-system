type Options = {
  preserveEmptyStrings?: boolean
  preserveNulls?: boolean
  preserveUndefineds?: boolean
}

export const cleanObject = <T extends Record<string, any>>(
  object: T,
  options?: Options,
): T => {
  const newObject = { ...object }

  Object.keys(newObject).forEach((key) => {
    const isAnObject =
      newObject[key] &&
      typeof newObject[key] === 'object' &&
      !Array.isArray(newObject[key])

    if (isAnObject) {
      newObject[key as keyof typeof newObject] = cleanObject(
        newObject[key],
        options,
      )
    }

    if (
      (!options?.preserveUndefineds && newObject[key] === undefined) ||
      (!options?.preserveNulls && newObject[key] === null) ||
      (!options?.preserveEmptyStrings && newObject[key] === '')
    ) {
      delete newObject[key]
    }
  })

  return newObject
}
