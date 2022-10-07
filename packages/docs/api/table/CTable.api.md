### CTable

```jsx
import { CTable } from '@coreui/vue'
// or
import CTable from '@coreui/vue/src/components/table/CTable'
```

#### Props

| Prop name                                                          | Description                                                                                                              | Type            | Values                                                                                                    | Default |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------ | --------------- | --------------------------------------------------------------------------------------------------------- | ------- |
| **align**                                                          | Set the vertical aligment.                                                                                               | string          | `'bottom'`, `'middle'`, `'top'`                                                                           | -       |
| **border-color**                                                   | Sets the border color of the component to one of CoreUI’s themed colors.                                                 | string          | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`           |         |
| **bordered**                                                       | Add borders on all sides of the table and cells.                                                                         | boolean         | -                                                                                                         |         |
| **borderless**                                                     | Remove borders on all sides of the table and cells.                                                                      | boolean         | -                                                                                                         |         |
| **caption**                                                        | Put the `<caption>` on the top of the table.                                                                             | string          | `'top'`                                                                                                   | -       |
| **color**                                                          | Sets the color context of the component to one of CoreUI’s themed colors.                                                | string          | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'`, `string` |         |
| **hover**                                                          | Enable a hover state on table rows within a `<CTableBody>`.                                                              | boolean         | -                                                                                                         |         |
| **responsive**                                                     | Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to. | boolean\|string | `boolean`, `'sm'`, `'md'`, `'lg'`, `'xl'`, `'xxl'`                                                        | -       |
| **small**                                                          | Make table more compact by cutting all cell `padding` in half.                                                           | boolean         | -                                                                                                         |         |
| **striped**                                                        | Add zebra-striping to any table row within the `<CTableBody>`.                                                           | boolean         | -                                                                                                         |         |
| **striped-columns** <br><div class="badge bg-primary">4.4.0+</div> | Add zebra-striping to any table column.false                                                                             | boolean         | -                                                                                                         |         |
