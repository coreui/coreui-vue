<script>
import { Bar } from '../../extends/BaseCharts'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { generatedLabels, generatedColor,generatedBorderColor, generatedOptions } from '../../mixins/chartMixins'

export default {
  name: 'CSimpleBarChart',
  extends: Bar,
  mixins: [ generatedLabels, generatedColor, generatedBorderColor, generatedOptions ],
  props: {
    data: {
      type: Array,
      default: () => [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    label: {
      type: String,
      default: 'label|string'
    },
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    color: {
      type: String,
      default: 'rgba(0,0,0,.2)'
    },
    labels: Array,
    options: Object,
    finalOptions: {
      type: Object,
      default: () => ({
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false,
            categoryPercentage: 1,
            barPercentage: 0.5
          }],
          yAxes: [{
            display: false
          }]
        }
      })
    }
  },
  mounted () {
    const dataset = [
      {
        label: this.label,
        backgroundColor: this.generatedColor,
        borderColor: this.generatedBorderColor,
        data: this.data
      }
    ]
    this.renderChart(
      {
        labels: this.generatedLabels,
        datasets: dataset
      },
      this.generatedOptions
    )
  }
}
</script>
