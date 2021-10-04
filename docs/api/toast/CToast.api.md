### CToast

#### Props

| Prop name                | Description                                                               | Type    | Values                                                                                                    | Default |
| ------------------------ | ------------------------------------------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------- | ------- |
| <code>autohide</code>    | Auto hide the toast.                                                      | boolean | -                                                                                                         | true    |
| <code>color</code>       | Sets the color context of the component to one of CoreUI’s themed colors. | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` |         |
| <code>delay</code>       | Delay hiding the toast (ms).                                              | number  | -                                                                                                         | 5000    |
| <code>dismissible</code> | Optionally add a close button to component and allow it to self dismiss.  | boolean | -                                                                                                         | true    |
| <code>title</code>       | Title node for your component.                                            | string  | -                                                                                                         | -       |
| <code>visible</code>     | Toggle the visibility of component.                                       | boolean | -                                                                                                         | true    |

#### Events

| Event name         | Properties | Description                                              |
| ------------------ | ---------- | -------------------------------------------------------- |
| <code>close</code> |            | Callback fired when the component requests to be closed. |
| <code>show</code>  |            | Callback fired when the component requests to be shown.  |

---
