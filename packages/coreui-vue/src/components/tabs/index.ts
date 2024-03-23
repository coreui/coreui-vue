import { App } from 'vue'
import { CTabContent } from './CTabContent'
import { CTabPane } from './CTabPane'

const CTabsPlugin = {
  install: (app: App): void => {
    app.component(CTabContent.name as string, CTabContent)
    app.component(CTabPane.name as string, CTabPane)
  },
}

export { CTabsPlugin, CTabContent, CTabPane }
