import { App } from 'vue'
import { CConditionalTeleport } from './CConditionalTeleport'

const CConditionalTeleportPlugin = {
  install: (app: App): void => {
    app.component(CConditionalTeleport.name, CConditionalTeleport)
  },
}

export { CConditionalTeleport, CConditionalTeleportPlugin }
