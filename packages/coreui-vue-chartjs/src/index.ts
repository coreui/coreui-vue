import { App, defineComponent, h } from 'vue'
import { CChart } from './CChart'

const CChartBar = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'bar', ...props })
  },
})

const CChartBubble = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'bubble', ...props })
  },
})

const CChartDoughnut = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'doughnut', ...props })
  },
})

const CChartLine = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'line', ...props })
  },
})

const CChartPolarArea = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'polarArea', ...props })
  },
})

const CChartRadar = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'radar', ...props })
  },
})

const CChartScatter = defineComponent({
  setup(props) {
    return () => h(CChart, { type: 'scatter', ...props })
  },
})

const CChartPlugin = {
  install: (app: App): void => {
    app.component('CChart', CChart)
    app.component('CChartBar', CChartBar)
    app.component('CChartBubble', CChartBubble)
    app.component('CChartDoughnut', CChartDoughnut)
    app.component('CChartLine', CChartLine)
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
  CChartPolarArea,
  CChartRadar,
  CChartScatter,
}
