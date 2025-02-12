export const mapRawValuesToPixel = <
  Raw extends Record<string, number>,
  Pixel = { [K in keyof Raw]: `${Raw[K]}px` }
>(
  raw: Raw
): Pixel => {
  return Object.entries(raw).reduce((acc, [key, value]) => {
    return { ...acc, [key]: `${value}px` };
  }, {} as Pixel);
};
