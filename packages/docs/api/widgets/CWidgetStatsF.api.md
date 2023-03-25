### CWidgetStatsF

```jsx
import { CWidgetStatsF } from '@coreui/vue'
// or
import CWidgetStatsF from '@coreui/vue/src/components/widgets/CWidgetStatsF'
```

#### Props

| Prop name   | Description                                                                                                                              | Type           | Values                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| **color**   | Sets the color context of the component to one of CoreUI’s themed colors.                                                                | string         | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -       |
| **padding** | Set padding of your component.                                                                                                           | boolean        | -                                                                                               | true    |
| **title**   | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`               | string         | -                                                                                               | -       |
| **text**    | Helper text for your component. If you want to pass non-string value please use dedicated slot `<template #text>...</template>`          | string         | -                                                                                               | -       |
| **value**   | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` | number\|string | -                                                                                               | 0       |

#### Slots

| Name | Description                  | Bindings |
| ---- | ---------------------------- | -------- |
| icon | Location for icon component. |          |
