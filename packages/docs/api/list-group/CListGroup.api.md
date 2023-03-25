### CListGroup

```jsx
import { CListGroup } from '@coreui/vue'
// or
import CListGroup from '@coreui/vue/src/components/list-group/CListGroup'
```

#### Props

| Prop name     | Description                                                                                                             | Type    | Values                                                                                                             | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------ | ------- |
| **component** | Component used for the root node. Either a string to use a HTML element or a component.                                 | string  | -                                                                                                                  | 'ul'    |
| **flush**     | Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`) | boolean | -                                                                                                                  | -       |
| **layout**    | Specify a layout type.                                                                                                  | string  | `'horizontal'`, `'horizontal-sm'`, `'horizontal-md'`, `'horizontal-lg'`, `'horizontal-xl'`, `'horizontal-xxl'`, `` | -       |
