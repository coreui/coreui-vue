### Simple bar chart (CSimpleBarChart)
This chart is fully adjustable chart.js based simple bar chart. It extends BaseChart component.

prop | default
--- | ---
data  | `[0, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]`
label  | `'label:string'`
borderColor  | `'rgba(255,255,255,255,.55)'`
color  |  `'rgba(0,0,0,.2)'`
labels  | `[]`
options  | `{}`

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
    xAxes: [{
      display: false,
      categoryPercentage: 1,
      barPercentage: 0.5
    }],
    yAxes: [{
      display: false
    }]
  }
}
```

You can add and/or change default render options by passing your own in options object (like in example below).

#### Example
```html
<CSimpleBarChart style="height:100px"
                 :data="[10, 22, 34, 46, 58, 70, 46, 23, 45, 78, 34, 12]"
                 label="Sales"
                 :options="{legend: {display: true}}"
/>
```
