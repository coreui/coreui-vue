### CBadge

```jsx
import { CBadge } from '@coreui/vue'
// or
import CBadge from '@coreui/vue/src/components/badge/CBadge'
```

#### Props

| Prop name      | Description                                                                             | Type   | Values                                                                                                                                                                                                                                                    | Default |
| -------------- | --------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- |
| **color**      | Sets the color context of the component to one of CoreUI’s themed colors.               | string | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`                                                                                                                                                           | -       |
| **component**  | Component used for the root node. Either a string to use a HTML element or a component. | string | -                                                                                                                                                                                                                                                         | 'span'  |
| **position**   | Position badge in one of the corners of a link or button.                               | string | `'top-start'`, `'top-end'`, `'bottom-end'`, `'bottom-start'`                                                                                                                                                                                              | -       |
| **shape**      | Select the shape of the component.                                                      | string | `'rounded'`, `'rounded-top'`, `'rounded-end'`, `'rounded-bottom'`, `'rounded-start'`, `'rounded-circle'`, `'rounded-pill'`, `'rounded-0'`, `'rounded-1'`, `'rounded-2'`, `'rounded-3'`                                                                    | -       |
| **size**       | Size the component small.                                                               | string | `'sm'`                                                                                                                                                                                                                                                    | -       |
| **text-color** | Sets the text color of the component to one of CoreUI’s themed colors.                  | string | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `'white'`, `'muted'`, `'high-emphasis'`, `'medium-emphasis'`, `'disabled'`, `'high-emphasis-inverse'`, `'medium-emphasis-inverse'`, `'disabled-inverse'` | -       |
