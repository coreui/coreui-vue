### CFormRange

```jsx
import { CFormRange } from '@coreui/vue'
// or
import CFormRange from '@coreui/vue/src/components/form/CFormRange'
```

#### Props

| Prop name                                                | Description                                                      | Type    | Values | Default |
| -------------------------------------------------------- | ---------------------------------------------------------------- | ------- | ------ | ------- |
| **disabled**                                             | Toggle the disabled state for the component.                     | boolean | -      | -       |
| **label** <br><div class="badge bg-primary">4.3.0+</div> | Add a caption for a component.                                   | string  | -      | -       |
| **max**                                                  | Specifies the maximum value for the component.                   | number  | -      | -       |
| **min**                                                  | Specifies the minimum value for the component.                   | number  | -      | -       |
| **model-value**                                          | The default name for a value passed using v-model.               | string  | -      | -       |
| **readonly**                                             | Toggle the readonly state for the component.                     | boolean | -      | -       |
| **steps**                                                | Specifies the interval between legal numbers in the component.   | number  | -      | -       |
| **value**                                                | The `value` attribute of component.<br/>`@controllable` onChange | number  | -      | -       |

#### Events

| Event name            | Description                                         | Properties |
| --------------------- | --------------------------------------------------- | ---------- |
| **change**            | Event occurs when the value has been changed.       |
| **update:modelValue** | Emit the new value whenever there’s a change event. |
