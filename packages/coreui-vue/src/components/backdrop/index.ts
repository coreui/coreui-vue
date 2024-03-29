import { App } from 'vue'
import { CBackdrop } from './CBackdrop'

const CBackdropPlugin = {
  install: (app: App): void => {
    app.component(CBackdrop.name as string, CBackdrop)
  },
}

export { CBackdropPlugin, CBackdrop }
