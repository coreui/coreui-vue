import { App } from 'vue'
import { CBreadcrumbItem } from './CBreadcrumbItem'
import { CBreadcrumb } from './CBreadcrumb'

const CBreadcrumbPlugin = {
  install: (app: App): void => {
    app.component(CBreadcrumb.name, CBreadcrumb)
    app.component(CBreadcrumbItem.name, CBreadcrumbItem)
  },
}

export { CBreadcrumbPlugin, CBreadcrumb, CBreadcrumbItem }
