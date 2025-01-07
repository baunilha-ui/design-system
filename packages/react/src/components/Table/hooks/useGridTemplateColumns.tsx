import { Children, useMemo } from 'react'

type UseGridTemplateColumnsProps = {
  header: React.JSX.Element
}

export const useGridTemplateColumns = ({
  header,
}: UseGridTemplateColumnsProps) => {
  const columns = useMemo(() => {
    const childrens = header?.props?.children

    return Children.map(childrens, (child) => child as React.JSX.Element)
  }, [header])

  const gridTemplateColumns = useMemo(() => {
    if (!columns) return

    return columns
      .map((column: React.JSX.Element) => {
        if (!column) {
          return
        }
        const { width: columnWidth, minWidth: columnMinWidth } = column.props

        let width = '1fr'

        if (columnMinWidth) width = `minmax(${columnMinWidth}, 1fr)`
        if (columnWidth) width = columnWidth

        return width
      })
      .join(' ')
  }, [columns])

  return { gridTemplateColumns }
}
