import { App } from 'vue'
import { CCol } from './CCol'
import { CContainer } from './CContainer'
import { CRow } from './CRow'

const CGridPlugin = {
  install: (app: App): void => {
    app.component(CCol.name as string, CCol)
    app.component(CContainer.name as string, CContainer)
    app.component(CRow.name as string, CRow)
  },
}
export { CGridPlugin, CCol, CContainer, CRow }
