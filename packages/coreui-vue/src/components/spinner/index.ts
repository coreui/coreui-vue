import { App } from 'vue'
import { CSpinner } from './CSpinner'

const CSpinnerPlugin = {
  install: (app: App): void => {
    app.component(CSpinner.name as string, CSpinner)
  },
}

export { CSpinnerPlugin, CSpinner }
