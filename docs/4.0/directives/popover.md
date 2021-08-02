---
title: Vue Popover Component
name: Popover
description: Documentation and examples for adding Vue popovers, like those found in iOS, to any element on your site.
---

## Example

::: demo
<CButton color="danger" size="lg" v-c-popover="{header: 'Popover title', content: 'And here\’s some amazing content. It’s very engaging. Right?', placement: 'right'}">Click to toggle popover</CButton>
:::
```vue
<CButton color="danger" size="lg" v-c-popover="{header: 'Popover title', content: 'And here\’s some amazing content. It’s very engaging. Right?', placement: 'right'}">Click to toggle popover</CButton>
```

### Four directions

Four options are available: top, right, bottom, and left aligned. Directions are mirrored when using CoreUI for Vue in RTL.

::: demo
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Popover on top</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Popover on right</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Popover on bottom</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Popover on left</CButton>
:::
```vue
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'top'}">Popover on top</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'right'}">Popover on right</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'bottom'}">Popover on bottom</CButton>
<CButton color="secondary" v-c-popover="{content: 'Vivamus sagittis lacus vel augue laoreet rutrum faucibus.', placement: 'left'}">Popover on left</CButton>
```

