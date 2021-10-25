<p align="center">
  <a href="https://coreui.io/">
    <img
      src="https://coreui.io/images/brand/coreui-signet.svg"
      alt="CoreUI logo"
      width="200"
    />
  </a>
</p>

<h3 align="center">CoreUI Vue.js wrapper for Chart.js</h3>

<p align="center">
  <a href="https://coreui.io/vue/docs/components/chart/"><strong>Explore @coreui/vue-chartjs docs & examples »</strong></a>
  <br>
  <br>
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=bug_report.md">Report bug</a>
  ·
  <a href="https://github.com/coreui/coreui-vue/issues/new?template=feature_request.md">Request feature</a>
  ·
  <a href="https://blog.coreui.io/">Blog</a>
</p>

## Status

[![npm package][npm-badge]][npm]
[![NPM downloads][npm-download]][npm]

[npm-badge]: https://img.shields.io/npm/v/@coreui/vue-chartjs/latest?style=flat-square
[npm]: https://www.npmjs.com/package/@coreui/vue-chartjs
[npm-download]: https://img.shields.io/npm/dm/@coreui/vue-chartjs.svg?style=flat-square

##### install:

```bash
npm install @coreui/vue-chartjs

# or

yarn add @coreui/vue-chartjs
```

##### import:

```jsx
import { CChart } from '@coreui/vue-chartjs'
```

or

```js
import {
  CChart,
  CChartBar,
  CChartHorizontalBar,
  CChartLine,
  CChartDoughnut,
  CChartRadar,
  CChartPie,
  CChartPolarArea,
} from '@coreui/vue-chartjs'
```

##### props:

```js
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
```

##### usage:

```vue
<CChartLine
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