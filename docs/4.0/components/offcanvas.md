---
title: Vue Offcanvas Component
name: Offcanvas
description: Vue alert component allows build hidden sidebars into your project for navigation, shopping carts.

---


## Examples

### Offcanvas components

Below is an offcanvas example that is shown by default (via `:visible="true"`). Offcanvas includes support for a header with a close button and an optional body class for some initial `padding`. We suggest that you include offcanvas headers with dismiss actions whenever possible, or provide an explicit dismiss action.


::: demo
<div class="docs-example-offcanvas bg-light">
  <COffcanvas :backdrop="false" placement="start" :visible="true">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" />
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</div>
:::
```vue
<COffcanvas :backdrop="false" placement="start" :visible="true">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" />
  </COffcanvasHeader>
  <COffcanvasBody>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or
    custom elements here.
  </COffcanvasBody>
</COffcanvas>
```

### Live demo

Use the buttons below to show and hide an offcanvas component.

- `:visible="false"` hides content (default)
- `visible` or `:visible="true"` shows content

::: demo
<CButton color="primary" @click="() => { visible = !visible }">Toggle offcanvas</CButton>
<COffcanvas placement="start" :visible="visible" @dismiss="() => { visible = !visible }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visible = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or
    custom elements here.
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visible = !visible }">Toggle offcanvas</CButton>
  <COffcanvas placement="start" :visible="visible" @dismiss="() => { visible = !visible }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visible = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visible: false,
      }
    }
  }
</script>
```

## Placement

There's no default placement for offcanvas components, so you must add one of the modifier classes below;

- `placement="start"` places offcanvas on the left of the viewport (shown above)
- `placement="end"` places offcanvas on the right of the viewport
- `placement="top"` places offcanvas on the top of the viewport
- `placement="bottom"` places offcanvas on the bottom of the viewport

Try the top, right, and bottom examples out below.

::: demo
<CButton color="primary" @click="() => { visibleTop = !visibleTop }">Toggle offcanvas</CButton>
<COffcanvas placement="top" :visible="visibleTop" @dismiss="() => { visibleTop = !visibleTop }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleTop = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or
    custom elements here.
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleTop = !visibleTop }">Toggle offcanvas</CButton>
  <COffcanvas placement="top" :visible="visibleTop" @dismiss="() => { visibleTop = !visibleTop }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleTop = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visibleTop: false,
      }
    }
  }
</script>
```

::: demo
<CButton color="primary" @click="() => { visibleEnd = !visibleEnd }">Toggle offcanvas</CButton>
<COffcanvas placement="end" :visible="visibleEnd" @dismiss="() => { visibleEnd = !visibleEnd }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleEnd = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or
    custom elements here.
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleEnd = !visibleEnd }">Toggle offcanvas</CButton>
  <COffcanvas placement="end" :visible="visibleEnd" @dismiss="() => { visibleEnd = !visibleEnd }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleEnd = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visibleEnd: false,
      }
    }
  }
</script>
```

::: demo
<CButton color="primary" @click="() => { visibleBottom = !visibleBottom }">Toggle offcanvas</CButton>
<COffcanvas placement="bottom" :visible="visibleBottom" @dismiss="() => { visibleBottom = !visibleBottom }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleBottom = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    Content for the offcanvas goes here. You can place just about any Bootstrap component or
    custom elements here.
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleBottom = !visibleBottom }">Toggle offcanvas</CButton>
  <COffcanvas placement="bottom" :visible="visibleBottom" @dismiss="() => { visibleBottom = !visibleBottom }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleBottom = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      Content for the offcanvas goes here. You can place just about any Bootstrap component or
      custom elements here.
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visibleBottom: false,
      }
    }
  }
</script>
```
<script>
  export default {
    data() {
      return { 
        visible: false,
        visibleTop: false,
        visibleEnd: false,
        visibleBottom: false,
      }
    }
  }
</script>

## API

!!!include(./docs/api/offcanvas/COffcanvas.api.md)!!!

!!!include(./docs/api/offcanvas/COffcanvasTitle.api.md)!!!