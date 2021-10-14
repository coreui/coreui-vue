### CDropdown

```jsx
import { CDropdown } from "@coreui/vue";
// or
import CDropdown from "@coreui/vue/src/components/dropdown/CDropdown";
```

#### Props

| Prop name     | Description                                                                                                                                                          | Type           | Values                                                                                                                                                                                        | Default        |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| **alignment** | Set aligment of dropdown menu.                                                                                                                                       | string\|object | `{ 'start' \| 'end' \| { xs: 'start' \| 'end' } \| { sm: 'start' \| 'end' } \| { md: 'start' \| 'end' } \| { lg: 'start' \| 'end' } \| { xl: 'start' \| 'end'} \| { xxl: 'start' \| 'end'} }` | -              |
| **dark**      | Sets a darker color scheme to match a dark navbar.                                                                                                                   | boolean        | -                                                                                                                                                                                             |                |
| **direction** | Sets a specified direction and location of the dropdown menu.                                                                                                        | string         | `'dropup'`, `'dropend'`, `'dropstart'`                                                                                                                                                        | -              |
| **disabled**  | Toggle the disabled state for the component.                                                                                                                         | boolean        | -                                                                                                                                                                                             |                |
| **placement** | Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property. | Placement      | `'auto'`, `'top-end'`, `'top'`, `'top-start'`, `'bottom-end'`, `'bottom'`, `'bottom-start'`, `'right-start'`, `'right'`, `'right-end'`, `'left-start'`, `'left'`, `'left-end'`                | 'bottom-start' |
| **popper**    | If you want to disable dynamic positioning set this property to `true`.                                                                                              | boolean        | -                                                                                                                                                                                             | true           |
| **trigger**   | Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.                                                  | string\|array  | -                                                                                                                                                                                             | 'click'        |
| **variant**   | Set the dropdown variant to an btn-group, dropdown, input-group, and nav-item.                                                                                       | string         | `'btn-group'`, `'dropdown'`, `'input-group'`, `'nav-item'`                                                                                                                                    | 'btn-group'    |
| **visible**   | Toggle the visibility of dropdown menu component.                                                                                                                    | boolean        | -                                                                                                                                                                                             |                |

#### Events

| Event name | Description                                              | Properties |
| ---------- | -------------------------------------------------------- | ---------- |
| **hide**   | Callback fired when the component requests to be hidden. |
| **show**   | Callback fired when the component requests to be shown.  |
