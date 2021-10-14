import { App } from 'vue'
import { CPagination } from './CPagination'
import { CPaginationItem } from './CPaginationItem'

const CPaginationPlugin = {
  install: (app: App): void => {
    app.component(CPagination.name, CPagination)
    app.component(CPaginationItem.name, CPaginationItem)
  },
}

export { CPaginationPlugin, CPagination, CPaginationItem }
