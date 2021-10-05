### CWidgetStatsA

```jsx
import { CWidgetStatsA } from '@coreui/vue'
// or
import CWidgetStatsA from '@coreui/vue/src/components/widgets/CWidgetStatsA'
```

#### Props

| Prop name | Description                                                                                                                              | Type           | Values | Default |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ------ | ------- |
| **title** | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`               | string         | -      | -       |
| **value** | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` | number\|string | -      | 0       |

#### Slots

| Name   | Description                                       | Bindings |
| ------ | ------------------------------------------------- | -------- |
| chart  | Location for chart component.                     |          |
| action | Location for action component, ex. `<CDropdown>`. |          |
