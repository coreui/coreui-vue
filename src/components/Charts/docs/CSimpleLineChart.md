### Simple line chart (CSimpleLineChart) 
This chart is fully adjustable chart.js based simple line chart. It extends BaseChart component.

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
}
```

You can add and/or change default render options by passing your own in options object (like in example below).

#### Example
```html
<CSimpleLineChart style="height:100px"
                 :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                 label="Sales"
                 borderColor="success"
                 :options="{legend: {display: true}, elements: {line: {borderWidth: 4}}}"
/>
```
