### CTabPanel

```jsx
import { CTabPanel } from '@coreui/vue'
// or
import CTabPanel from '@coreui/vue/src/components/tabs/CTabPanel'
```

#### Props

| Prop name      | Description                             | Type           | Values | Default |
| -------------- | --------------------------------------- | -------------- | ------ | ------- |
| **item-key**   | Item key.                               | number\|string | -      | -       |
| **transition** | Enable fade in and fade out transition. | boolean        | -      | true    |
| **visible**    | Toggle the visibility of component.     | boolean        | -      | false   |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **hide**   | Callback fired when the component requests to be hidden. |
| **show**   | Callback fired when the component requests to be shown.  |
