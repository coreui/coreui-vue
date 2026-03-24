### CChip

```jsx
import { CChip } from '@coreui/vue'
// or
import CChip from '@coreui/vue/src/components/chip/CChip'
```

#### Props

| Prop name             | Description                                                                             | Type           | Values                                                                                          | Default  |
| --------------------- | --------------------------------------------------------------------------------------- | -------------- | ----------------------------------------------------------------------------------------------- | -------- |
| **active**            | Toggle the active state for the component.                                              | boolean        | -                                                                                               | -        |
| **aria-remove-label** | Provides an accessible label for the remove button.                                     | string         | -                                                                                               | 'Remove' |
| **as**                | Component used for the root node. Either a string to use a HTML element or a component. | string         | -                                                                                               | 'span'   |
| **clickable**         | Enables interactive hover styling and pointer cursor.                                   | boolean        | -                                                                                               | -        |
| **color**             | Sets the color context of the component to one of CoreUI's themed colors.               | string         | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -        |
| **disabled**          | Toggle the disabled state for the component.                                            | boolean        | -                                                                                               | -        |
| **removable**         | Displays a remove button inside the component.                                          | boolean        | -                                                                                               | -        |
| **remove-icon**       | Replaces the default remove icon with a custom icon node.                               | string\|object | -                                                                                               | -        |
| **selectable**        | Enables selectable behavior and keyboard toggle support.                                | boolean        | -                                                                                               | -        |
| **selected**          | Controls the selected state of a selectable component.                                  | boolean        | -                                                                                               | -        |
| **size**              | Size the component small or large.                                                      | string         | `'sm'`, `'lg'`                                                                                  | -        |
| **variant**           | Set the button variant to an outlined style.                                            | string         | `'outline'`                                                                                     | -        |

#### Events

| Event name          | Description                                         | Properties |
| ------------------- | --------------------------------------------------- | ---------- |
| **click**           | Event called when the user clicks on the component. |
| **deselect**        | Event called when the component becomes deselected. |
| **keydown**         | Event called when the user presses a key.           |
| **remove**          | Event called when the component requests removal.   |
| **select**          | Event called when the component becomes selected.   |
| **selected-change** | Event called when the selected state changes.       |
