import { App, defineComponent, h } from 'vue'
import CChart from './CChart'

const CChartBar = defineComponent({
  extends: CChart,
  name: 'CChartBar',
  setup(props) {
    return () => h(CChart, { ...props, type: 'bar' })
  },
})

const CChartBubble = defineComponent({
  extends: CChart,
  name: 'CChartBubble',
  setup(props) {
    return () => h(CChart, { ...props, type: 'bubble' })
  },
})

const CChartDoughnut = defineComponent({
  extends: CChart,
  name: 'CChartDoughnut',
  setup(props) {
    return () => h(CChart, { ...props, type: 'doughnut' })
  },
})

const CChartLine = defineComponent({
  extends: CChart,
  name: 'CChartLine',
  setup(props) {
    return () => h(CChart, { ...props, type: 'line' })
  },
})

const CChartPie = defineComponent({
  extends: CChart,
  name: 'CChartPie',
  setup(props) {
    return () => h(CChart, { ...props, type: 'pie' })
  },
})

const CChartPolarArea = defineComponent({
  extends: CChart,
  name: 'CChartPolarArea',
  setup(props) {
    return () => h(CChart, { ...props, type: 'polarArea' })
  },
})

const CChartRadar = defineComponent({
  extends: CChart,
  name: 'CChartRadar',
  setup(props) {
    return () => h(CChart, { ...props, type: 'radar' })
  },
})

const CChartScatter = defineComponent({
  extends: CChart,
  name: 'CChartScatter',
  setup(props) {
    return () => h(CChart, { ...props, type: 'scatter' })
  },
})

const CChartPlugin = {
  install: (app: App): void => {
    app.component('CChart', CChart)
    app.component('CChartBar', CChartBar)
    app.component('CChartBubble', CChartBubble)
    app.component('CChartDoughnut', CChartDoughnut)
    app.component('CChartLine', CChartLine)
    app.component('CChartPie', CChartPie)
    app.component('CChartPolarArea', CChartPolarArea)
    app.component('CChartRadar', CChartRadar)
    app.component('CChartScatter', CChartScatter)
  },
}

export default CChartPlugin

export {
  CChart,
  CChartBar,
  CChartBubble,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
  CChartScatter,
}
