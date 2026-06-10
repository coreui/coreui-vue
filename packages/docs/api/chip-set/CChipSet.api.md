### CChipSet

```jsx
import { CChipSet } from '@coreui/vue'
// or
import CChipSet from '@coreui/vue/src/components/chip-set/CChipSet'
```

#### Props

| Prop name          | Description                                                                             | Type           | Values               | Default    |
| ------------------ | --------------------------------------------------------------------------------------- | -------------- | -------------------- | ---------- |
| **as**             | Component used for the root node. Either a string to use a HTML element or a component. | string         | -                    | 'div'      |
| **disabled**       | Disables every chip rendered by the component.                                          | boolean        | -                    | -          |
| **filter**         | Turns the chips into filter chips, each showing a leading check icon while selected.    | boolean        | -                    | -          |
| **model-value**    | The selected chip values passed using v-model.                                          | string[]       | -                    | -          |
| **removable**      | Displays a remove button on every chip rendered by the component.                       | boolean        | -                    | -          |
| **remove-icon**    | Replaces the default remove icon on every chip with a custom icon node.                 | string\|object | -                    | -          |
| **selectable**     | Enables selection behavior for the chips rendered by the component.                     | boolean        | -                    | -          |
| **selected-icon**  | Replaces the default selected icon shown by filter chips with a custom icon node.       | string\|object | -                    | -          |
| **selection-mode** | Sets how many chips can be selected at once.                                            | string         | `single`, `multiple` | 'multiple' |

#### Events

| Event name            | Description                                                                                                                           | Properties |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **change**            | Event occurs when the selected chip values change.                                                                                    |
| **remove**            | Event occurs when a chip requests removal. The chips are controlled by the slot content, so drop the chip from your data in response. |
| **update:modelValue** | Emit the new selected values whenever the selection changes.                                                                          |
