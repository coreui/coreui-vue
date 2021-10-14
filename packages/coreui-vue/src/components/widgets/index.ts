import { App } from 'vue'
import { CWidgetStatsA } from './CWidgetStatsA'
import { CWidgetStatsB } from './CWidgetStatsB'
import { CWidgetStatsC } from './CWidgetStatsC'
import { CWidgetStatsD } from './CWidgetStatsD'
import { CWidgetStatsE } from './CWidgetStatsE'
import { CWidgetStatsF } from './CWidgetStatsF'

const CWidgetsStatsPlugin = {
  install: (app: App): void => {
    app.component(CWidgetStatsA.name, CWidgetStatsA)
    app.component(CWidgetStatsB.name, CWidgetStatsB)
    app.component(CWidgetStatsC.name, CWidgetStatsC)
    app.component(CWidgetStatsD.name, CWidgetStatsD)
    app.component(CWidgetStatsE.name, CWidgetStatsE)
    app.component(CWidgetStatsF.name, CWidgetStatsF)
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
