export const mapRawToPixel = <
  Raw extends Record<string, number>,
  Pixel = { [K in keyof Raw]: `${Raw[K]}px` },
>(
  raw: Raw,
): Pixel => {
  return Object.keys(raw).reduce((acc, key) => {
    const value = raw[key]
    return { ...acc, [key]: `${value}px` }
  }, {} as Pixel)
}
