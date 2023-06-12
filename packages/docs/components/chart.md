---
title: Vue Chart.js Component
description: Vue wrapper for Chart.js 3.0, the most popular charting library.
---

## Installation

If you want to use our Chart.js Vue wrapper you have to install an additional package.

### Npm

```bash
npm install @coreui/vue-chartjs
```

### Yarn

```bash
yarn add @coreui/vue-chartjs
```

## Chart Types

### Line Chart

A line chart is a way of plotting data points on a line. Often, it is used to show trend data, or the comparison of two data sets. 
[Line Chart properties](https://www.chartjs.org/docs/latest/charts/line.html#dataset-properties)

::: demo
<CChart
  type="line"
  ref="chartLineRef"
  :wrapper="false"
  :data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 40, 39]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 12]
      }
    ]
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
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
:::
```vue
<CChart
  type="line"
  :wrapper="false"
  :data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(220, 220, 220, 0.2)',
        borderColor: 'rgba(220, 220, 220, 1)',
        pointBackgroundColor: 'rgba(220, 220, 220, 1)',
        pointBorderColor: '#fff',
        data: [40, 20, 12, 39, 10, 40, 39]
      },
      {
        label: 'My Second dataset',
        backgroundColor: 'rgba(151, 187, 205, 0.2)',
        borderColor: 'rgba(151, 187, 205, 1)',
        pointBackgroundColor: 'rgba(151, 187, 205, 1)',
        pointBorderColor: '#fff',
        data: [50, 12, 28, 29, 7, 25, 12]
      }
    ]
  }"
/>
```

### Bar Chart

A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side. [Bar Chart properties](https://www.chartjs.org/docs/latest/charts/bar.html#dataset-properties)

::: demo
<CChart
  type="bar"
  ref="chartBarRef"
  :data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
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
  labels="months"
/>
:::
```vue
<CChart
  type="bar"
  :data="{
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'GitHub Commits',
        backgroundColor: '#f87979',
        data: [40, 20, 12, 39, 10, 40, 39, 80, 40],
      },
    ],
  }"
  labels="months"
/>
```

### Radar Chart

A radar chart is a way of showing multiple data points and the variation between them. They are often useful for comparing the points of two or more different data sets. [Radar Chart properties](https://www.chartjs.org/docs/latest/charts/radar.html#dataset-properties)

::: demo
<CChart
  type="radar"
  ref="chartRadarRef"
  :data="{
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
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
        }
      }
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
:::
```vue
<CChart
  type="radar"
  :data="{
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running',
    ],
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
/>
```

### Doughnut and Pie Charts

Pie and doughnut charts are probably the most commonly used charts. They are divided into segments, the arc of each segment shows the proportional value of each piece of data. [Doughnut and Pie Charts properties](https://www.chartjs.org/docs/latest/charts/doughnut.html#dataset-properties)

::: demo
<CChart
  type="doughnut"
  ref="chartDoughnutRef"
  :data="{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
    },
  }"
/>
:::
```vue
<CChart
  type="doughnut"
  :data="{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }"
/>
```

::: demo
<CChart
  type="pie"
  ref="chartPieRef"
  :data="{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
    },
  }"
/>
:::
```vue
<CChart
  type="pie"
  :data="{
    labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs'],
    datasets: [
      {
        backgroundColor: ['#41B883', '#E46651', '#00D8FF', '#DD1B16'],
        data: [40, 20, 80, 10],
      },
    ],
  }"
/>
```

### Polar Area Chart

Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value. [Polar Area Chart properties](https://www.chartjs.org/docs/latest/charts/polar.html#dataset-properties)

::: demo
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
        }
      }
    },
    scales: {
      r: {
        grid: {
          color: getStyle('--cui-border-color'),
        },
      }
    }
  }"
/>
:::
```vue
<CChart
  type="polarArea"
  :data="{
    labels: ['Red', 'Green', 'Yellow', 'Grey', 'Blue'],
    datasets: [
      {
        data: [11, 16, 7, 3, 14],
        backgroundColor: ['#FF6384', '#4BC0C0', '#FFCE56', '#E7E9ED', '#36A2EB'],
      },
    ],
  }"
/>
```

### Bubble Chart

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Bubble Chart properties](https://www.chartjs.org/docs/latest/charts/bubble.html#dataset-properties)

::: demo
<CChart
  type="bubble"
  ref="chartBubbleRef"
  :data="{
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: getStyle('--cui-border-color-translucent'),
        },
        ticks: {
          color: getStyle('--cui-body-color'),
        },
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
:::
```vue
<CChart
  type="bubble"
  :data="{
    datasets: [{
      label: 'First Dataset',
      data: [{
        x: 20,
        y: 30,
        r: 15
      }, {
        x: 40,
        y: 10,
        r: 10
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }]
  }"
/>
```


### Scatter Chart

A bubble chart is used to display three dimensions of data at the same time. The location of the bubble is determined by the first two dimensions and the corresponding horizontal and vertical axes. The third dimension is represented by the size of the individual bubbles. [Scatter Chart properties](https://www.chartjs.org/docs/latest/charts/scatter.html#dataset-properties)

::: demo
<CChart
  type="scatter"
  ref="chartScatterRef"
  :data="{
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
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
:::
```vue
<!-- use <CChart type="scatter"> or <CChartScatter> component -->
<CChart
  type="scatter"
  :data="{
    datasets: [{
      label: 'Scatter Dataset',
      data: [{
        x: -10,
        y: 0
      }, {
        x: 0,
        y: 10
      }, {
        x: 10,
        y: 5
      }, {
        x: 0.5,
        y: 5.5
      }],
      backgroundColor: 'rgb(255, 99, 132)'
    }],
  }"
  :options="{
    plugins: {
      legend: {
        labels: {
          color: getStyle('--cui-body-color'),
        }
      }
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
```

<script setup>
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
      chartLineRef.value.chart.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
      chartLineRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
      chartLineRef.value.chart.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
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
      chartRadarRef.value.chart.options.scales.r.grid.color = getStyle('--cui-border-color-translucent')
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
      chartPolarAreaRef.value.chart.options.scales.r.grid.color = getStyle('--cui-border-color-translucent')
      chartPolarAreaRef.value.chart.update()

      // chartBubbleRef
      chartBubbleRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
      chartBubbleRef.value.chart.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
      chartBubbleRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
      chartBubbleRef.value.chart.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
      chartBubbleRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
      chartBubbleRef.value.chart.update()

      // chartScatterRef
      chartScatterRef.value.chart.options.plugins.legend.labels.color = getStyle('--cui-body-color')
      chartScatterRef.value.chart.options.scales.x.grid.color = getStyle('--cui-border-color-translucent')
      chartScatterRef.value.chart.options.scales.x.ticks.color = getStyle('--cui-body-color')
      chartScatterRef.value.chart.options.scales.y.grid.color = getStyle('--cui-border-color-translucent')
      chartScatterRef.value.chart.options.scales.y.ticks.color = getStyle('--cui-body-color')
      chartScatterRef.value.chart.update()
    })
  })
</script> 

## API

!!!include(./api/CChart.api.md)!!!