import { App } from 'vue'
import { CCollapse } from './CCollapse'

const CCollapsePlugin = {
  install: (app: App): void => {
    app.component(CCollapse.name as string, CCollapse)
  },
}

export { CCollapsePlugin, CCollapse }
