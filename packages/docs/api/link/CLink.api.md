### CLink

```jsx
import { CLink } from '@coreui/vue'
// or
import CLink from '@coreui/vue/src/components/link/CLink'
```

#### Props

| Prop name     | Description                                                                             | Type    | Values | Default |
| ------------- | --------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| **active**    | Toggle the active state for the component.                                              | boolean | -      | -       |
| **component** | Component used for the root node. Either a string to use a HTML element or a component. | string  | -      | 'a'     |
| **disabled**  | Toggle the disabled state for the component.                                            | boolean | -      | -       |
| **href**      | The href attribute specifies the URL of the page the link goes to.                      | string  | -      | -       |

#### Events

| Event name | Description                                         | Properties |
| ---------- | --------------------------------------------------- | ---------- |
| **click**  | Event called when the user clicks on the component. |
