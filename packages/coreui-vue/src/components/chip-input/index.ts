import { App } from 'vue'
import { CChipInput } from './CChipInput'

const CChipInputPlugin = {
  install: (app: App): void => {
    app.component(CChipInput.name as string, CChipInput)
  },
}

export { CChipInputPlugin, CChipInput }
