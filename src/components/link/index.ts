import { App } from 'vue'
import { CLink } from './CLink'

const CCLinkPlugin = {
  install: (app: App): void => {
    app.component(CLink.name, CLink)
  },
}

export { CCLinkPlugin, CLink }
