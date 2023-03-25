### CWidgetStatsD

```jsx
import { CWidgetStatsD } from '@coreui/vue'
// or
import CWidgetStatsD from '@coreui/vue/src/components/widgets/CWidgetStatsD'
```

#### Props

| Prop name  | Description                                                               | Type    | Values                                                                                          | Default  |
| ---------- | ------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- | -------- |
| **color**  | Sets the color context of the component to one of CoreUI’s themed colors. | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -        |
| **values** | Values and titles for your component.                                     | Value[] | -                                                                                               | () => [] |

#### Slots

| Name  | Description                                     | Bindings |
| ----- | ----------------------------------------------- | -------- |
| chart | Location for chart component.                   |          |
| icon  | Location for icon component, ex. `<CDropdown>`. |          |
