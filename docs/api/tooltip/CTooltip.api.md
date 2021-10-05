### CTooltip

```jsx
import { CTooltip } from '@coreui/vue'
// or
import CTooltip from '@coreui/vue/src/components/tooltip/CTooltip'
```

#### Props

| Prop name     | Description                                                                                                                                                          | Type               | Values                          | Default |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------- | ------- |
| **content**   | Content for your component. If you want to pass non-string value please use dedicated slot `<template #content>...</template>`                                       | string             | -                               | -       |
| **offset**    | Offset of the tooltip relative to its target.                                                                                                                        | array              | -                               | [0, 0]  |
| **placement** | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. | Placement          | -                               | 'top'   |
| **trigger**   | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.                                                  | string \| string[] | `'click'`, `'focus'`, `'hover'` | 'hover' |
| **visible**   | Toggle the visibility of tooltip component.                                                                                                                          | boolean            | -                               |         |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **hide**   | Callback fired when the component requests to be hidden. |
| **show**   | Callback fired when the component requests to be shown.  |
