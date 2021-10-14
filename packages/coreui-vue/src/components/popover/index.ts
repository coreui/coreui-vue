import { App } from 'vue'
import { CPopover } from './CPopover'

const CPopoverPlugin = {
  install: (app: App): void => {
    app.component(CPopover.name, CPopover)
  },
}

export { CPopoverPlugin, CPopover }
