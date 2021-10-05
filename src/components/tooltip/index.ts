import { App } from 'vue'
import { CTooltip } from './CTooltip'

const CTooltipPlugin = {
  install: (app: App): void => {
    app.component(CTooltip.name, CTooltip)
  },
}

export { CTooltipPlugin, CTooltip }
