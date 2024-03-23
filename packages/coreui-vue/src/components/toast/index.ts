import { App } from 'vue'
import { CToast } from './CToast'
import { CToastBody } from './CToastBody'
import { CToastClose } from './CToastClose'
import { CToaster } from './CToaster'
import { CToastHeader } from './CToastHeader'

const CToastPlugin = {
  install: (app: App): void => {
    app.component(CToast.name as string, CToast)
    app.component(CToastBody.name as string, CToastBody)
    app.component(CToastClose.name as string, CToastClose)
    app.component(CToaster.name as string, CToaster)
    app.component(CToastHeader.name as string, CToastHeader)
  },
}

export { CToastPlugin, CToast, CToastBody, CToastClose, CToaster, CToastHeader }
