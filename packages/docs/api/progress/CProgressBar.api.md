### CProgressBar

```jsx
import { CProgressBar } from '@coreui/vue'
// or
import CProgressBar from '@coreui/vue/src/components/progress/CProgressBar'
```

#### Props

| Prop name    | Description                                                               | Type    | Values                                                                                          | Default |
| ------------ | ------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- | ------- |
| **animated** | Use to animate the stripes right to left via CSS3 animations.             | boolean | -                                                                                               | -       |
| **color**    | Sets the color context of the component to one of CoreUI’s themed colors. | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -       |
| **value**    | The percent to progress the ProgressBar.                                  | number  | -                                                                                               | 0       |
| **variant**  | Set the progress bar variant to optional striped.                         | string  | `'striped'`                                                                                     | -       |
