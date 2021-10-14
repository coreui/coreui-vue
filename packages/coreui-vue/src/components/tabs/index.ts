import { App } from 'vue'
import { CTabContent } from './CTabContent'
import { CTabPane } from './CTabPane'

const CTabsPlugin = {
  install: (app: App): void => {
    app.component(CTabContent.name, CTabContent)
    app.component(CTabPane.name, CTabPane)
  },
}

export { CTabsPlugin, CTabContent, CTabPane }
