### CToast

```jsx
import { CToast } from '@coreui/vue'
// or
import CToast from '@coreui/vue/src/components/toast/CToast'
```

#### Props

| Prop name       | Description                                                               | Type    | Values                                                                                                    | Default |
| --------------- | ------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------- |
| **autohide**    | Auto hide the toast.                                                      | boolean | -                                                                                                         | true    |
| **color**       | Sets the color context of the component to one of CoreUI’s themed colors. | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` | -       |
| **delay**       | Delay hiding the toast (ms).                                              | number  | -                                                                                                         | 5000    |
| **dismissible** | Optionally add a close button to component and allow it to self dismiss.  | boolean | -                                                                                                         | true    |
| **index**       | index of the component.                                                   | number  | -                                                                                                         | -       |
| **title**       | Title node for your component.                                            | string  | -                                                                                                         | -       |
| **visible**     | Toggle the visibility of component.                                       | boolean | -                                                                                                         | -       |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **close**  | Callback fired when the component requests to be closed. |
| **show**   | Callback fired when the component requests to be shown.  |
