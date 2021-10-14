import { App } from 'vue'
import { CCol } from './CCol'
import { CContainer } from './CContainer'
import { CRow } from './CRow'

const CGridPlugin = {
  install: (app: App): void => {
    app.component(CCol.name, CCol)
    app.component(CContainer.name, CContainer)
    app.component(CRow.name, CRow)
  },
}
export { CGridPlugin, CCol, CContainer, CRow }
