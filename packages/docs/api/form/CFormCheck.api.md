### CFormCheck

```jsx
import { CFormCheck } from '@coreui/vue'
// or
import CFormCheck from '@coreui/vue/src/components/form/CFormCheck'
```

#### Props

| Prop name                                                           | Description                                                                                                                                                 | Type                   | Values                  | Default    |
| ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ----------------------- | ---------- |
| **button**                                                          | Create button-like checkboxes and radio buttons.<br/>`@see` http://coreui.io/vue/docs/components/button.html                                                | object                 | -                       | -          |
| **false-value** <br><div class="badge bg-primary">4.10.0+</div>     | Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `false` state. | string                 | -                       | -          |
| **feedback** <br><div class="badge bg-primary">4.3.0+</div>         | Provide valuable, actionable feedback.                                                                                                                      | string                 | -                       | -          |
| **feedback-invalid** <br><div class="badge bg-primary">4.3.0+</div> | Provide valuable, actionable feedback.                                                                                                                      | string                 | -                       | -          |
| **feedback-valid** <br><div class="badge bg-primary">4.3.0+</div>   | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.       | string                 | -                       | -          |
| **hit-area**                                                        | Sets hit area to the full area of the component.                                                                                                            | string                 | -                       | -          |
| **id**                                                              | The id global attribute defines an identifier (ID) that must be unique in the whole document.                                                               | string                 | -                       | -          |
| **indeterminate**                                                   | Input Checkbox indeterminate Property                                                                                                                       | boolean                | -                       | -          |
| **inline**                                                          | Group checkboxes or radios on the same horizontal row by adding.                                                                                            | boolean                | -                       | -          |
| **invalid**                                                         | Set component validation state to invalid.                                                                                                                  | boolean                | -                       | -          |
| **label**                                                           | The element represents a caption for a component.                                                                                                           | string                 | -                       | -          |
| **model-value**                                                     | The default name for a value passed using v-model.                                                                                                          | array\|boolean\|string | -                       | -          |
| **reverse** <br><div class="badge bg-primary">4.8.0+</div>          | Put checkboxes or radios on the opposite side.                                                                                                              | boolean                | -                       | -          |
| **tooltip-feedback** <br><div class="badge bg-primary">4.3.0+</div> | Display validation feedback in a styled tooltip.                                                                                                            | boolean                | -                       | -          |
| **true-value** <br><div class="badge bg-primary">4.10.0+</div>      | Use in conjunction with the v-model directive to specify the value that should be assigned to the bound variable when the checkbox is in the `true` state.  | string                 | -                       | -          |
| **type**                                                            | Specifies the type of component.                                                                                                                            | string                 | `'checkbox'`, `'radio'` | 'checkbox' |
| **valid**                                                           | Set component validation state to valid.                                                                                                                    | boolean                | -                       | -          |
| **value**                                                           | The value attribute of component.                                                                                                                           | string                 | -                       | -          |

#### Events

| Event name            | Description                                           | Properties |
| --------------------- | ----------------------------------------------------- | ---------- |
| **change**            | Event occurs when the checked value has been changed. |
| **update:modelValue** | Emit the new value whenever there’s a change event.   |
