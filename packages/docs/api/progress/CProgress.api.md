### CProgress

```jsx
import { CProgress } from '@coreui/vue'
// or
import CProgress from '@coreui/vue/src/components/progress/CProgress'
```

#### Props

| Prop name                                                                  | Description                                                                                                               | Type    | Values                                                                                          | Default |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------------- | ------- |
| **animated**                                                               | Use to animate the stripes right to left via CSS3 animations.                                                             | boolean | -                                                                                               | -       |
| **color**                                                                  | Sets the color context of the component to one of CoreUI’s themed colors.                                                 | string  | `'primary'`, `'secondary'`, `'success'`, `'danger'`, `'warning'`, `'info'`, `'dark'`, `'light'` | -       |
| **height**                                                                 | Sets the height of the component. If you set that value the inner `<CProgressBar>` will automatically resize accordingly. | number  | -                                                                                               | -       |
| **progress-bar-class-name** <br><div class="badge bg-primary">5.0.0+</div> | A string of all className you want applied to the <CProgressBar/> component.                                              | string  | -                                                                                               | -       |
| **thin**                                                                   | Makes progress bar thinner.                                                                                               | boolean | -                                                                                               | -       |
| **value**                                                                  | The percent to progress the ProgressBar.                                                                                  | number  | -                                                                                               | 0       |
| **variant**                                                                | Set the progress bar variant to optional striped.                                                                         | string  | `'striped'`                                                                                     | -       |
| **white**                                                                  | Change the default color to white.                                                                                        | boolean | -                                                                                               | -       |
