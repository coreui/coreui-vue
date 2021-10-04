### CModal

#### Props

| Prop name      | Description                                                                                                                                                  | Type            | Values                                             | Default |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------- | ------- |
| **alignment**  | Align the modal in the center or top of the screen.                                                                                                          | string          | `'top'`, `'center'`                                | 'top'   |
| **backdrop**   | Apply a backdrop on body while offcanvas is open.                                                                                                            | boolean\|string | `'static'`                                         | true    |
| **className**  | A string of all className you want applied to the modal content component.<br>TODO: Consider if we should change this prop name to describe better its role. | string          | -                                                  | -       |
| **fullscreen** | Set modal to covers the entire user viewport                                                                                                                 | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'` | -       |
| **keyboard**   | Closes the modal when escape key is pressed.                                                                                                                 | boolean         | -                                                  | true    |
| **dismiss**    | Does the modal dialog itself scroll, or does the whole dialog scroll within the window.                                                                      | boolean         | -                                                  | false   |
| **scrollable** | Create a scrollable modal that allows scrolling the modal body.                                                                                              | boolean         | -                                                  |         |
| **size**       | Size the component small, large, or extra large.                                                                                                             | string          | `'sm'`, `'lg'`, `'xl'`                             | -       |
| **transition** | Remove animation to create modal that simply appear rather than fade in to view.                                                                             | boolean         | -                                                  | true    |
| **visible**    | Toggle the visibility of alert component.                                                                                                                    | boolean         | -                                                  |         |

#### Events

| Event name          | Description                                                                                                                                                             | Properties |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **close**           | Callback fired when the component requests to be closed.                                                                                                                |
| **close-prevented** | Callback fired when the component requests to be closed.                                                                                                                |
| **show**            | Callback fired when the modal is shown, its backdrop is static and a click outside the modal or an escape key press is performed with the keyboard option set to false. |

---
