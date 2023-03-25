### CListGroupItem

```jsx
import { CListGroupItem } from '@coreui/vue'
// or
import CListGroupItem from '@coreui/vue/src/components/list-group/CListGroupItem'
```

#### Props

| Prop name     | Description                                                                             | Type    | Values                                                                                                    | Default |
| ------------- | --------------------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------- |
| **active**    | Toggle the active state for the component.                                              | boolean | -                                                                                                         | -       |
| **color**     | Sets the color context of the component to one of CoreUI’s themed colors.               | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` | -       |
| **disabled**  | Toggle the disabled state for the component.                                            | boolean | -                                                                                                         | -       |
| **component** | Component used for the root node. Either a string to use a HTML element or a component. | string  | -                                                                                                         | 'li'    |
