### CWidgetStatsC

#### Props

| Prop name            | Description                                                                                                                              | Type           | Values                                                                                          | Default |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- | ------- |
| <code>color</code>   | Sets the color context of the component to one of CoreUI’s themed colors.                                                                | string         | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` |         |
| <code>inverse</code> | Colors have been inverted from their default dark shade.                                                                                 | boolean        | -                                                                                               | -       |
| <code>title</code>   | Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`               | string         | -                                                                                               | -       |
| <code>value</code>   | Value for your component. If you want to pass non-string or non-number value please use dedicated slot `<template #value>...</template>` | number\|string | -                                                                                               | 0       |

#### Slots

| Name | Description                  | Bindings |
| ---- | ---------------------------- | -------- |
| icon | Location for icon component. |          |

---
