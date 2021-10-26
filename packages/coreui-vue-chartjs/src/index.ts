import { App, defineComponent, h, PropType } from 'vue'
import { ChartData, ChartOptions, Plugin } from 'chart.js/auto'
import { CChart } from './CChart'

const CChartProps = {
  customTooltips: {
    type: Boolean,
    default: true,
    required: false,
  },
  data: {
    type: [Object, Function] as PropType<ChartData | ((canvas: HTMLCanvasElement) => ChartData)>,
    required: true,
  },
  height: {
    type: Number,
    default: 150,
    required: false,
  },
  id: {
    type: String,
    default: undefined,
    required: false,
  },
  options: {
    type: Object as PropType<ChartOptions>,
    default: undefined,
    required: false,
  },
  plugins: {
    type: Array as PropType<Plugin[]>,
    default: undefined,
    required: false,
  },
  redraw: Boolean,
  width: {
    type: Number,
    default: 300,
    required: false,
  },
  wrapper: {
    type: Boolean,
    default: true,
    required: false,
  },
}

const CChartBar = defineComponent({
  name: 'CChartBar',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'bar', ...props })
  },
})

const CChartBubble = defineComponent({
  name: 'CChartBubble',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'bubble', ...props })
  },
})

const CChartDoughnut = defineComponent({
  name: 'CChartDoughnut',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'doughnut', ...props })
  },
})

const CChartLine = defineComponent({
  name: 'CChartLine',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'line', ...props })
  },
})

const CChartPie = defineComponent({
  name: 'CChartPie',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'pie', ...props })
  },
})

const CChartPolarArea = defineComponent({
  name: 'CChartPolarArea',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'polarArea', ...props })
  },
})

const CChartRadar = defineComponent({
  name: 'CChartRadar',
  props: CChartProps,
  setup(props) {
    return () => h(CChart, { type: 'radar', ...props })
  },
})

const CChartScatter = defineComponent({
  name: 'CChartScatter',
  props: CChartProps,
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
