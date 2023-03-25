### CWidgetStatsC

```jsx
import { CWidgetStatsC } from '@coreui/vue'
// or
import CWidgetStatsC from '@coreui/vue/src/components/widgets/CWidgetStatsC'
```

#### Props

| Prop name   | Description                                                                                                                              | Type           | Values                                                                                          | Default |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| **color**   | Sets the color context of the component to one of CoreUI’s themed colors.                                                                | string         | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -       |
| **inverse** | Colors have been inverted from their default dark shade.                                                                                 | boolean        | -                                                                                               | -       |
| **title**   | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`               | string         | -                                                                                               | -       |
| **value**   | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` | number\|string | -                                                                                               | 0       |

#### Slots

| Name | Description                  | Bindings |
| ---- | ---------------------------- | -------- |
| icon | Location for icon component. |          |
