import { App } from 'vue'
import { CProgress } from './CProgress'
import { CProgressBar } from './CProgressBar'
import { CProgressStacked } from './CProgressStacked'

const CProgressPlugin = {
  install: (app: App): void => {
    app.component(CProgress.name as string, CProgress)
    app.component(CProgressBar.name as string, CProgressBar)
    app.component(CProgressStacked.name as string, CProgressStacked)
  },
}

export { CProgressPlugin, CProgress, CProgressBar, CProgressStacked }
