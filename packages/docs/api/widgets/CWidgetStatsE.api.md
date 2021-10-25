### CWidgetStatsE

```jsx
import { CWidgetStatsE } from '@coreui/vue'
// or
import CWidgetStatsE from '@coreui/vue/src/components/widgets/CWidgetStatsE'
```

#### Props

| Prop name | Description                                                                                                                              | Type           | Values | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ | ------- |
| **title** | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`               | string         | -      | -       |
| **value** | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` | number\|string | -      | 0       |

#### Slots

| Name  | Description                   | Bindings |
| ----- | ----------------------------- | -------- |
| chart | Location for chart component. |          |
