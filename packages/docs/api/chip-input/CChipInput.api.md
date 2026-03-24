### CChipInput

```jsx
import { CChipInput } from '@coreui/vue'
// or
import CChipInput from '@coreui/vue/src/components/chip-input/CChipInput'
```

#### Props

| Prop name           | Description                                                                                                                    | Type           | Values         | Default  |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------ | -------------- | -------------- | -------- |
| **chip-class-name** | Adds custom classes to chips rendered by the component. Accepts a static className or a resolver function based on chip value. | ChipClassName  | -              | -        |
| **create-on-blur**  | Creates a new chip when the component loses focus with a pending value.                                                        | boolean        | -              | true     |
| **default-value**   | Sets the initial uncontrolled values rendered by the component.                                                                | string[]       | -              | () => [] |
| **disabled**        | Toggle the disabled state for the component.                                                                                   | boolean        | -              | -        |
| **id**              | Sets the `id` of the internal text input rendered by the component.                                                            | string         | -              | -        |
| **label**           | Renders an inline label inside the component container.                                                                        | string\|object | -              | -        |
| **max-chips**       | Sets the maximum number of chips that can be created in the component.                                                         | number         | -              | null     |
| **model-value**     | The default name for a value passed using v-model.                                                                             | string[]       | -              | -        |
| **name**            | Sets the name of the hidden input used by the component for form submission.                                                   | string         | -              | -        |
| **placeholder**     | Sets placeholder text for the internal input of the component.                                                                 | string         | -              | ''       |
| **read-only**       | Toggle the readonly state for the component.                                                                                   | boolean        | -              | -        |
| **removable**       | Displays remove buttons on chips managed by the component.                                                                     | boolean        | -              | true     |
| **selectable**      | Enables chip selection behavior in the component.                                                                              | boolean        | -              | -        |
| **separator**       | Sets the separator character used to create chips while typing or pasting in the component.                                    | string         | -              | ','      |
| **size**            | Size the component small or large.                                                                                             | string         | `'sm'`, `'lg'` | -        |

#### Events

| Event name            | Description                                              | Properties |
| --------------------- | -------------------------------------------------------- | ---------- |
| **add**               | Event occurs when the component adds a new chip.         |
| **change**            | Event occurs when the value list changes.                |
| **input**             | Event occurs when the internal text input value changes. |
| **remove**            | Event occurs when the component removes a chip.          |
| **select**            | Event occurs when the selected chip values change.       |
| **update:modelValue** | Emit the new value whenever there's a change.            |
