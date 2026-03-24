import { App } from 'vue'
import { CChip } from './CChip'

const CChipPlugin = {
  install: (app: App): void => {
    app.component(CChip.name as string, CChip)
  },
}

export { CChipPlugin, CChip }
