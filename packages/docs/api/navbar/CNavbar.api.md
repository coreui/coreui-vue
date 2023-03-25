### CNavbar

```jsx
import { CNavbar } from '@coreui/vue'
// or
import CNavbar from '@coreui/vue/src/components/navbar/CNavbar'
```

#### Props

| Prop name        | Description                                                                             | Type            | Values                                                                                                    | Default |
| ---------------- | --------------------------------------------------------------------------------------- | --------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| **color**        | Sets the color context of the component to one of CoreUI’s themed colors.               | string          | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` | -       |
| **color-scheme** | Sets if the color of text should be colored for a light or dark dark background.        | string          | `'dark'`, `'light'`                                                                                       | -       |
| **component**    | Component used for the root node. Either a string to use a HTML element or a component. | string          | -                                                                                                         | 'nav'   |
| **container**    | Defines optional container wrapping children elements.                                  | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`, `'fluid'`                                             | -       |
| **expand**       | Defines the responsive breakpoint to determine when content collapses.                  | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`                                                        | -       |
| **placement**    | Place component in non-static positions.                                                | string          | `'fixed-top'`, `'fixed-bottom'`, `'sticky-top'`                                                           | -       |
