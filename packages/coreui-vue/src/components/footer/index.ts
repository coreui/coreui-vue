import { App } from 'vue'
import { CFooter } from './CFooter'

const CFooterPlugin = {
  install: (app: App): void => {
    app.component(CFooter.name as string, CFooter)
  },
}

export { CFooterPlugin, CFooter }
