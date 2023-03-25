### CCarousel

```jsx
import { CCarousel } from '@coreui/vue'
// or
import CCarousel from '@coreui/vue/src/components/carousel/CCarousel'
```

#### Props

| Prop name      | Description                                                                                                                                                                            | Type            | Values                   | Default |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------- | ------------------------ | ------- |
| **controls**   | Adding in the previous and next controls.                                                                                                                                              | boolean         | -                        | -       |
| **dark**       | Add darker controls, indicators, and captions.                                                                                                                                         | boolean         | -                        | -       |
| **index**      | index of the active item.                                                                                                                                                              | number          | -                        | 0       |
| **indicators** | Adding indicators at the bottom of the carousel for each item.                                                                                                                         | boolean         | -                        | -       |
| **interval**   | The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.                                                                    | boolean\|number | -                        | 5000    |
| **pause**      | If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it. | boolean\|string | -                        | 'hover' |
| **transition** | Set type of the transition.                                                                                                                                                            | string          | `'crossfade'`, `'slide'` | 'slide' |
| **wrap**       | Set whether the carousel should cycle continuously or have hard stops.                                                                                                                 | boolean         | -                        | true    |
