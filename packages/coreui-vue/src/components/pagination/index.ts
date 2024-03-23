import { App } from 'vue'
import { CPagination } from './CPagination'
import { CPaginationItem } from './CPaginationItem'

const CPaginationPlugin = {
  install: (app: App): void => {
    app.component(CPagination.name as string, CPagination)
    app.component(CPaginationItem.name as string, CPaginationItem)
  },
}

export { CPaginationPlugin, CPagination, CPaginationItem }
