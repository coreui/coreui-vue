import { App } from 'vue'
import { CCloseButton } from './CCloseButton'

const CCloseButtonPlugin = {
  install: (app: App): void => {
    app.component(CCloseButton.name, CCloseButton)
  },
}

export { CCloseButtonPlugin, CCloseButton }
