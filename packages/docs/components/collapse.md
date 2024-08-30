---
title: Vue Collapse Component
name: Collapse
description: Vue collapse component toggles the visibility of content across your project with a few classes and some scripts. Useful for a large amount of content.
other_frameworks: collapse
---


## How it works

The collapse component is used to show and hide content. Buttons or anchors are used as triggers that are mapped to specific elements you toggle. Collapsing an element will animate the `height` from its current value to `0`. Given how CSS handles animations, you cannot use `padding` on a `.collapse` element. Instead, use the class as an independent wrapping element.

## Example

You can use a link or a button component.

::: demo
<CButton color="primary" href="#" @click.prevent="visible = !visible">Link</CButton>
<CButton color="primary" @click="visible = !visible">Button</CButton>
<CCollapse :visible="visible">
  <CCard class="mt-3">
    <CCardBody>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
      ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
      sapiente ea proident.
    </CCardBody>
  </CCard>
</CCollapse>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
</script>
<template>
  <CButton color="primary" href="#" @click.prevent="visible = !visible">Link</CButton>
  <CButton color="primary" @click="visible = !visible">Button</CButton>
  <CCollapse :visible="visible">
    <CCard class="mt-3">
      <CCardBody>
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson
        ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
        sapiente ea proident.
      </CCardBody>
    </CCard>
  </CCollapse>
</template>
```

## Horizontal

The collapse plugin also supports horizontal collapsing. Add the `horizontal` property to transition the `width` instead of `height` and set a `width` on the immediate child element.

:::demo
<CButton class="mb-3" color="primary" aria-expanded={visible} aria-controls="collapseWidthExample" @click="visibleHorizontal = !visibleHorizontal">Button</CButton>
<div style="min-height: 120px">
  <CCollapse horizontal :visible="visibleHorizontal">
    <CCard style="width: 300px">
      <CCardBody>
        This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
      </CCardBody>
    </CCard>
  </CCollapse>
</div>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleHorizontal = ref(false)
</script>
<template>
  <CButton class="mb-3" color="primary" aria-expanded={visible} aria-controls="collapseWidthExample" @click="visibleHorizontal = !visibleHorizontal">Button</CButton>
  <div style="min-height: 120px">
    <CCollapse horizontal :visible="visibleHorizontal">
      <CCard style="width: 300px">
        <CCardBody>
          This is some placeholder content for a horizontal collapse. It's hidden by default and shown when triggered.
        </CCardBody>
      </CCard>
    </CCollapse>
  </div>
</template>
```

## Multiple targets

A `<CButton>` can show and hide multiple elements.

::: demo
<CButton color="primary" @click="visibleA = !visibleA">Toggle first element</CButton>
<CButton color="primary" @click="visibleB = !visibleB">Toggle second element</CButton>
<CButton color="primary" @click="() => {
  visibleA = !visibleA
  visibleB = !visibleB
}"
>
  Toggle both elements
</CButton>
<CRow>
  <CCol xs="6">
    <CCollapse :visible="visibleA">
      <CCard class="mt-3">
        <CCardBody>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
          cred nesciunt sapiente ea proident.
        </CCardBody>
      </CCard>
    </CCollapse>
  </CCol>
  <CCol xs="6">
    <CCollapse :visible="visibleB">
      <CCard class="mt-3">
        <CCardBody>
          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
          richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
          cred nesciunt sapiente ea proident.
        </CCardBody>
      </CCard>
    </CCollapse>
  </CCol>
</CRow>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleA = ref(false)
  const visibleB = ref(false)
</script>
<template>
  <CButton color="primary" @click="visibleA = !visibleA">Toggle first element</CButton>
  <CButton color="primary" @click="visibleB = !visibleB">Toggle second element</CButton>
  <CButton color="primary" @click="() => {
    visibleA = !visibleA
    visibleB = !visibleB
  }"
  >
    Toggle both elements
  </CButton>
  <CRow>
    <CCol xs="6">
      <CCollapse :visible="visibleA">
        <CCard class="mt-3">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
    <CCol xs="6">
      <CCollapse :visible="visibleB">
        <CCard class="mt-3">
          <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
            richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
            cred nesciunt sapiente ea proident.
          </CCardBody>
        </CCard>
      </CCollapse>
    </CCol>
  </CRow>
</template>
```

## API

!!!include(./api/collapse/CCollapse.api.md)!!!

<script setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const visibleHorizontal = ref(false)
  const visibleA = ref(false)
  const visibleB = ref(false)
</script>