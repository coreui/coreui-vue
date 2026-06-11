### CNavGroup

```jsx
import { CNavGroup } from '@coreui/vue'
// or
import CNavGroup from '@coreui/vue/src/components/nav/CNavGroup'
```

#### Props

| Prop name   | Description                                                                                                                                                  | Type    | Values | Default |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------- | ------ | ------- |
| **as**      | Component used for the root node. Either a string to use a HTML element or a component.                                                                      | string  | -      | 'li'    |
| **compact** | Make nav group more compact by cutting all `padding` in half.                                                                                                | boolean | -      | -       |
| **visible** | Show nav group items. Acts as the initial state on its own, or as the controlled value<br>when paired with a `v-model:visible` / `@update:visible` listener. | boolean | -      | -       |

#### Events

| Event name         | Description | Properties |
| ------------------ | ----------- | ---------- |
| **update:visible** |             |
| **visible-change** |             |
