import { App } from 'vue'
import { CStepper } from './CStepper'

const CStepperPlugin = {
  install: (app: App): void => {
    app.component(CStepper.name as string, CStepper)
  },
}

export { CStepper, CStepperPlugin }
