### CButton

```jsx
import { CButton } from '@coreui/vue'
// or
import CButton from '@coreui/vue/src/components/button/CButton'
```

#### Props

| Prop name     | Description                                                                                                                                                                   | Type    | Values                                                                                                                                                                                 | Default  |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| **active**    | Toggle the active state for the component.                                                                                                                                    | boolean | -                                                                                                                                                                                      | -        |
| **color**     | Sets the color context of the component to one of CoreUI’s themed colors.                                                                                                     | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`                                                                                        | -        |
| **component** | Component used for the root node. Either a string to use a HTML element or a component.                                                                                       | string  | -                                                                                                                                                                                      | 'button' |
| **disabled**  | Toggle the disabled state for the component.                                                                                                                                  | boolean | -                                                                                                                                                                                      | -        |
| **href**      | The href attribute specifies the URL of the page the link goes to.                                                                                                            | string  | -                                                                                                                                                                                      | -        |
| **shape**     | Select the shape of the component.                                                                                                                                            | string  | `'rounded'`, `'rounded-top'`, `'rounded-end'`, `'rounded-bottom'`, `'rounded-start'`, `'rounded-circle'`, `'rounded-pill'`, `'rounded-0'`, `'rounded-1'`, `'rounded-2'`, `'rounded-3'` | -        |
| **size**      | Size the component small or large.                                                                                                                                            | string  | `'sm'`, `'lg'`                                                                                                                                                                         | -        |
| **type**      | Specifies the type of button. Always specify the type attribute for the `<button>` element.<br>Different browsers may use different default types for the `<button>` element. | string  | `'button'`, `'submit'`, `'reset'`                                                                                                                                                      | 'button' |
| **variant**   | Set the button variant to an outlined button or a ghost button.                                                                                                               | string  | `'ghost'`, `'outline'`                                                                                                                                                                 | -        |

#### Events

| Event name | Description                                      | Properties |
| ---------- | ------------------------------------------------ | ---------- |
| **click**  | Event called when the user clicks on the button. |
