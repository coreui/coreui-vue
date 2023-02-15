---
title: Vue Offcanvas Component
name: Offcanvas
description: Vue alert component allows build hidden sidebars into your project for navigation, shopping carts.
other_frameworks: offcanvas
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
<COffcanvas placement="start" :visible="visible" @hide="() => { visible = !visible }">
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
  <COffcanvas placement="start" :visible="visible" @hide="() => { visible = !visible }">
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

### Body scrolling

Scrolling the `<body>` element is disabled when an offcanvas and its backdrop are visible. Use the scroll property to toggle `<body>` scrolling and backdrop to toggle the backdrop.

::: demo
<CButton color="primary" @click="() => { visibleScrolling = !visibleScrolling }">Enable body scrolling</CButton>
<COffcanvas :backdrop="false" placement="start" scroll :visible="visibleScrolling" @hide="() => { visibleScrolling = !visibleScrolling }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleScrolling = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleScrolling = !visibleScrolling }">Enable body scrolling</CButton>
  <COffcanvas :backdrop="false" placement="start" scroll :visible="visibleScrolling" @hide="() => { visibleScrolling = !visibleScrolling }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleScrolling = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visibleScrolling: false,
      }
    }
  }
</script>
```

### Body scrolling and backdrop

You can also enable `<body>` scrolling with a visible backdrop.

::: demo
<CButton color="primary" @click="() => { visibleWithBothOptions = !visibleWithBothOptions }">Enable both scrolling & backdrop</CButton>
<COffcanvas placement="start" scroll :visible="visibleWithBothOptions" @hide="() => { visibleWithBothOptions = !visibleWithBothOptions }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleWithBothOptions = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    <p>Try scrolling the rest of the page to see this option in action.</p>
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleWithBothOptions = !visibleWithBothOptions }">Enable both scrolling &amp; backdrop</CButton>
  <COffcanvas placement="start" scroll :visible="visibleWithBothOptions" @hide="() => { visibleWithBothOptions = !visibleWithBothOptions }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleWithBothOptions = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>Try scrolling the rest of the page to see this option in action.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return {
        visibleWithBothOptions: false,
      }
    }
  }
</script>
```

### Static backdrop

If you set a `backdrop` to `static`, your React offcanvas component will not close when clicking outside of it.

::: demo
<CButton color="primary" @click="() => { visibleWithStaticBackdrop = !visibleWithStaticBackdrop }">Toggle static offcanvas</CButton>
<COffcanvas backdrop="static" placement="start" :visible="visibleWithStaticBackdrop" @hide="() => { visibleWithStaticBackdrop = !visibleWithStaticBackdrop }">
  <COffcanvasHeader>
    <COffcanvasTitle>Offcanvas</COffcanvasTitle>
    <CCloseButton class="text-reset" @click="() => { visibleWithStaticBackdrop = false }"/>
  </COffcanvasHeader>
  <COffcanvasBody>
    <p>I will not close if you click outside of me.</p>
  </COffcanvasBody>
</COffcanvas>
:::
```vue
<template>
  <CButton color="primary" @click="() => { visibleWithStaticBackdrop = !visibleWithStaticBackdrop }">Toggle static offcanvas</CButton>
  <COffcanvas backdrop="static" placement="start" :visible="visibleWithStaticBackdrop" @hide="() => { visibleWithStaticBackdrop = !visibleWithStaticBackdrop }">
    <COffcanvasHeader>
      <COffcanvasTitle>Offcanvas</COffcanvasTitle>
      <CCloseButton class="text-reset" @click="() => { visibleWithStaticBackdrop = false }"/>
    </COffcanvasHeader>
    <COffcanvasBody>
      <p>I will not close if you click outside of me.</p>
    </COffcanvasBody>
  </COffcanvas>
</template>
<script>
  export default {
    data() {
      return { 
        visibleWithStaticBackdrop: false,
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
<CButton color="primary" @click="() => { visibleTop = !visibleTop }">Toggle top offcanvas</CButton>
<COffcanvas placement="top" :visible="visibleTop" @hide="() => { visibleTop = !visibleTop }">
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
  <CButton color="primary" @click="() => { visibleTop = !visibleTop }">Toggle top offcanvas</CButton>
  <COffcanvas placement="top" :visible="visibleTop" @hide="() => { visibleTop = !visibleTop }">
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
<CButton color="primary" @click="() => { visibleEnd = !visibleEnd }">Toggle right offcanvas</CButton>
<COffcanvas placement="end" :visible="visibleEnd" @hide="() => { visibleEnd = !visibleEnd }">
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
  <CButton color="primary" @click="() => { visibleEnd = !visibleEnd }">Toggle right offcanvas</CButton>
  <COffcanvas placement="end" :visible="visibleEnd" @hide="() => { visibleEnd = !visibleEnd }">
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
<CButton color="primary" @click="() => { visibleBottom = !visibleBottom }">Toggle bottom offcanvas</CButton>
<COffcanvas placement="bottom" :visible="visibleBottom" @hide="() => { visibleBottom = !visibleBottom }">
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
  <CButton color="primary" @click="() => { visibleBottom = !visibleBottom }">Toggle bottom offcanvas</CButton>
  <COffcanvas placement="bottom" :visible="visibleBottom" @hide="() => { visibleBottom = !visibleBottom }">
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

## Accessibility

Since the offcanvas panel is conceptually a modal dialog, be sure to add `aria-labelledby="..."`—referencing the offcanvas title—to `<COffcanvas>`. Note that you don’t need to add `role="dialog"` since we already add it automatically.

<script>
  export default {
    data() {
      return { 
        visible: false,
        visibleTop: false,
        visibleEnd: false,
        visibleBottom: false,
        visibleScrolling: false,
        visibleWithStaticBackdrop: false,
        visibleWithBothOptions: false,
      }
    }
  }
</script>

## Customizing

### CSS variables

Vue offcanvas uses local CSS variables on `.offcanvas` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

```sass
--cui-offcanvas-width: #{$offcanvas-horizontal-width};
--cui-offcanvas-height: #{$offcanvas-vertical-height};
--cui-offcanvas-padding-x: #{$offcanvas-padding-x};
--cui-offcanvas-padding-y: #{$offcanvas-padding-y};
--cui-offcanvas-color: #{$offcanvas-color};
--cui-offcanvas-bg: #{$offcanvas-bg-color};
--cui-offcanvas-border-width: #{$offcanvas-border-width};
--cui-offcanvas-border-color: #{$offcanvas-border-color};
--cui-offcanvas-box-shadow: #{$offcanvas-box-shadow};
```

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <COffcanvas :style="vars">...</COffcanvas>
```

### SASS variables

```sass
$offcanvas-padding-y:               $modal-inner-padding;
$offcanvas-padding-x:               $modal-inner-padding;
$offcanvas-horizontal-width:        400px;
$offcanvas-vertical-height:         30vh;
$offcanvas-transition-duration:     .3s;
$offcanvas-border-color:            $modal-content-border-color;
$offcanvas-border-width:            $modal-content-border-width;
$offcanvas-title-line-height:       $modal-title-line-height;
$offcanvas-bg-color:                $modal-content-bg;
$offcanvas-color:                   $modal-content-color;
$offcanvas-box-shadow:              $modal-content-box-shadow-xs;
$offcanvas-backdrop-bg:             $modal-backdrop-bg;
$offcanvas-backdrop-opacity:        $modal-backdrop-opacity;
```

## API

!!!include(./api/offcanvas/COffcanvas.api.md)!!!

!!!include(./api/offcanvas/COffcanvasTitle.api.md)!!!