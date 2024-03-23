import { App } from 'vue'
import { CWidgetStatsA } from './CWidgetStatsA'
import { CWidgetStatsB } from './CWidgetStatsB'
import { CWidgetStatsC } from './CWidgetStatsC'
import { CWidgetStatsD } from './CWidgetStatsD'
import { CWidgetStatsE } from './CWidgetStatsE'
import { CWidgetStatsF } from './CWidgetStatsF'

const CWidgetsStatsPlugin = {
  install: (app: App): void => {
    app.component(CWidgetStatsA.name as string, CWidgetStatsA)
    app.component(CWidgetStatsB.name as string, CWidgetStatsB)
    app.component(CWidgetStatsC.name as string, CWidgetStatsC)
    app.component(CWidgetStatsD.name as string, CWidgetStatsD)
    app.component(CWidgetStatsE.name as string, CWidgetStatsE)
    app.component(CWidgetStatsF.name as string, CWidgetStatsF)
  },
}

export {
  CWidgetsStatsPlugin,
  CWidgetStatsA,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsD,
  CWidgetStatsE,
  CWidgetStatsF,
}
