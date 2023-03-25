### CPlaceholder

```jsx
import { CPlaceholder } from '@coreui/vue'
// or
import CPlaceholder from '@coreui/vue/src/components/placeholder/CPlaceholder'
```

#### Props

| Prop name     | Description                                                                             | Type   | Values                                                                                          | Default |
| ------------- | --------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- | ------- |
| **animation** | Set animation type to better convey the perception of something being actively loaded.  | string | `'glow'`, `'wave'`                                                                              | -       |
| **color**     | Sets the color context of the component to one of CoreUI’s themed colors.               | string | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -       |
| **component** | Component used for the root node. Either a string to use a HTML element or a component. | string | -                                                                                               | 'span'  |
| **size**      | Size the component extra small, small, or large.                                        | string | `'xs'`, `'sm'`, `'lg'`                                                                          | -       |
| **xs**        | The number of columns on extra small devices (<576px).                                  | number | -                                                                                               | -       |
| **sm**        | The number of columns on small devices (<768px).                                        | number | -                                                                                               | -       |
| **md**        | The number of columns on medium devices (<992px).                                       | number | -                                                                                               | -       |
| **lg**        | The number of columns on large devices (<1200px).                                       | number | -                                                                                               | -       |
| **xl**        | The number of columns on X-Large devices (<1400px).                                     | number | -                                                                                               | -       |
| **xxl**       | The number of columns on XX-Large devices (≥1400px).                                    | number | -                                                                                               | -       |
