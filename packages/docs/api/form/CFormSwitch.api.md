### CFormSwitch

```jsx
import { CFormSwitch } from '@coreui/vue'
// or
import CFormSwitch from '@coreui/vue/src/components/form/CFormSwitch'
```

#### Props

| Prop name                                                  | Description                                                                                  | Type            | Values                  | Default    |
| ---------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------- | ----------------------- | ---------- |
| **id**                                                     | The id global attribute defines an identifier (ID) that must be unique in the whole document | string          | -                       | -          |
| **invalid**                                                | Set component validation state to invalid.                                                   | boolean         | -                       | -          |
| **label**                                                  | The element represents a caption for a component.                                            | string          | -                       | -          |
| **model-value**                                            | The default name for a value passed using v-model.                                           | boolean\|string | -                       | -          |
| **reverse** <br><div class="badge bg-primary">4.8.0+</div> | Put checkboxes or radios on the opposite side.                                               | boolean         | -                       | -          |
| **size**                                                   | Size the component large or extra large. Works only with `switch`.                           | string          | `'lg' \| 'xl'`          | -          |
| **type**                                                   | Specifies the type of component.                                                             | string          | `'checkbox'`, `'radio'` | 'checkbox' |
| **valid**                                                  | Set component validation state to valid.                                                     | boolean         | -                       | -          |

#### Events

| Event name            | Description                                           | Properties |
| --------------------- | ----------------------------------------------------- | ---------- |
| **change**            | Event occurs when the checked value has been changed. |
| **update:modelValue** | Emit the new value whenever there’s a change event.   |
