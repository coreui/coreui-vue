### COffcanvas

```jsx
import { COffcanvas } from '@coreui/vue'
// or
import COffcanvas from '@coreui/vue/src/components/offcanvas/COffcanvas'
```

#### Props

| Prop name                                                     | Description                                                                                           | Type            | Values                                             | Default |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | --------------- | -------------------------------------------------- | ------- |
| **backdrop**                                                  | Apply a backdrop on body while offcanvas is open.                                                     | boolean\|string | `boolean \| 'static'`                              | true    |
| **keyboard**                                                  | Closes the offcanvas when escape key is pressed.                                                      | boolean         | -                                                  | true    |
| **placement**                                                 | Components placement, there’s no default placement.                                                   | string          | `'start'`, `'end'`, `'top'`, `'bottom'`            | -       |
| **responsive** <br><div class="badge bg-primary">4.7.0+</div> | Responsive offcanvas property hide content outside the viewport from a specified breakpoint and down. | boolean\|string | `boolean \| 'sm' \| 'md' \| 'lg' \| 'xl' \| 'xxl'` | true    |
| **scroll**                                                    | Allow body scrolling while offcanvas is open                                                          | boolean         | -                                                  | false   |
| **visible**                                                   | Toggle the visibility of offcanvas component.                                                         | boolean         | -                                                  | false   |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **hide**   | Callback fired when the component requests to be hidden. |
| **show**   | Callback fired when the component requests to be shown.  |
