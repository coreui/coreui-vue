import { App } from 'vue'
import { CSpinner } from './CSpinner'

const CSpinnerPlugin = {
  install: (app: App): void => {
    app.component(CSpinner.name, CSpinner)
  },
}

export { CSpinnerPlugin, CSpinner }
