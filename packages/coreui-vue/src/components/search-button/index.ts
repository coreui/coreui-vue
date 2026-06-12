import { App } from 'vue'
import { CSearchButton } from './CSearchButton'

const CSearchButtonPlugin = {
  install: (app: App): void => {
    app.component(CSearchButton.name as string, CSearchButton)
  },
}

export { CSearchButtonPlugin, CSearchButton }
