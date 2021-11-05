### CFormSelect

```jsx
import { CFormSelect } from '@coreui/vue'
// or
import CFormSelect from '@coreui/vue/src/components/form/CFormSelect'
```

#### Props

| Prop name       | Description                                                                                                                                                                                                                                  | Type                 | Values         | Default |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------------- | ------- |
| **html-size**   | Specifies the number of visible options in a drop-down list.                                                                                                                                                                                 | number               | -              | -       |
| **invalid**     | Set component validation state to invalid.                                                                                                                                                                                                   | boolean              | -              |         |
| **model-value** | The default name for a value passed using v-model.                                                                                                                                                                                           | string               | -              | -       |
| **options**     | Options list of the select component. Available keys: `label`, `value`, `disabled`.<br>Examples:<br>- `:options="[{ value: 'js', label: 'JavaScript' }, { value: 'html', label: 'HTML', disabled: true }]"`<br>- `:options="['js', 'html']"` | Option[] \| string[] | -              | -       |
| **size**        | Size the component small or large.                                                                                                                                                                                                           | string               | `'sm' \| 'lg'` | -       |
| **valid**       | Set component validation state to valid.                                                                                                                                                                                                     | boolean              | -              |         |

#### Events

| Event name             | Description                                                                        | Properties |
| ---------------------- | ---------------------------------------------------------------------------------- | ---------- |
| **change**             | Event occurs when when a user changes the selected option of a `<select>` element. |
| **update-model-value** | Emit the new value whenever there’s a change event.                                |
