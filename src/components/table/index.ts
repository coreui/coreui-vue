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
    app.component(CTable.name, CTable)
    app.component(CTableBody.name, CTableBody)
    app.component(CTableCaption.name, CTableCaption)
    app.component(CTableDataCell.name, CTableDataCell)
    app.component(CTableFoot.name, CTableFoot)
    app.component(CTableHead.name, CTableHead)
    app.component(CTableHeaderCell.name, CTableHeaderCell)
    app.component(CTableRow.name, CTableRow)
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
