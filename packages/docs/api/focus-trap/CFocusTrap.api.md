### CFocusTrap

```jsx
import { CFocusTrap } from '@coreui/vue'
// or
import CFocusTrap from '@coreui/vue/src/components/focus-trap/CFocusTrap'
```

#### Props

| Prop name                | Description                                                                                                                                                                                                                                                                                                                                                  | Type                     | Values | Default |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ | ------ | ------- |
| **active**               | Controls whether the focus trap is active or inactive.<br>When `true`, focus will be trapped within the child element.<br>When `false`, normal focus behavior is restored.                                                                                                                                                                                   | boolean                  | -      | true    |
| **additional-container** | Additional container elements to include in the focus trap.<br>Useful for floating elements like tooltips or popovers that are<br>rendered outside the main container but should be part of the trap.                                                                                                                                                        | Ref<HTMLElement \| null> | -      | -       |
| **focus-first-element**  | Controls whether to focus the first selectable element or the container itself.<br>When `true`, focuses the first tabbable element within the container.<br>When `false`, focuses the container element directly.<br><br>This is useful for containers that should receive focus themselves,<br>such as scrollable regions or custom interactive components. | boolean                  | -      | false   |
| **restore-focus**        | Automatically restores focus to the previously focused element when the trap is deactivated.<br>This is crucial for accessibility as it maintains the user's place in the document<br>when returning from modal dialogs or overlay components.<br><br>Recommended to be `true` for modal dialogs and popover components.                                     | boolean                  | -      | true    |

#### Events

| Event name     | Description                                                                                                               | Properties |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | ---------- |
| **activate**   | Emitted when the focus trap becomes active.<br>Useful for triggering additional accessibility announcements or analytics. |
| **deactivate** | Emitted when the focus trap is deactivated.<br>Can be used for cleanup, analytics, or triggering state changes.           |
