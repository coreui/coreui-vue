### CPopover

```jsx
import { CPopover } from '@coreui/vue'
// or
import CPopover from '@coreui/vue/src/components/popover/CPopover'
```

#### Props

| Prop name                                                              | Description                                                                                                                                                                                                                                                     | Type                                     | Values                          | Default                                  |
| ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------- | ---------------------------------------- |
| **animation** <br><div class="badge bg-primary">4.9.0+</div>           | Apply a CSS fade transition to the popover.                                                                                                                                                                                                                     | boolean                                  | -                               | true                                     |
| **content**                                                            | Content for your component. If you want to pass non-string value please use dedicated slot `<template #content>...</template>`                                                                                                                                  | string                                   | -                               | -                                        |
| **delay** <br><div class="badge bg-primary">4.9.0+</div>               | The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: `{ 'show': 500, 'hide': 100 }`. | number \| { show: number; hide: number } | -                               | 0                                        |
| **fallback-placements** <br><div class="badge bg-primary">4.9.0+</div> | Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference.                                                                                                       | Placements \| Placements[]               | -                               | () => ['top', 'right', 'bottom', 'left'] |
| **offset**                                                             | Offset of the popover relative to its target.                                                                                                                                                                                                                   | array                                    | -                               | [0, 8]                                   |
| **placement**                                                          | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.                                                                                            | Placement                                | -                               | 'top'                                    |
| **title**                                                              | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`                                                                                                                                      | string                                   | -                               | -                                        |
| **trigger**                                                            | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.                                                                                                                                             | Triggers \| Triggers[]                   | `'click'`, `'focus'`, `'hover'` | 'click'                                  |
| **visible**                                                            | Toggle the visibility of popover component.                                                                                                                                                                                                                     | boolean                                  | -                               | -                                        |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **hide**   | Callback fired when the component requests to be hidden. |
| **show**   | Callback fired when the component requests to be shown.  |
