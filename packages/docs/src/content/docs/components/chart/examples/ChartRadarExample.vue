<template>
  <CChart
    type="radar"
    ref="chartRadarRef"
    :data="{
      labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: 'rgba(220, 220, 220, 0.2)',
          borderColor: 'rgba(220, 220, 220, 1)',
          pointBackgroundColor: 'rgba(220, 220, 220, 1)',
          pointBorderColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(220, 220, 220, 1)',
          data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: 'rgba(151, 187, 205, 0.2)',
          borderColor: 'rgba(151, 187, 205, 1)',
          pointBackgroundColor: 'rgba(151, 187, 205, 1)',
          pointBorderColor: '#fff',
          pointHighlightFill: '#fff',
          pointHighlightStroke: 'rgba(151, 187, 205, 1)',
          data: [28, 48, 40, 19, 96, 27, 100],
        },
      ],
    }"
    :options="{
      plugins: {
        legend: {
          labels: {
            color: getStyle('--cui-body-color'),
          },
        },
      },
      scales: {
        r: {
          grid: {
            color: getStyle('--cui-border-color-translucent'),
          },
          ticks: {
            color: getStyle('--cui-body-color'),
          },
        },
      },
    }"
  />
</template>

<script setup>
import { CChart } from '@coreui/vue-chartjs'
import { ref } from 'vue'
import { getStyle } from '@coreui/utils'
const chartRadarRef = ref()
onMounted(() => {
  document.documentElement.addEventListener('ColorSchemeChange', () => {
    // chartLineRef
    chartLineRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartLineRef.value.chart.options.scales.x.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartLineRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
    chartLineRef.value.chart.options.scales.y.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartLineRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
    chartLineRef.value.chart.update()

    // chartBarRef
    chartBarRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartBarRef.value.chart.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
    chartBarRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
    chartBarRef.value.chart.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
    chartBarRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
    chartBarRef.value.chart.update()

    // chartRadarRef
    chartRadarRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartRadarRef.value.chart.options.scales.r.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartRadarRef.value.chart.options.scales.r.ticks.color = getStyle('--cui-body-color')
    chartRadarRef.value.chart.update()

    // chartDoughnutRef
    chartDoughnutRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartDoughnutRef.value.chart.update()

    // chartPieRef
    chartPieRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartPieRef.value.chart.update()

    // chartPolarAreaRef
    chartPolarAreaRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartPolarAreaRef.value.chart.options.scales.r.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartPolarAreaRef.value.chart.update()

    // chartBubbleRef
    chartBubbleRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartBubbleRef.value.chart.options.scales.x.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartBubbleRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
    chartBubbleRef.value.chart.options.scales.y.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartBubbleRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
    chartBubbleRef.value.chart.update()

    // chartScatterRef
    chartScatterRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
    chartScatterRef.value.chart.options.scales.x.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartScatterRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
    chartScatterRef.value.chart.options.scales.y.grid.color = getStyle(
      '--cui-border-color-translucent'
    )
    chartScatterRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
    chartScatterRef.value.chart.update()
  })
})
</script>
