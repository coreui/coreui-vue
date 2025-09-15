### CModal

```jsx
import { CModal } from '@coreui/vue'
// or
import CModal from '@coreui/vue/src/components/modal/CModal'
```

#### Props

| Prop name                                                    | Description                                                                                                                                        | Type                                         | Values                                             | Default |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------------------------------------- | ------- |
| **alignment**                                                | Align the modal in the center or top of the screen.                                                                                                | string                                       | `'top'`, `'center'`                                | 'top'   |
| **backdrop**                                                 | Apply a backdrop on body while modal is open.                                                                                                      | boolean\|string                              | `boolean \| 'static'`                              | true    |
| **container** <br><div class="badge bg-primary">5.3.0+</div> | Appends the vue popover to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`. | HTMLElement \| (() => HTMLElement) \| string | -                                                  | 'body'  |
| **content-class-name**                                       | A string of all className you want applied to the modal content component.                                                                         | string                                       | -                                                  | -       |
| **focus** <br><div class="badge bg-primary">5.0.0+</div>     | Puts the focus on the modal when shown.                                                                                                            | boolean                                      | -                                                  | true    |
| **fullscreen**                                               | Set modal to covers the entire user viewport                                                                                                       | boolean\|string                              | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'` | -       |
| **keyboard**                                                 | Closes the modal when escape key is pressed.                                                                                                       | boolean                                      | -                                                  | true    |
| **scrollable**                                               | Create a scrollable modal that allows scrolling the modal body.                                                                                    | boolean                                      | -                                                  | -       |
| **size**                                                     | Size the component small, large, or extra large.                                                                                                   | string                                       | `'sm'`, `'lg'`, `'xl'`                             | -       |
| **teleport** <br><div class="badge bg-primary">5.3.0+</div>  | Generates modal using Teleport.                                                                                                                    | boolean                                      | -                                                  | false   |
| **transition**                                               | Remove animation to create modal that simply appear rather than fade in to view.                                                                   | boolean                                      | -                                                  | true    |
| **unmount-on-close**                                         | By default the component is unmounted after close animation, if you want to keep the component mounted set this property to false.                 | boolean                                      | -                                                  | true    |
| **visible**                                                  | Toggle the visibility of alert component.                                                                                                          | boolean                                      | -                                                  | -       |

#### Events

| Event name          | Description                                                                                                                                                             | Properties |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **close**           | Callback fired when the component requests to be closed.                                                                                                                |
| **close-prevented** | Callback fired when the component requests to be closed.                                                                                                                |
| **show**            | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |
