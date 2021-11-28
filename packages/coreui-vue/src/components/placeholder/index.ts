import { App } from 'vue'
import { CPlaceholder } from './CPlaceholder'

const CPlaceholderPlugin = {
  install: (app: App): void => {
    app.component(CPlaceholder.name, CPlaceholder)
  },
}

export { CPlaceholderPlugin, CPlaceholder }
