import { transformCamelCaseToSnakeCase } from './transform-camel-case-to-snake-case'

export const createCSSVariables = (
  object: Record<string, any>,
  prefix = '-',
): any => {
  const cssVariables = Object.entries(object).reduce((acc, [key, value]) => {
    const formattedKey = transformCamelCaseToSnakeCase(key).replace(/\./g, '_')

    if (typeof value === 'object') {
      return {
        ...acc,
        ...createCSSVariables(value, `${prefix}-${formattedKey}`),
      }
    }

    return {
      ...acc,
      [`${prefix}-${formattedKey}`]: value,
    }
  }, {})

  return cssVariables
}
