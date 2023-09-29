import { App } from 'vue'
import { CProgress } from './CProgress'
import { CProgressBar } from './CProgressBar'
import { CProgressStacked } from './CProgressStacked'

const CProgressPlugin = {
  install: (app: App): void => {
    app.component(CProgress.name, CProgress)
    app.component(CProgressBar.name, CProgressBar)
    app.component(CProgressStacked.name, CProgressStacked)
  },
}

export { CProgressPlugin, CProgress, CProgressBar, CProgressStacked }
