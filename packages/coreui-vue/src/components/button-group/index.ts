import { App } from 'vue'
import { CButtonToolbar } from './CButtonToolbar'
import { CButtonGroup } from './CButtonGroup'

const CButtonGroupPlugin = {
  install: (app: App): void => {
    app.component(CButtonToolbar.name as string, CButtonToolbar)
    app.component(CButtonGroup.name as string, CButtonGroup)
  },
}

export { CButtonGroupPlugin, CButtonToolbar, CButtonGroup }
