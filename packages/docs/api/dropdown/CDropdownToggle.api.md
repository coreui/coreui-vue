### CDropdownToggle

```jsx
import { CDropdownToggle } from '@coreui/vue'
// or
import CDropdownToggle from '@coreui/vue/src/components/dropdown/CDropdownToggle'
```

#### Props

| Prop name     | Description                                                                                                                                                                                                   | Type     | Values                                                                                          | Default  |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ----------------------------------------------------------------------------------------------- | -------- |
| **active**    | Toggle the active state for the component.                                                                                                                                                                    | boolean  | -                                                                                               | -        |
| **color**     | Sets the color context of the component to one of CoreUI’s themed colors.                                                                                                                                     | string   | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -        |
| **caret**     | Enables pseudo element caret on toggler.                                                                                                                                                                      | boolean  | -                                                                                               | true     |
| **component** | Component used for the root node. Either a string to use a HTML element or a component.                                                                                                                       | string   | -                                                                                               | 'button' |
| **custom**    | Create a custom toggler which accepts any content.                                                                                                                                                            | boolean  | -                                                                                               | -        |
| **disabled**  | Toggle the disabled state for the component.                                                                                                                                                                  | boolean  | -                                                                                               | -        |
| **size**      | Size the component small or large.                                                                                                                                                                            | string   | `'sm'`, `'lg'`                                                                                  | -        |
| **split**     | Similarly, create split button dropdowns with virtually the same markup as single button dropdowns, but with the addition of `.dropdown-toggle-split` className for proper spacing around the dropdown caret. | boolean  | -                                                                                               | -        |
| **trigger**   | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.<br/>`@type` 'hover' \| 'focus' \| 'click'                                                 | Triggers | -                                                                                               | 'click'  |
| **variant**   | Set the button variant to an outlined button or a ghost button.                                                                                                                                               | string   | `'ghost'`, `'outline'`                                                                          | -        |
