### CModal

#### Props

| Prop name               | Description                                                                                                                                                  | Type            | Values                                             | Default   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------- | --------- |
| <code>alignment</code>  | Align the modal in the center or top of the screen.<br/>`@default` 'top'                                                                                     | string          | `'top'`, `'center'`                                | 'top'     |
| <code>backdrop</code>   | Apply a backdrop on body while offcanvas is open.<br/>`@default` true                                                                                        | boolean\|string | `boolean`, `'static'`                              | true      |
| <code>className</code>  | A string of all className you want applied to the modal content component.<br>TODO: Consider if we should change this prop name to describe better its role. | string          | -                                                  | undefined |
| <code>fullscreen</code> | Set modal to covers the entire user viewport                                                                                                                 | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'` | undefined |
| <code>keyboard</code>   | Closes the modal when escape key is pressed.<br/>`@default` true                                                                                             | boolean         | -                                                  | true      |
| <code>dismiss</code>    | Does the modal dialog itself scroll, or does the whole dialog scroll within the window.                                                                      | boolean         | -                                                  | false     |
| <code>scrollable</code> | Create a scrollable modal that allows scrolling the modal body.                                                                                              | boolean         | -                                                  |           |
| <code>size</code>       | Size the component small, large, or extra large.                                                                                                             | string          | `'sm'`, `'lg'`, `'xl'`                             | undefined |
| <code>transition</code> | Remove animation to create modal that simply appear rather than fade in to view.                                                                             | boolean         | -                                                  | true      |
| <code>visible</code>    | Toggle the visibility of alert component.                                                                                                                    | boolean         | -                                                  |           |

#### Events

| Event name           | Properties | Description                                             |
| -------------------- | ---------- | ------------------------------------------------------- |
| <code>dismiss</code> |            | Event called before the dissmiss animation has started. |

---
