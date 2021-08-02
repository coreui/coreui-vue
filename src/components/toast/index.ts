import { App } from 'vue'
import { CToast } from './CToast'
import { CToastBody } from './CToastBody'
import { CToastClose } from './CToastClose'
import { CToaster } from './CToaster'
import { CToastHeader } from './CToastHeader'

const CToastPlugin = {
  install: (app: App): void => {
    app.component(CToast.name, CToast)
    app.component(CToastBody.name, CToastBody)
    app.component(CToastClose.name, CToastClose)
    app.component(CToaster.name, CToaster)
    app.component(CToastHeader.name, CToastHeader)
  },
}

export { CToastPlugin, CToast, CToastBody, CToastClose, CToaster, CToastHeader }
