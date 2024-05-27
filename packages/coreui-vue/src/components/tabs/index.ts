import { App } from 'vue'
import { CTab } from './CTab'
import { CTabContent } from './CTabContent'
import { CTabList } from './CTabList'
import { CTabPane } from './CTabPane'
import { CTabPanel } from './CTabPanel'
import { CTabs } from './CTabs'

const CTabsPlugin = {
  install: (app: App): void => {
    app.component(CTab.name as string, CTab)
    app.component(CTabContent.name as string, CTabContent)
    app.component(CTabList.name as string, CTabList)
    app.component(CTabPane.name as string, CTabPane)
    app.component(CTabPanel.name as string, CTabPanel)
    app.component(CTabs.name as string, CTabs)
  },
}

export { CTabsPlugin, CTab, CTabContent, CTabList, CTabPane, CTabPanel, CTabs }
