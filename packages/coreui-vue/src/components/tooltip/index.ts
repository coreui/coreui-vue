import { App } from 'vue'
import { CTooltip } from './CTooltip'

const CTooltipPlugin = {
  install: (app: App): void => {
    app.component(CTooltip.name as string, CTooltip)
  },
}

export { CTooltipPlugin, CTooltip }
