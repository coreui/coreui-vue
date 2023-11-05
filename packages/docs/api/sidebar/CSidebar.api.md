### CSidebar

```jsx
import { CSidebar } from '@coreui/vue'
// or
import CSidebar from '@coreui/vue/src/components/sidebar/CSidebar'
```

#### Props

| Prop name        | Description                                                                      | Type    | Values             | Default |
| ---------------- | -------------------------------------------------------------------------------- | ------- | ------------------ | ------- |
| **color-scheme** | Sets if the color of text should be colored for a light or dark dark background. | string  | `'dark'`, `light'` | -       |
| **narrow**       | Make sidebar narrow.                                                             | boolean | -                  | -       |
| **overlaid**     | Set sidebar to overlaid variant.                                                 | boolean | -                  | -       |
| **placement**    | Components placement, there’s no default placement.                              | string  | `'start'`, `'end'` | -       |
| **position**     | Place sidebar in non-static positions.                                           | string  | -                  | -       |
| **size**         | Size the component small, large, or extra large.                                 | string  | -                  | -       |
| **unfoldable**   | Expand narrowed sidebar on hover.                                                | boolean | -                  | -       |
| **visible**      | Toggle the visibility of sidebar component.                                      | boolean | -                  | -       |

#### Events

| Event name         | Description                                              | Properties |
| ------------------ | -------------------------------------------------------- | ---------- |
| **hide**           | Callback fired when the component requests to be hidden. |
| **show**           | Callback fired when the component requests to be shown.  |
| **visible-change** | Event emitted after visibility of component changed.     |
