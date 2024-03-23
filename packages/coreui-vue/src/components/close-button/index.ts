import { App } from 'vue'
import { CCloseButton } from './CCloseButton'

const CCloseButtonPlugin = {
  install: (app: App): void => {
    app.component(CCloseButton.name as string, CCloseButton)
  },
}

export { CCloseButtonPlugin, CCloseButton }
