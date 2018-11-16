### Simple pointed chart (CSimplePointedChart)
This chart is fully adjustable chart.js based simple pointed chart. It extends BaseChart component.

prop | default
--- | ---
data  | `[0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]`
label  | `'label:string'`
borderColor  | `'rgba(255,255,255,255,.55)'`
color  |  `'transparent'`
labels  | `[]`
options  | `{}`
pointHoverBackgroundColor  |  `'transparent'`

Default render options:
```
{
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false,
  legend: {
    display: false
  },
  scales: {
    xAxes: [
      {
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent'
        }
      }
    ],
    yAxes: [
      {
        display: false,
        ticks: {
          display: false,
          min: Math.min.apply(Math, this.data) - 5,
          max: Math.max.apply(Math, this.data) + 5
        }
      }
    ]
  },
  elements: {
    line: {
      borderWidth: 1
    },
    point: {
      radius: 4,
      hitRadius: 10,
      hoverRadius: 4
    }
  }
}
```

You can add and/or change default render options by passing your own in options object (like in example below).

#### Example
```html
<CSimplePointedChart class="px-3"
                     :data="[1, 18, 9, 17, 34, 22, 11]"
                     :labels="['January', 'February', 'March', 'April',  'May', 'June', 'July']"
                     style="height:70px"
                     label="Members"
                     :options="{elements: {line: {tension: 0.00001}}, elements: {line: {borderWidth: 0.5}}}"
                     pointHoverColor="info"
/>
```
