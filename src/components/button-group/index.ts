import { App } from 'vue'
import { CButtonToolbar } from './CButtonToolbar'
import { CButtonGroup } from './CButtonGroup'

const CButtonGroupPlugin = {
  install: (app: App): void => {
    app.component(CButtonToolbar.name, CButtonToolbar)
    app.component(CButtonGroup.name, CButtonGroup)
  },
}

export { CButtonGroupPlugin, CButtonToolbar, CButtonGroup }
