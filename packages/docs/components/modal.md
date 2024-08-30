---
title: Vue Modal Component
name: Modal
description: Vue Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize Vue CoreUI Modals easily. Multiple examples and tutorial.
other_frameworks: modal
---

## Examples

### Modal components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with actions whenever possible, or provide another explicit action.

::: demo
<CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
  <CModalHeader>
    <CModalTitle>Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Modal body text goes here.</CModalBody>
  <CModalFooter>
    <CButton color="secondary">Close</CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
``` vue
<CModal :backdrop="false" :keyboard="false" visible>
  <CModalHeader>
    <CModalTitle>Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Modal body text goes here.</CModalBody>
  <CModalFooter>
    <CButton color="secondary">Close</CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
```


### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

::: demo
<CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton>
<CModal 
  :visible="visibleLiveDemo"
  @close="() => { visibleLiveDemo = false }"
  aria-labelledby="LiveDemoExampleLabel"
>
  <CModalHeader>
    <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
  <CModalFooter>
    <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleLiveDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton>
  <CModal 
    :visible="visibleLiveDemo"
    @close="() => { visibleLiveDemo = false }"
    aria-labelledby="LiveDemoExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="LiveDemoExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleLiveDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
```
### Static backdrop

If you set `backdrop` property to `static`, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.

::: demo
<CButton color="primary" @click="() => { visibleStaticBackdropDemo = true }">Launch static backdrop modal</CButton>
<CModal 
  backdrop="static"
  :visible="visibleStaticBackdropDemo"
  @close="() => { visibleStaticBackdropDemo = false }" 
  aria-labelledby="StaticBackdropExampleLabel"
>
  <CModalHeader>
    <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
  <CModalFooter>
    <CButton color="secondary" @click="() => { visibleStaticBackdropDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleStaticBackdropDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleStaticBackdropDemo = true }">Launch demo modal</CButton>
  <CModal 
    backdrop="static"
    :visible="visibleStaticBackdropDemo"
    @close="() => { visibleStaticBackdropDemo = false }" 
    aria-labelledby="StaticBackdropExampleLabel"
  >
    <CModalHeader>
      <CModalTitle id="StaticBackdropExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>Woohoo, you're reading this text in a modal!</CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleStaticBackdropDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
```

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

::: demo
<CButton color="primary" @click="() => { visibleScrollingLongContentDemo = true }">Launch static backdrop modal</CButton>
<CModal 
  :visible="visibleScrollingLongContentDemo"
  @close="() => { visibleScrollingLongContentDemo = false }"
  aria-labelledby="ScrollingLongContentExampleLabel"
>
  <CModalHeader>
   <CModalTitle id="ScrollingLongContentExampleLabel">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
  </CModalBody>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleScrollingLongContentDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleScrollingLongContentDemo = true }">Launch demo modal</CButton>
  <CModal 
    :visible="visibleScrollingLongContentDemo"
    @close="() => { visibleScrollingLongContentDemo = false }"
    aria-labelledby="ScrollingLongContentExampleLabel"
  >
    <CModalHeader>
     <CModalTitle id="ScrollingLongContentExampleLabel">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </CModalBody>
  </CModal>
</template>
```

You can also create a scrollable modal that allows scroll the modal body by adding `scrollable` prop.

::: demo
<CButton color="primary" @click="() => { visibleScrollableDemo = true }">Launch static backdrop modal</CButton>
<CModal
  scrollable
  :visible="visibleScrollableDemo"
  @close="() => { visibleScrollableDemo = false }"
  aria-labelledby="ScrollingLongContentExampleLabel2"
>
  <CModalHeader>
    <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
    <p>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
      facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
      at eros.
    </p>
    <p>
      Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
      lacus vel augue laoreet rutrum faucibus dolor auctor.
    </p>
    <p>
      Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
      scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
      auctor fringilla.
    </p>
  </CModalBody>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleScrollableDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleScrollableDemo = true }">Launch demo modal</CButton>
  <CModal
    scrollable
    :visible="visibleScrollableDemo"
    @close="() => { visibleScrollableDemo = false }"
    aria-labelledby="ScrollingLongContentExampleLabel2"
  >
    <CModalHeader>
      <CModalTitle id="ScrollingLongContentExampleLabel2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
      <p>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac
        facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum
        at eros.
      </p>
      <p>
        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis
        lacus vel augue laoreet rutrum faucibus dolor auctor.
      </p>
      <p>
        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel
        scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus
        auctor fringilla.
      </p>
    </CModalBody>
  </CModal>
</template>
```

### Vertically centered

Add `alignment="center` to `<CModal>` to vertically center the modal.

::: demo
<CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Vertically centered modal</CButton>
<CModal
  alignment="center"
  :visible="visibleVerticallyCenteredDemo"
  @close="() => { visibleVerticallyCenteredDemo = false }"
  aria-labelledby="VerticallyCenteredExample"
>
  <CModalHeader>
    <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  </CModalBody>
  <CModalFooter>
    <CButton color="secondary" @click="() => { visibleVerticallyCenteredDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleVerticallyCenteredDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Launch demo modal</CButton>
  <CModal
    alignment="center"
    :visible="visibleVerticallyCenteredDemo"
    @close="() => { visibleVerticallyCenteredDemo = false }"
    aria-labelledby="VerticallyCenteredExample"
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleVerticallyCenteredDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
```

::: demo
<CButton color="primary" @click="() => { visibleVerticallyCenteredScrollableDemo = true }">Vertically centered scrollable modal</CButton>
<CModal 
  alignment="center"
  scrollable
  :visible="visibleVerticallyCenteredScrollableDemo"
  @close="() => { visibleVerticallyCenteredScrollableDemo = false }"
  aria-labelledby="VerticallyCenteredExample2"
>
  <CModalHeader>
    <CModalTitle id="VerticallyCenteredExample2">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
  </CModalBody>
  <CModalFooter>
    <CButton color="secondary" @click="() => { visibleVerticallyCenteredScrollableDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleVerticallyCenteredScrollableDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleVerticallyCenteredScrollableDemo = true }">Vertically centered scrollable modal</CButton>
  <CModal 
    alignment="center"
    scrollable
    :visible="visibleVerticallyCenteredScrollableDemo"
    @close="() => { visibleVerticallyCenteredScrollableDemo = false }"
    aria-labelledby="VerticallyCenteredExample2"
  >
    <CModalHeader>
      <CModalTitle id="VerticallyCenteredExample2">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleVerticallyCenteredScrollableDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
```

### Tooltips and popovers

`<CTooltips>` and `<CPopovers>` can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automaticallyed.

::: demo
<CButton color="primary" @click="() => { visibleTooltipsAndPopoversDemo = true }">Launch demo modal</CButton>
<CModal
  :visible="visibleTooltipsAndPopoversDemo"
  @close="() => { visibleTooltipsAndPopoversDemo = false }"
  aria-labelledby="TooltipsAndPopoverExample"
>
  <CModalHeader>
    <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <h5>Popover in a modal</h5>
    <p>This <CButton color="secondary" v-c-popover="{header: 'Popover title', content: 'Popover body content is set in this property.'}">button</CButton></p>
    <hr/>
    <h5>Tooltips in a modal</h5>
    <p>
      <CLink v-c-tooltip="'Tooltip'">This link</CLink> and <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips on hover.
    </p>
  </CModalBody>
  <CModalFooter>
    <CButton color="secondary" @click="() => { visibleTooltipsAndPopoversDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleTooltipsAndPopoversDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleTooltipsAndPopoversDemo = true }">Launch demo modal</CButton>
  <CModal
    :visible="visibleTooltipsAndPopoversDemo"
    @close="() => { visibleTooltipsAndPopoversDemo = false }"
    aria-labelledby="TooltipsAndPopoverExample"
  >
    <CModalHeader>
      <CModalTitle id="TooltipsAndPopoverExample">Modal title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <h5>Popover in a modal</h5>
      <p>This <CButton color="secondary" v-c-popover="{header: 'Popover title', content: 'Popover body content is set in this property.'}">button</CButton></p>
      <hr/>
      <h5>Tooltips in a modal</h5>
      <p>
        <CLink v-c-tooltip="'Tooltip'">This link</CLink> and <CLink v-c-tooltip="'Tooltip'">that link</CLink> have tooltips on hover.
      </p>
    </CModalBody>
    <CModalFooter>
      <CButton color="secondary" @click="() => { visibleTooltipsAndPopoversDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
```

### Toggle between modals

Toggle between multiple modals with some clever placement of the `visible` props. **Please note multiple modals cannot be opened at the same time** — this method simply toggles between two separate modals.

::: demo
<CButton color="primary" @click="() => { visibleToggleBetweenModalsDemo1 = true }">Open first modal</CButton>
<CModal
  :visible="visibleToggleBetweenModalsDemo1"
  @close="() => { visibleToggleBetweenModalsDemo1 = false }"
  aria-labelledby="ToggleBetweenModalsExample1"
>
  <CModalHeader>
    <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>Show a second modal and hide this one with the button below.</p>
  </CModalBody>
  <CModalFooter>
    <CButton 
      color="primary"
      @click="() => { 
        visibleToggleBetweenModalsDemo1 = false
        visibleToggleBetweenModalsDemo2 = true
      }"
    >Open second modal</CButton>
  </CModalFooter>
</CModal>
<CModal
  :visible="visibleToggleBetweenModalsDemo2"
  @close="() => {
    visibleToggleBetweenModalsDemo1 = true
    visibleToggleBetweenModalsDemo2 = false
  }"
  aria-labelledby="ToggleBetweenModalsExample2"
>
  <CModalHeader>
    <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
  </CModalHeader>
  <CModalBody>
    <p>Hide this modal and show the first with the button below.</p>
  </CModalBody>
  <CModalFooter>
    <CButton 
      color="primary"
      @click="() => { 
        visibleToggleBetweenModalsDemo1 = true
        visibleToggleBetweenModalsDemo2 = false
      }"
    >Back to first</CButton>
  </CModalFooter>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const visibleToggleBetweenModalsDemo1 = ref(false)
  const visibleToggleBetweenModalsDemo2 = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { visibleToggleBetweenModalsDemo1 = true }">Open first modal</CButton>
  <CModal
    :visible="visibleToggleBetweenModalsDemo1"
    @close="() => { visibleToggleBetweenModalsDemo1 = false }"
    aria-labelledby="ToggleBetweenModalsExample1"
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample1">Modal 1 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Show a second modal and hide this one with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton 
        color="primary"
        @click="() => { 
          visibleToggleBetweenModalsDemo1 = false
          visibleToggleBetweenModalsDemo2 = true
        }"
      >Open second modal</CButton>
    </CModalFooter>
  </CModal>
  <CModal
    :visible="visibleToggleBetweenModalsDemo2"
    @close="() => {
      visibleToggleBetweenModalsDemo1 = true
      visibleToggleBetweenModalsDemo2 = false
    }"
    aria-labelledby="ToggleBetweenModalsExample2"
  >
    <CModalHeader>
      <CModalTitle id="ToggleBetweenModalsExample2">Modal 2 title</CModalTitle>
    </CModalHeader>
    <CModalBody>
      <p>Hide this modal and show the first with the button below.</p>
    </CModalBody>
    <CModalFooter>
      <CButton 
        color="primary"
        @click="() => { 
          visibleToggleBetweenModalsDemo1 = true
          visibleToggleBetweenModalsDemo2 = false
        }"
      >Back to first</CButton>
    </CModalFooter>
  </CModal>
</template>
```

### Change animation

The variable `$modal-fade-transform` determines the transform state of React Modal component before the modal fade-in animation, whereas the variable `$modal-show-transform` determines the transform state of Modal component after the modal fade-in animation.
If you want a zoom-in animation, for example, set `$modal-fade-transform: scale(.8)`.

### Remove animation

For modals that simply appear rather than fade into view, set `transition` to `false`.

```vue
<CModal transition={false}>...</CModal>
```

### Accessibility

Be sure to add `aria-labelledby="..."`, referencing the modal title, to `<CModal />` Additionally, you may give a description of your modal dialog with `aria-describedby` on `<CModal>`. Note that you don’t need to add `role="dialog` since we already add it.

## Optional sizes

Modals have three optional sizes, available via modifier classes to be placed on a `<CModal>`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

<table class="table">
  <thead>
    <tr>
      <th>Size</th>
      <th>Property size</th>
      <th>Modal max-width</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Small</td>
      <td><code>'sm'</code></td>
      <td><code>300px</code></td>
    </tr>
    <tr>
      <td>Default</td>
      <td class="text-body-secondary">None</td>
      <td><code>500px</code></td>
    </tr>
    <tr>
      <td>Large</td>
      <td><code>'lg'</code></td>
      <td><code>800px</code></td>
    </tr>
    <tr>
      <td>Extra large</td>
      <td><code>'xl'</code></td>
      <td><code>1140px</code></td>
    </tr>
  </tbody>
</table>

::: demo
<CButton color="primary" @click="() => { xlDemo = true }">Extra large modal</CButton>
<CButton color="primary" @click="() => { lgDemo = true }">Large modal</CButton>
<CButton color="primary" @click="() => { smDemo = true }">Small modal</CButton>
<CModal
  size="xl"
  :visible="xlDemo"
  @close="() => { xlDemo = false }"
  aria-labelledby="OptionalSizesExample1"
>
  <CModalHeader>
    <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal 
  size="lg"
  :visible="lgDemo"
  @close="() => { lgDemo = false }"
  aria-labelledby="OptionalSizesExample2"
>
  <CModalHeader>
    <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  size="sm" 
  :visible="smDemo" 
  @close="() => { smDemo = false }"
  aria-labelledby="OptionalSizesExample3"
>
  <CModalHeader>
    <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const xlDemo = ref(false)
  const lgDemo = ref(false)
  const smDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { xlDemo = true }">Extra large modal</CButton>
  <CButton color="primary" @click="() => { lgDemo = true }">Large modal</CButton>
  <CButton color="primary" @click="() => { smDemo = true }">Small modal</CButton>
  <CModal
    size="xl"
    :visible="xlDemo"
    @close="() => { xlDemo = false }"
    aria-labelledby="OptionalSizesExample1"
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample1">Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    size="lg"
    :visible="lgDemo"
    @close="() => { lgDemo = false }"
    aria-labelledby="OptionalSizesExample2"
  >
  <CModalHeader>
    <CModalTitle id="OptionalSizesExample2">Large modal</CModalTitle>
  </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    size="sm" 
    :visible="smDemo" 
    @close="() => { smDemo = false }"
    aria-labelledby="OptionalSizesExample3"
  >
    <CModalHeader>
      <CModalTitle id="OptionalSizesExample3">Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
</template>
```

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via property `fullscreen`.

<table class="table">
  <thead>
    <tr>
      <th>Property fullscreen</th>
      <th>Availability</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>true</code></td>
      <td>Always</td>
    </tr>
    <tr>
      <td><code>'sm'</code></td>
      <td>Below <code>576px</code></td>
    </tr>
    <tr>
      <td><code>'md'</code></td>
      <td>Below <code>768px</code></td>
    </tr>
    <tr>
      <td><code>'lg'</code></td>
      <td>Below <code>992px</code></td>
    </tr>
    <tr>
      <td><code>'xl'</code></td>
      <td>Below <code>1200px</code></td>
    </tr>
    <tr>
      <td><code>'xxl'</code></td>
      <td>Below <code>1400px</code></td>
    </tr>
  </tbody>
</table>

::: demo
<CButton color="primary" @click="() => { fullscreenDemo = true }">Full screen</CButton>
<CButton color="primary" @click="() => { fullscreenSmDemo = true }">Full screen below sm</CButton>
<CButton color="primary" @click="() => { fullscreenMdDemo = true }">Full screen below md</CButton>
<CButton color="primary" @click="() => { fullscreenLgDemo = true }">Full screen below lg</CButton>
<CButton color="primary" @click="() => { fullscreenXlDemo = true }">Full screen below xl</CButton>
<CButton color="primary" @click="() => { fullscreenXxlDemo = true }">Full screen below xxl</CButton>
<CModal
  fullscreen
  :visible="fullscreenDemo"
  @close="() => { fullscreenDemo = false }"
  aria-labelledby="FullscreenExample1"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  fullscreen="sm"
  :visible="fullscreenSmDemo"
  @close="() => { fullscreenSmDemo = false }"
  aria-labelledby="FullscreenExample2"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  fullscreen="md"
  :visible="fullscreenMdDemo"
  @close="() => { fullscreenMdDemo = false }"
  aria-labelledby="FullscreenExample3"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  fullscreen="lg"
  :visible="fullscreenLgDemo"
  @close="() => { fullscreenLgDemo = false }"
  aria-labelledby="FullscreenExample4"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  fullscreen="xl"
  :visible="fullscreenXlDemo"
  @close="() => { fullscreenXlDemo = false }"
  aria-labelledby="FullscreenExample5"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal
  fullscreen="xxl"
  :visible="fullscreenXxlDemo"
  @close="() => { fullscreenXxlDemo = false }"
  aria-labelledby="FullscreenExample6"
>
  <CModalHeader>
    <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
:::
```vue
<script setup>
  import { ref } from 'vue'
  const fullscreenDemo = ref(false)
  const fullscreenSmDemo = ref(false)
  const fullscreenMdDemo = ref(false)
  const fullscreenLgDemo = ref(false)
  const fullscreenXlDemo = ref(false)
  const fullscreenXxlDemo = ref(false)
</script>
<template>
  <CButton color="primary" @click="() => { fullscreenDemo = true }">Full screen</CButton>
  <CButton color="primary" @click="() => { fullscreenSmDemo = true }">Full screen below sm</CButton>
  <CButton color="primary" @click="() => { fullscreenMdDemo = true }">Full screen below md</CButton>
  <CButton color="primary" @click="() => { fullscreenLgDemo = true }">Full screen below lg</CButton>
  <CButton color="primary" @click="() => { fullscreenXlDemo = true }">Full screen below xl</CButton>
  <CButton color="primary" @click="() => { fullscreenXxlDemo = true }">Full screen below xxl</CButton>
  <CModal
    fullscreen
    :visible="fullscreenDemo"
    @close="() => { fullscreenDemo = false }"
    aria-labelledby="FullscreenExample1"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample1">Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    fullscreen="sm"
    :visible="fullscreenSmDemo"
    @close="() => { fullscreenSmDemo = false }"
    aria-labelledby="FullscreenExample2"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample2">Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    fullscreen="md"
    :visible="fullscreenMdDemo"
    @close="() => { fullscreenMdDemo = false }"
    aria-labelledby="FullscreenExample3"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample3">Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    fullscreen="lg"
    :visible="fullscreenLgDemo"
    @close="() => { fullscreenLgDemo = false }"
    aria-labelledby="FullscreenExample4"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample4">Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    fullscreen="xl"
    :visible="fullscreenXlDemo"
    @close="() => { fullscreenXlDemo = false }"
    aria-labelledby="FullscreenExample5"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample5">Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal
    fullscreen="xxl"
    :visible="fullscreenXxlDemo"
    @close="() => { fullscreenXxlDemo = false }"
    aria-labelledby="FullscreenExample6"
  >
    <CModalHeader>
      <CModalTitle id="FullscreenExample6">Full screen below xxl</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
</template>
```

## Customizing

### CSS variables

Vue modals use local CSS variables on `.modal` and `.modal-backdrop` for enhanced real-time customization. Values for the CSS variables are set via Sass, so Sass customization is still supported, too.

<ScssDocs file="_modal.scss" capture="modal-css-vars"/>

<ScssDocs file="_modal.scss" capture="modal-backdrop-css-vars"/>

#### How to use CSS variables

```js
const vars = { 
  '--my-css-var': 10,
  '--my-another-css-var': "red" 
}
return <CModal :style="vars">...</CModal>
```

### SASS variables

<ScssDocs file="_variables.scss" capture="modal-variables"/>

### SASS loops

[Responsive fullscreen modals](#fullscreen-modal) are generated via the `$breakpoints` map and a loop in `scss/_modal.scss`.

<ScssDocs file="_modal.scss" capture="modal-fullscreen-loop"/>

## API

!!!include(./api/modal/CModal.api.md)!!!

!!!include(./api/modal/CModalHeader.api.md)!!!

!!!include(./api/modal/CModalTitle.api.md)!!!

<script setup>
  import { ref } from 'vue'
  const visibleLiveDemo = ref(false)
  const visibleStaticBackdropDemo = ref(false)
  const visibleScrollingLongContentDemo = ref(false)
  const visibleScrollableDemo = ref(false)
  const visibleVerticallyCenteredDemo = ref(false)
  const visibleVerticallyCenteredScrollableDemo = ref(false)
  const visibleTooltipsAndPopoversDemo = ref(false)
  const visibleToggleBetweenModalsDemo1 = ref(false)
  const visibleToggleBetweenModalsDemo2 = ref(false)
  const xlDemo = ref(false)
  const lgDemo = ref(false)
  const smDemo = ref(false)
  const fullscreenDemo = ref(false)
  const fullscreenSmDemo = ref(false)
  const fullscreenMdDemo = ref(false)
  const fullscreenLgDemo = ref(false)
  const fullscreenXlDemo = ref(false)
  const fullscreenXxlDemo = ref(false)
</script>
