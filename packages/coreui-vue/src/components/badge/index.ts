import { App } from 'vue'
import { CBadge } from './CBadge'

const CBadgePlugin = {
  install: (app: App): void => {
    app.component(CBadge.name, CBadge)
  },
}

export { CBadge, CBadgePlugin }
