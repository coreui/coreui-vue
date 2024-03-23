import { App } from 'vue'
import { CListGroup } from './CListGroup'
import { CListGroupItem } from './CListGroupItem'

const CListGroupPlugin = {
  install: (app: App): void => {
    app.component(CListGroup.name as string, CListGroup)
    app.component(CListGroupItem.name as string, CListGroupItem)
  },
}

export { CListGroupPlugin, CListGroup, CListGroupItem }
