### CFormFeedback

```jsx
import { CFormFeedback } from '@coreui/vue'
// or
import CFormFeedback from '@coreui/vue/src/components/form/CFormFeedback'
```

#### Props

| Prop name     | Description                                                                             | Type    | Values | Default |
| ------------- | --------------------------------------------------------------------------------------- | ------- | ------ | ------- |
| **component** | Component used for the root node. Either a string to use a HTML element or a component. | string  | -      | 'div'   |
| **invalid**   | Method called immediately after the `value` prop changes.                               | boolean | -      | -       |
| **tooltip**   | If your form layout allows it, you can display validation feedback in a styled tooltip. | boolean | -      | -       |
| **valid**     | Set component validation state to valid.                                                | boolean | -      | -       |
