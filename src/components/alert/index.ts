import { App } from 'vue'
import { CAlert } from './CAlert'
import { CAlertHeading } from './CAlertHeading'
import { CAlertLink } from './CAlertLink'

const CAlertPlugin = {
  install: (app: App): void => {
    app.component(CAlert.name, CAlert)
    app.component(CAlertHeading.name, CAlertHeading)
    app.component(CAlertLink.name, CAlertLink)
  },
}

export { CAlertPlugin, CAlert, CAlertHeading, CAlertLink }
