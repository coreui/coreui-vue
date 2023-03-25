### CFormTextarea

```jsx
import { CFormTextarea } from '@coreui/vue'
// or
import CFormTextarea from '@coreui/vue/src/components/form/CFormTextarea'
```

#### Props

| Prop name                                                           | Description                                                                                                                                                                 | Type    | Values | Default |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| **disabled**                                                        | Toggle the disabled state for the component.                                                                                                                                | boolean | -      | -       |
| **feedback** <br><div class="badge bg-primary">4.3.0+</div>         | Provide valuable, actionable feedback.                                                                                                                                      | string  | -      | -       |
| **feedback-invalid** <br><div class="badge bg-primary">4.3.0+</div> | Provide valuable, actionable feedback.                                                                                                                                      | string  | -      | -       |
| **feedback-valid** <br><div class="badge bg-primary">4.3.0+</div>   | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.                       | string  | -      | -       |
| **floating-label** <br><div class="badge bg-primary">4.3.0+</div>   | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.                         | string  | -      | -       |
| **id**                                                              | The id global attribute defines an identifier (ID) that must be unique in the whole document.                                                                               | string  | -      | -       |
| **invalid**                                                         | Set component validation state to invalid.                                                                                                                                  | boolean | -      | -       |
| **label** <br><div class="badge bg-primary">4.3.0+</div>            | Add a caption for a component.                                                                                                                                              | string  | -      | -       |
| **model-value**                                                     | The default name for a value passed using v-model.                                                                                                                          | string  | -      | -       |
| **plain-text**                                                      | Render the component styled as plain text. Removes the default form field styling and preserve the correct margin and padding. Recommend to use only along side `readonly`. | boolean | -      | -       |
| **readonly**                                                        | Toggle the readonly state for the component.                                                                                                                                | boolean | -      | -       |
| **text** <br><div class="badge bg-primary">4.3.0+</div>             | Add helper text to the component.                                                                                                                                           | string  | -      | -       |
| **tooltip-feedback** <br><div class="badge bg-primary">4.3.0+</div> | Display validation feedback in a styled tooltip.                                                                                                                            | boolean | -      | -       |
| **valid**                                                           | Set component validation state to valid.                                                                                                                                    | boolean | -      | -       |

#### Events

| Event name            | Description                                                                    | Properties |
| --------------------- | ------------------------------------------------------------------------------ | ---------- |
| **change**            | Event occurs when the element loses focus, after the content has been changed. |
| **input**             | Event occurs immediately after the value of a component has changed.           |
| **update:modelValue** | Emit the new value whenever there’s an input or change event.                  |
