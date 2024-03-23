import { App } from 'vue'
import { CAlert } from './CAlert'
import { CAlertHeading } from './CAlertHeading'
import { CAlertLink } from './CAlertLink'

const CAlertPlugin = {
  install: (app: App): void => {
    app.component(CAlert.name as string, CAlert)
    app.component(CAlertHeading.name as string, CAlertHeading)
    app.component(CAlertLink.name as string, CAlertLink)
  },
}

export { CAlertPlugin, CAlert, CAlertHeading, CAlertLink }
