import { Fragment, useMemo, JSX } from 'react'
import { Head } from './components/Head/Head'
import { Header } from './components/Header/Header'
import { Row } from './components/Row/Row'
import { Cell } from './components/Cell/Cell'

import styles from './Table.module.scss'
import { useGridTemplateColumns } from './hooks/useGridTemplateColumns'
import { classNames } from 'src/utils/classNames'

export type TableProps<Item> = {
  className?: string
  data?: Item[]
  keyExtractor: (item: Item) => string
  renderHeader: () => JSX.Element
  renderRow: (item: Item) => JSX.Element
  renderEmptyState?: () => JSX.Element
  isLoading?: boolean
  isEmpty?: boolean
}

export const Table = <Item extends object>({
  className: _className,
  data,
  keyExtractor,
  renderHeader,
  renderRow,
  renderEmptyState,
  isLoading,
  isEmpty,
}: TableProps<Item>) => {
  const className = classNames(styles.table, _className)

  if (typeof isEmpty !== 'undefined' && !renderEmptyState) {
    throw new Error('renderEmptyState is required when isEmpty is defined')
  }

  const header: JSX.Element = useMemo(() => renderHeader(), [renderHeader])

  const { gridTemplateColumns } = useGridTemplateColumns({ header })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isEmpty) {
    return renderEmptyState ? renderEmptyState() : <div>No data</div>
  }

  return (
    <div className={className} style={{ gridTemplateColumns }}>
      {header}
      {data?.map?.((item) => (
        <Fragment key={keyExtractor(item)}>{renderRow(item)}</Fragment>
      ))}
    </div>
  )
}

Table.Head = Head
Table.Header = Header
Table.Row = Row
Table.Cell = Cell
