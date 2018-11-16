import Chart from 'chart.js'

export function generateChart (chartType) {
  return {
    render: function (createElement) {
      return createElement(
        'div', {
          style: this.styles,
          class: this.cssClasses
        },
        [
          createElement(
            'canvas', {
              attrs: {
                id: this.chartId,
                width: this.width,
                height: this.height
              },
              ref: 'canvas'
            }
          )
        ]
      )
    },

    props: {
      chartId: {
        default: null,
        type: String
      },
      width: {
        default: 400,
        type: Number
      },
      height: {
        default: 400,
        type: Number
      },
      cssClasses: {
        type: String,
        default: 'chart-wrapper'
      },
      styles: Object,
      plugins: {
        type: Array,
        default () {
          return []
        }
      }
    },

    data () {
      return {
        _chart: null,
        _plugins: this.plugins
      }
    },

    methods: {
      addPlugin (plugin) {
        this.$data._plugins.push(plugin)
      },
      generateLegend () {
        if (this.$data._chart) {
          return this.$data._chart.generateLegend()
        }
      },
      renderChart (data, options) {
        if (this.$data._chart) this.$data._chart.destroy()
        this.$data._chart = new Chart(
          this.$refs.canvas.getContext('2d'), {
            type: chartType,
            data: data,
            options: options,
            plugins: this.$data._plugins
          }
        )
      }
    },
    beforeDestroy () {
      if (this.$data._chart) {
        this.$data._chart.destroy()
      }
    }
  }
}

export const Bar = generateChart('bar')
export const HorizontalBar = generateChart('horizontalBar')
export const Doughnut = generateChart('doughnut')
export const Line = generateChart('line')
export const Pie = generateChart('pie')
export const PolarArea = generateChart('polarArea')
export const Radar = generateChart('radar')
export const Bubble = generateChart('bubble')
export const Scatter = generateChart('scatter')

export default {
  Bar,
  HorizontalBar,
  Doughnut,
  Line,
  Pie,
  PolarArea,
  Radar,
  Bubble,
  Scatter
}
