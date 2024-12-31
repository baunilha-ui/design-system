export const mapRawToRem = <
  Raw extends Record<string, number>,
  Rem = { [K in keyof Raw]: `${Raw[K]}rem` },
>(
  raw: Raw,
): Rem => {
  return Object.keys(raw).reduce((acc, key) => {
    const value = raw[key] / 10
    return { ...acc, [key]: `${value}rem` }
  }, {} as Rem)
}
