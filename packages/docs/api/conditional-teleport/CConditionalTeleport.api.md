### CConditionalTeleport

```jsx
import { CConditionalTeleport } from '@coreui/vue'
// or
import CConditionalTeleport from '@coreui/vue/src/components/conditional-teleport/CConditionalTeleport'
```

#### Props

| Prop name                                                    | Description                                                                                     | Type                                         | Values | Default |
| ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | -------------------------------------------- | ------ | ------- |
| **container** <br><div class="badge bg-primary">5.0.0+</div> | An HTML element or function that returns a single element, with `document.body` as the default. | HTMLElement \| (() => HTMLElement) \| string | -      | 'body'  |
| **teleport**                                                 | Render some children into a different part of the DOM                                           | boolean                                      | -      | true    |
