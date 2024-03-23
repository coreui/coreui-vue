import { App } from 'vue'
import { CBreadcrumbItem } from './CBreadcrumbItem'
import { CBreadcrumb } from './CBreadcrumb'

const CBreadcrumbPlugin = {
  install: (app: App): void => {
    app.component(CBreadcrumb.name as string, CBreadcrumb)
    app.component(CBreadcrumbItem.name as string, CBreadcrumbItem)
  },
}

export { CBreadcrumbPlugin, CBreadcrumb, CBreadcrumbItem }
