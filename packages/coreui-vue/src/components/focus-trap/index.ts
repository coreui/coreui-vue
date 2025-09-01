import { App } from 'vue'
import { CFocusTrap } from './CFocusTrap'

const CFocusTrapPlugin = {
  install: (app: App): void => {
    app.component(CFocusTrap.name as string, CFocusTrap)
  },
}

export { CFocusTrapPlugin, CFocusTrap }
