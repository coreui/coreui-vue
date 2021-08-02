import { App } from 'vue'
import { CProgress } from './CProgress'
import { CProgressBar } from './CProgressBar'

const CProgressPlugin = {
  install: (app: App): void => {
    app.component(CProgress.name, CProgress)
    app.component(CProgressBar.name, CProgressBar)
  },
}

export { CProgressPlugin, CProgress, CProgressBar }
