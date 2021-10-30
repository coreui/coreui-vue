import { defineComponent, h, onMounted, onUnmounted, onUpdated, PropType, ref, Ref } from 'vue'

import Chart, { ChartData, ChartOptions, ChartType, Plugin } from 'chart.js/auto'
import * as chartjs from 'chart.js'
import { customTooltips as cuiCustomTooltips } from '@coreui/chartjs'

import assign from 'lodash/assign'
import find from 'lodash/find'
import merge from 'lodash/merge'

const CChart = defineComponent({
  name: 'CChart',
  props: {
    /**
     * Enables custom html based tooltips instead of standard tooltips.
     *
     * @default true
     */
    customTooltips: {
      type: Boolean,
      default: true,
      required: false,
    },
    /**
     * The data object that is passed into the Chart.js chart (more info).
     */
    data: {
      type: [Object, Function] as PropType<ChartData | ((canvas: HTMLCanvasElement) => ChartData)>,
      required: true,
    },
    /**
     * Height attribute applied to the rendered canvas.
     *
     * @default 150
     */
    height: {
      type: Number,
      default: 150,
      required: false,
    },
    /**
     * ID attribute applied to the rendered canvas.
     */
    id: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * The options object that is passed into the Chart.js chart.
     *
     * {@link https://www.chartjs.org/docs/latest/general/options.html More Info}
     */
    options: {
      type: Object as PropType<ChartOptions>,
      default: undefined,
      required: false,
    },
    /**
     * The plugins array that is passed into the Chart.js chart (more info)
     *
     * {@link https://www.chartjs.org/docs/latest/developers/plugins.html More Info}
     */
    plugins: {
      type: Array as PropType<Plugin[]>,
      default: undefined,
      required: false,
    },
    /**
     * If true, will tear down and redraw chart on all updates.
     */
    redraw: Boolean,
    /**
     * Chart.js chart type.
     *
     * @type {'line' | 'bar' | 'radar' | 'doughnut' | 'polarArea' | 'bubble' | 'pie' | 'scatter'}
     */
    type: {
      type: String as PropType<ChartType>,
      default: 'bar',
      required: false,
    },
    /**
     * Width attribute applied to the rendered canvas.
     *
     * @default 300
     */
    width: {
      type: Number,
      default: 300,
      required: false,
    },
    /**
     * Put the chart into the wrapper div element.
     *
     * @default true
     */
    wrapper: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  emits: [
    /**
     * Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.
     */
    'getDatasetAtEvent',
    /**
     * Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event.
     */
    'getElementAtEvent',
    /**
     * Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.
     */
    'getElementsAtEvent',
  ],
  setup(props, { emit, slots }) {
    const canvasRef = ref<HTMLCanvasElement>()
    let chart: Chart | null

    const computedData =
      typeof props.data === 'function'
        ? canvasRef.value
          ? props.data(canvasRef.value)
          : { datasets: [] }
        : merge({}, props.data)

    const renderChart = () => {
      if (!canvasRef.value) return

      if (props.customTooltips) {
        chartjs.defaults.plugins.tooltip.enabled = false
        chartjs.defaults.plugins.tooltip.mode = 'index'
        chartjs.defaults.plugins.tooltip.position = 'nearest'
        chartjs.defaults.plugins.tooltip.external = cuiCustomTooltips
      }

      chart = new Chart(canvasRef.value, {
        type: props.type,
        data: computedData,
        options: props.options as ChartOptions,
        plugins: props.plugins,
      })
    }

    const handleOnClick = (e: Event) => {
      if (!chart) return

      emit(
        'getDatasetAtEvent',
        chart.getElementsAtEventForMode(e, 'dataset', { intersect: true }, false),
        e,
      )
      emit(
        'getElementAtEvent',
        chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, false),
        e,
      )
      emit(
        'getElementsAtEvent',
        chart.getElementsAtEventForMode(e, 'index', { intersect: true }, false),
        e,
      )
    }

    const updateChart = () => {
      if (!chart) return

      if (props.options) {
        chart.options = { ...props.options }
      }

      if (!chart.config.data) {
        chart.config.data = computedData
        chart.update()
        return
      }

      const { datasets: newDataSets = [], ...newChartData } = computedData
      const { datasets: currentDataSets = [] } = chart.config.data

      // copy values
      assign(chart.config.data, newChartData)
      chart.config.data.datasets = newDataSets.map((newDataSet: any) => {
        // given the new set, find it's current match
        const currentDataSet = find(
          currentDataSets,
          (d: any) => d.label === newDataSet.label && d.type === newDataSet.type,
        )

        // There is no original to update, so simply add new one
        if (!currentDataSet || !newDataSet.data) return newDataSet

        if (!currentDataSet.data) {
          currentDataSet.data = []
        } else {
          currentDataSet.data.length = newDataSet.data.length
        }

        // copy in values
        assign(currentDataSet.data, newDataSet.data)

        // apply dataset changes, but keep copied data
        return {
          ...currentDataSet,
          ...newDataSet,
          data: currentDataSet.data,
        }
      })

      chart && chart.update()
    }

    const destroyChart = () => {
      if (chart) chart.destroy()
    }

    onMounted(() => {
      renderChart()
    })

    onUnmounted(() => {
      destroyChart()
    })

    onUpdated(() => {
      if (props.redraw) {
        destroyChart()
        setTimeout(() => {
          renderChart()
        }, 0)
      } else {
        updateChart()
      }
    })

    const canvas = (ref: Ref<HTMLCanvasElement | undefined>) =>
      h(
        'canvas',
        {
          id: props.id,
          height: props.height,
          width: props.width,
          onClick: (e: Event) => handleOnClick(e),
          role: 'img',
          ref: ref,
        },
        {
          fallbackContent: () => slots.fallback && slots.fallback(),
        },
      )

    return () =>
      props.wrapper ? h('div', { class: 'chart-wrapper' }, canvas(canvasRef)) : canvas(canvasRef)
  },
})

export default CChart
