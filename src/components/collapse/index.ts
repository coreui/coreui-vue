import { App } from 'vue'
import { CCollapse } from './CCollapse'

const CCollapsePlugin = {
  install: (app: App): void => {
    app.component(CCollapse.name, CCollapse)
  },
}

export { CCollapsePlugin, CCollapse }
