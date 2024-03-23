import { App } from 'vue'
import { CTable } from './CTable'
import { CTableBody } from './CTableBody'
import { CTableCaption } from './CTableCaption'
import { CTableDataCell } from './CTableDataCell'
import { CTableFoot } from './CTableFoot'
import { CTableHead } from './CTableHead'
import { CTableHeaderCell } from './CTableHeaderCell'
import { CTableRow } from './CTableRow'

const CTablePlugin = {
  install: (app: App): void => {
    app.component(CTable.name as string, CTable)
    app.component(CTableBody.name as string, CTableBody)
    app.component(CTableCaption.name as string, CTableCaption)
    app.component(CTableDataCell.name as string, CTableDataCell)
    app.component(CTableFoot.name as string, CTableFoot)
    app.component(CTableHead.name as string, CTableHead)
    app.component(CTableHeaderCell.name as string, CTableHeaderCell)
    app.component(CTableRow.name as string, CTableRow)
  },
}

export {
  CTablePlugin,
  CTable,
  CTableBody,
  CTableCaption,
  CTableDataCell,
  CTableFoot,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
}
