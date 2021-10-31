### CSpinner

```jsx
import { CSpinner } from '@coreui/vue'
// or
import CSpinner from '@coreui/vue/src/components/spinner/CSpinner'
```

#### Props

| Prop name                 | Description                                                                             | Type   | Values                                                                                          | Default      |
| ------------------------- | --------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------------- | ------------ |
| **color**                 | Sets the color context of the component to one of CoreUI’s themed colors.               | string | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -            |
| **component**             | Component used for the root node. Either a string to use a HTML element or a component. | string | -                                                                                               | 'div'        |
| **size**                  | Size the component small.                                                               | string | `'sm'`                                                                                          | -            |
| **variant**               | Set the button variant to an outlined button or a ghost button.                         | string | `'border'`, `'grow'`                                                                            | 'border'     |
| **visually-hidden-label** | Set visually hidden label for accessibility purposes.                                   | string | -                                                                                               | 'Loading...' |
