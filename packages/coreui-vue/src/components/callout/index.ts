import { App } from 'vue'
import { CCallout } from './CCallout'

const CCalloutPlugin = {
  install: (app: App): void => {
    app.component(CCallout.name, CCallout)
  },
}

export { CCalloutPlugin, CCallout }
