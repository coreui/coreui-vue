import { App } from 'vue'
import { CListGroup } from './CListGroup'
import { CListGroupItem } from './CListGroupItem'

const CListGroupPlugin = {
  install: (app: App): void => {
    app.component(CListGroup.name, CListGroup)
    app.component(CListGroupItem.name, CListGroupItem)
  },
}

export { CListGroupPlugin, CListGroup, CListGroupItem }
