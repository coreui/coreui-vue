import { App } from 'vue'
import { CCallout } from './CCallout'

const CCalloutPlugin = {
  install: (app: App): void => {
    app.component(CCallout.name as string, CCallout)
  },
}

export { CCalloutPlugin, CCallout }
