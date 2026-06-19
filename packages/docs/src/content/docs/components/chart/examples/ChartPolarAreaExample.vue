<template>
  <CChart
    type="polarArea"
    ref="chartPolarAreaRef"
    :data="{
      labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
      datasets: [
        {
          data: [11, 16, 7, 3, 14],
          backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
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
            color: getStyle('--cui-border-color'),
          },
        },
      },
    }"
  />
</template>

<script setup>
import { CChart } from '@coreui/vue-chartjs'
import { onMounted, ref, watch } from 'vue'
import { getStyle } from '@coreui/utils'
const chartLineRef = ref()
const chartBarRef = ref()
const chartRadarRef = ref()
const chartDoughnutRef = ref()
const chartPieRef = ref()
const chartPolarAreaRef = ref()
const chartBubbleRef = ref()
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
