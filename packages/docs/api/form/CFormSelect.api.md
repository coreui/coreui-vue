### CFormSelect

```jsx
import { CFormSelect } from '@coreui/vue'
// or
import CFormSelect from '@coreui/vue/src/components/form/CFormSelect'
```

#### Props

| Prop name                                                           | Description                                                                                                                                                                                                                                  | Type                 | Values         | Default |
| ------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------- | ------- |
| **feedback** <br><div class="badge bg-primary">4.3.0+</div>         | Provide valuable, actionable feedback.                                                                                                                                                                                                       | string               | -              | -       |
| **feedback-invalid** <br><div class="badge bg-primary">4.3.0+</div> | Provide valuable, actionable feedback.                                                                                                                                                                                                       | string               | -              | -       |
| **feedback-valid** <br><div class="badge bg-primary">4.3.0+</div>   | Provide valuable, actionable invalid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.                                                                                        | string               | -              | -       |
| **floating-label** <br><div class="badge bg-primary">4.3.0+</div>   | Provide valuable, actionable valid feedback when using standard HTML form validation which applied two CSS pseudo-classes, `:invalid` and `:valid`.                                                                                          | string               | -              | -       |
| **html-size**                                                       | Specifies the number of visible options in a drop-down list.                                                                                                                                                                                 | number               | -              | -       |
| **id**                                                              | The id global attribute defines an identifier (ID) that must be unique in the whole document.                                                                                                                                                | string               | -              | -       |
| **invalid**                                                         | Set component validation state to invalid.                                                                                                                                                                                                   | boolean              | -              | -       |
| **label** <br><div class="badge bg-primary">4.3.0+</div>            | Add a caption for a component.                                                                                                                                                                                                               | string               | -              | -       |
| **model-value**                                                     | The default name for a value passed using v-model.                                                                                                                                                                                           | string \| string[]   | -              | -       |
| **options**                                                         | Options list of the select component. Available keys: `label`, `value`, `disabled`.<br>Examples:<br>- `:options="[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]"`<br>- `:options="['js', 'html']"` | Option[] \| string[] | -              | -       |
| **size**                                                            | Size the component small or large.                                                                                                                                                                                                           | string               | `'sm' \| 'lg'` | -       |
| **text** <br><div class="badge bg-primary">4.3.0+</div>             | Add helper text to the component.                                                                                                                                                                                                            | string               | -              | -       |
| **tooltip-feedback** <br><div class="badge bg-primary">4.3.0+</div> | Display validation feedback in a styled tooltip.                                                                                                                                                                                             | boolean              | -              | -       |
| **valid**                                                           | Set component validation state to valid.                                                                                                                                                                                                     | boolean              | -              | -       |

#### Events

| Event name            | Description                                                                        | Properties |
| --------------------- | ---------------------------------------------------------------------------------- | ---------- |
| **change**            | Event occurs when when a user changes the selected option of a `<select>` element. |
| **update:modelValue** | Emit the new value whenever there’s a change event.                                |
