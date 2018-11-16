<script>
import { Line } from '../../extends/BaseChart'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips'
import { generatedLabels, generatedColor, generatedBorderColor, generatedPointHoverColor, generatedOptions } from '../../mixins/chartMixins'

export default {
  name: 'CSimpleLineChart',
  extends: Line,
  mixins: [generatedLabels, generatedColor, generatedBorderColor, generatedPointHoverColor, generatedOptions],
  props: {
    data: {
      type: Array,
      default: () => [0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]
    },
    label:{
      type: String,
      default: 'label|string'
    },
    borderColor: {
      type: String,
      default: 'rgba(255,255,255,.55)'
    },
    labels: Array,
    color: {
      type: String,
      default: 'transparent'
    },
    pointHoverColor: {
      type: String,
      default: 'transparent'
    },
    options: Object,
    finalOptions: {
      type: Object,
      default: () => ({
        tooltips: {
          enabled: false,
          custom: CustomTooltips
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false
          }],
          yAxes: [{
            display: false
          }]
        },
        elements: {
          line: {
            borderWidth: 2
          },
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4
          }
        }
      })
    }
  },
  mounted () {
    const datasets = [
      {
        label: this.label,
        borderColor: this.generatedBorderColor,
        backgroundColor: this.generatedColor,
        pointHoverBackgroundColor: this.generatedPointHoverColor,
        data: this.data
      }
    ]
    this.renderChart(
      {
        labels: this.generatedLabels,
        datasets: datasets
      },
      this.generatedOptions
    )
  },
}
</script>
