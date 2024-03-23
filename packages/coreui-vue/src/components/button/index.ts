import { App } from 'vue'
import { CButton } from './CButton'

const CButtonPlugin = {
  install: (app: App): void => {
    app.component(CButton.name as string, CButton)
  },
}

export { CButtonPlugin, CButton }
