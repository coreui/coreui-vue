import { App } from 'vue'
import { CPopover } from './CPopover'

const CPopoverPlugin = {
  install: (app: App): void => {
    app.component(CPopover.name as string, CPopover)
  },
}

export { CPopoverPlugin, CPopover }
