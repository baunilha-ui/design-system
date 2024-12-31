export const applyCSSVariables = (
  cssVariables: Record<string, string>,
  root: Document,
) => {
  const rootElement = root.documentElement

  if (!rootElement) return

  Object.entries(cssVariables).forEach(([key, value]) => {
    rootElement.style.setProperty(key, value)
  })
}
