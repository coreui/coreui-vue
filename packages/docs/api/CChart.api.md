### CChart

```jsx
import { CChart } from '@coreui/vue-chartjs'
// or
import CChart from '@coreui/vue-chartjs/src/CChart'
```

#### Props

| Prop name          | Description                                                                                                                                  | Type                                                    | Values                                                                      | Default |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| **customTooltips** | Enables custom html based tooltips instead of standard tooltips.<br/>`@default` true                                                         | boolean                                                 | -                                                                           | true    |
| **data**           | The data object that is passed into the Chart.js chart (more info).                                                                          | ChartData \| ((canvas: HTMLCanvasElement) => ChartData) | -                                                                           |         |
| **height**         | Height attribute applied to the rendered canvas.<br/>`@default` 150                                                                          | number                                                  | -                                                                           | 150     |
| **id**             | ID attribute applied to the rendered canvas.                                                                                                 | string                                                  | -                                                                           | -       |
| **options**        | The options object that is passed into the Chart.js chart.<br><br>{@link https://www.chartjs.org/docs/latest/general/options.html More Info} | ChartOptions                                            | -                                                                           | -       |
| **redraw**         | If true, will tear down and redraw chart on all updates.                                                                                     | boolean                                                 | -                                                                           |         |
| **type**           | Chart.js chart type.<br/>`@type` undefined                                                                                                   | ChartType                                               | `line`, `bar`, `radar`, `doughnut`, `polarArea`, `bubble`, `pie`, `scatter` | 'bar'   |
| **width**          | Width attribute applied to the rendered canvas.<br/>`@default` 300                                                                           | number                                                  | -                                                                           | 300     |
| **wrapper**        | Put the chart into the wrapper div element.<br/>`@default` true                                                                              | boolean                                                 | -                                                                           | true    |

#### Events

| Event name             | Description                                                                                 | Properties |
| ---------------------- | ------------------------------------------------------------------------------------------- | ---------- |
| **getDatasetAtEvent**  | Proxy for Chart.js getDatasetAtEvent. Calls with dataset and triggering event.              |
| **getElementAtEvent**  | Proxy for Chart.js getElementAtEvent. Calls with single element array and triggering event. |
| **getElementsAtEvent** | Proxy for Chart.js getElementsAtEvent. Calls with element array and triggering event.       |
