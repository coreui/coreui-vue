### CHeader

```jsx
import { CHeader } from '@coreui/vue'
// or
import CHeader from '@coreui/vue/src/components/header/CHeader'
```

#### Props

| Prop name     | Description                                                                             | Type            | Values                                                        | Default |
| ------------- | --------------------------------------------------------------------------------------- | --------------- | ------------------------------------------------------------- | ------- |
| **as**        | Component used for the root node. Either a string to use a HTML element or a component. | string          | -                                                             | 'div'   |
| **container** | Defines optional container wrapping children elements.                                  | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`, `'fluid'` | -       |
| **position**  | Place header in non-static positions.                                                   | string          | `'fixed'`, `'sticky'`                                         | -       |
