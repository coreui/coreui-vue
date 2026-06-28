<template>
  <CChart
    type="scatter"
    ref="chartScatterRef"
    :data="{
      datasets: [
        {
          label: 'Scatter Dataset',
          data: [
            {
              x: -10,
              y: 0,
            },
            {
              x: 0,
              y: 10,
            },
            {
              x: 10,
              y: 5,
            },
            {
              x: 0.5,
              y: 5.5,
            },
          ],
          backgroundColor: 'rgb(255, 99, 132)',
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
        x: {
          grid: {
            color: getStyle('--cui-border-color-translucent'),
          },
          position: 'bottom',
          ticks: {
            color: getStyle('--cui-body-color'),
          },
          type: 'linear',
        },
        y: {
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
const chartScatterRef = ref()
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
