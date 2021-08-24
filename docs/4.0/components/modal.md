---
title: Vue Modal Component
name: Modal
description: Vue Modal component offers a lightweight, multi-purpose popup to add dialogs to yours. Learn how to customize Vue CoreUI Modals easily. Multiple examples and tutorial.
---

## Examples

### Modal components

Below is a static modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

::: demo
<CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
  <CModalHeader dismiss>
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
<CModal class="show d-block position-static" :backdrop="false" :keyboard="false" visible>
  <CModalHeader dismiss>
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
<CModal :visible="visibleLiveDemo" @dismiss="() => { visibleLiveDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleLiveDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleLiveDemo = true }">Launch demo modal</CButton>
  <CModal :visible="visibleLiveDemo" @dismiss="() => { visibleLiveDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleLiveDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleLiveDemo: false,
      }
    }
  }
</script>
```


### Static backdrop

If you set `backdrop` property to `static`, your modal will behave as though the backdrop is static, meaning it will not close when clicking outside it. Click the button below to try it.

::: demo
<CButton color="primary" @click="() => { visibleStaticBackdropDemo = true }">Launch static backdrop modal</CButton>
<CModal backdrop="static" :visible="visibleStaticBackdropDemo" @dismiss="() => { visibleStaticBackdropDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleStaticBackdropDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleStaticBackdropDemo = true }">Launch demo modal</CButton>
  <CModal backdrop="static" :visible="visibleStaticBackdropDemo" @dismiss="() => { visibleStaticBackdropDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleStaticBackdropDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleStaticBackdropDemo: false,
      }
    }
  }
</script>
```

### Scrolling long content

When modals become too long for the user's viewport or device, they scroll independent of the page itself. Try the demo below to see what we mean.

::: demo
<CButton color="primary" @click="() => { visibleScrollingLongContentDemo = true }">Launch static backdrop modal</CButton>
<CModal :visible="visibleScrollingLongContentDemo" @dismiss="() => { visibleScrollingLongContentDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleScrollingLongContentDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleScrollingLongContentDemo = true }">Launch demo modal</CButton>
  <CModal :visible="visibleScrollingLongContentDemo" @dismiss="() => { visibleScrollingLongContentDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleScrollingLongContentDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleScrollingLongContentDemo: false,
      }
    }
  }
</script>
```

You can also create a scrollable modal that allows scroll the modal body by adding `scrollable` prop.

::: demo
<CButton color="primary" @click="() => { visibleScrollableDemo = true }">Launch static backdrop modal</CButton>
<CModal scrollable :visible="visibleScrollableDemo" @dismiss="() => { visibleScrollableDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleScrollableDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleScrollableDemo = true }">Launch demo modal</CButton>
  <CModal scrollable :visible="visibleScrollableDemo" @dismiss="() => { visibleScrollableDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleScrollableDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleScrollableDemo: false,
      }
    }
  }
</script>
```

### Vertically centered

Add `alignment="center` to `<CModal>` to vertically center the modal.

::: demo
<CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Vertically centered modal</CButton>
<CModal alignment="center" :visible="visibleVerticallyCenteredDemo" @dismiss="() => { visibleVerticallyCenteredDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleVerticallyCenteredDemo = true }">Launch demo modal</CButton>
  <CModal alignment="center" :visible="visibleVerticallyCenteredDemo" @dismiss="() => { visibleVerticallyCenteredDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleVerticallyCenteredDemo: false,
      }
    }
  }
</script>
```

::: demo
<CButton color="primary" @click="() => { visibleVerticallyCenteredScrollableDemo = true }">Vertically centered scrollable modal</CButton>
<CModal alignment="center" scrollable :visible="visibleVerticallyCenteredScrollableDemo" @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
  <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
``` vue
<template>
  <CButton color="primary" @click="() => { visibleVerticallyCenteredScrollableDemo = true }">Vertically centered scrollable modal</CButton>
  <CModal alignment="center" scrollable :visible="visibleVerticallyCenteredScrollableDemo" @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
    <CModalHeader dismiss @dismiss="() => { visibleVerticallyCenteredScrollableDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
<script>
  export default {
    data() {
      return { 
        visibleVerticallyCenteredScrollableDemo: false,
      }
    }
  }
</script>
```

### Tooltips and popovers

`<CTooltips>` and `<CPopovers>` can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

::: demo
<CButton color="primary" @click="() => { tooltipsAndPopoversDemo = true }">Launch demo modal</CButton>
<CModal :visible="tooltipsAndPopoversDemo" @dismiss="() => { tooltipsAndPopoversDemo = false }">
  <CModalHeader dismiss @dismiss="() => { tooltipsAndPopoversDemo = false }">
    <CModalTitle>Modal title</CModalTitle>
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
    <CButton color="secondary" @click="() => { tooltipsAndPopoversDemo = false }">
      Close
    </CButton>
    <CButton color="primary">Save changes</CButton>
  </CModalFooter>
</CModal>
:::
``` vue
<template>
  <CButton color="primary" @click="() => { tooltipsAndPopoversDemo = true }">Launch demo modal</CButton>
  <CModal :visible="tooltipsAndPopoversDemo" @dismiss="() => { tooltipsAndPopoversDemo = false }">
    <CModalHeader dismiss @dismiss="() => { tooltipsAndPopoversDemo = false }">
      <CModalTitle>Modal title</CModalTitle>
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
      <CButton color="secondary" @click="() => { tooltipsAndPopoversDemo = false }">
        Close
      </CButton>
      <CButton color="primary">Save changes</CButton>
    </CModalFooter>
  </CModal>
</template>
<script>
  export default {
    data() {
      return { 
        tooltipsAndPopoversDemo: false,
      }
    }
  }
</script>
```


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
      <td class="text-muted">None</td>
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
<CModal size="xl" :visible="xlDemo" @dismiss="() => { xlDemo = false }">
  <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
    <CModalTitle>Extra large modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal size="lg" :visible="lgDemo" @dismiss="() => { lgDemo = false }">
  <CModalHeader dismiss @dismiss="() => { lgDemo = false }">
    <CModalTitle>Large modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal size="sm" :visible="smDemo" @dismiss="() => { smDemo = false }">
  <CModalHeader dismiss @dismiss="() => { smDemo = false }">
    <CModalTitle>Small modal</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
:::
``` vue
<template>
  <CButton color="primary" @click="() => { xlDemo = true }">Extra large modal</CButton>
  <CButton color="primary" @click="() => { lgDemo = true }">Large modal</CButton>
  <CButton color="primary" @click="() => { smDemo = true }">Small modal</CButton>
  <CModal size="xl" :visible="xlDemo" @dismiss="() => { xlDemo = false }">
    <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
      <CModalTitle>Extra large modal</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal size="lg" :visible="lgDemo" @dismiss="() => { lgDemo = false }">
    <CModalHeader dismiss @dismiss="() => { lgDemo = false }">
      <CModalTitle>Large modal</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal size="sm" :visible="smDemo" @dismiss="() => { smDemo = false }">
    <CModalHeader dismiss @dismiss="() => { smDemo = false }">
      <CModalTitle>Small modal</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
</template>
<script>
  export default {
    data() {
      return { 
        xlDemo: false,
        lgDemo: false,
        smDemo: false,
      }
    }
  }
</script>
```

## Fullscreen Modal

Another override is the option to pop up a modal that covers the user viewport, available via property `fullscrean`.

<table class="table">
  <thead>
    <tr>
      <th>Property fullscrean</th>
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
<CModal fullscreen :visible="fullscreenDemo" @dismiss="() => { fullscreenDemo = false }">
  <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
    <CModalTitle>Full screen</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal fullscreen="sm" :visible="fullscreenSmDemo" @dismiss="() => { fullscreenSmDemo = false }">
  <CModalHeader dismiss @dismiss="() => { fullscreenSmDemo = false }">
    <CModalTitle>Full screen below sm</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal fullscreen="md" :visible="fullscreenMdDemo" @dismiss="() => { fullscreenMdDemo = false }">
  <CModalHeader dismiss @dismiss="() => { fullscreenMdDemo = false }">
    <CModalTitle>Full screen below md</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal fullscreen="lg" :visible="fullscreenLgDemo" @dismiss="() => { fullscreenLgDemo = false }">
  <CModalHeader dismiss @dismiss="() => { fullscreenLgDemo = false }">
    <CModalTitle>Full screen below lg</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal fullscreen="xl" :visible="fullscreenXlDemo" @dismiss="() => { fullscreenXlDemo = false }">
  <CModalHeader dismiss @dismiss="() => { fullscreenXlDemo = false }">
    <CModalTitle>Full screen below xl</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
<CModal fullscreen="xxl" :visible="fullscreenXxlDemo" @dismiss="() => { fullscreenXxlDemo = false }">
  <CModalHeader dismiss @dismiss="() => { fullscreenXxlDemo = false }">
    <CModalTitle>Full screen below xxl</CModalTitle>
  </CModalHeader>
  <CModalBody>
    ...
  </CModalBody>
</CModal>
:::
``` vue
<template>
  <CButton color="primary" @click="() => { fullscreenDemo = true }">Full screen</CButton>
  <CButton color="primary" @click="() => { fullscreenSmDemo = true }">Full screen below sm</CButton>
  <CButton color="primary" @click="() => { fullscreenMdDemo = true }">Full screen below md</CButton>
  <CButton color="primary" @click="() => { fullscreenLgDemo = true }">Full screen below lg</CButton>
  <CButton color="primary" @click="() => { fullscreenXlDemo = true }">Full screen below xl</CButton>
  <CButton color="primary" @click="() => { fullscreenXxlDemo = true }">Full screen below xxl</CButton>
  <CModal fullscreen :visible="fullscreenDemo" @dismiss="() => { fullscreenDemo = false }">
    <CModalHeader dismiss @dismiss="() => { xlDemo = false }">
      <CModalTitle>Full screen</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal fullscreen="sm" :visible="fullscreenSmDemo" @dismiss="() => { fullscreenSmDemo = false }">
    <CModalHeader dismiss @dismiss="() => { fullscreenSmDemo = false }">
      <CModalTitle>Full screen below sm</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal fullscreen="md" :visible="fullscreenMdDemo" @dismiss="() => { fullscreenMdDemo = false }">
    <CModalHeader dismiss @dismiss="() => { fullscreenMdDemo = false }">
      <CModalTitle>Full screen below md</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal fullscreen="lg" :visible="fullscreenLgDemo" @dismiss="() => { fullscreenLgDemo = false }">
    <CModalHeader dismiss @dismiss="() => { fullscreenLgDemo = false }">
      <CModalTitle>Full screen below lg</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal fullscreen="xl" :visible="fullscreenXlDemo" @dismiss="() => { fullscreenXlDemo = false }">
    <CModalHeader dismiss @dismiss="() => { fullscreenXlDemo = false }">
      <CModalTitle>Full screen below xl</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
  <CModal fullscreen="xxl" :visible="fullscreenXxlDemo" @dismiss="() => { fullscreenXxlDemo = false }">
    <CModalHeader dismiss @dismiss="() => { fullscreenXxlDemo = false }">
      <CModalTitle>Full screen below xxl</CModalTitle>
    </CModalHeader>
    <CModalBody>
      ...
    </CModalBody>
  </CModal>
</template>
<script>
  export default {
    data() {
      return { 
        fullscreenDemo: false,
        fullscreenSmDemo: false,
        fullscreenMdDemo: false,
        fullscreenLgDemo: false,
        fullscreenXlDemo: false,
        fullscreenXxlDemo: false,
      }
    }
  }
</script>
```

<script>
  export default {
    data() {
      return { 
        visibleLiveDemo: false,
        visibleStaticBackdropDemo: false,
        visibleScrollingLongContentDemo: false,
        visibleScrollableDemo: false,
        visibleVerticallyCenteredDemo: false,
        visibleVerticallyCenteredScrollableDemo: false,
        tooltipsAndPopoversDemo: false,
        xlDemo: false,
        lgDemo: false,
        smDemo: false,
        fullscreenDemo: false,
        fullscreenSmDemo: false,
        fullscreenMdDemo: false,
        fullscreenLgDemo: false,
        fullscreenXlDemo: false,
        fullscreenXxlDemo: false,
      }
    }
  }
</script>

## API

!!!include(./docs/4.0/api/modal/CModal.api.md)!!!

!!!include(./docs/4.0/api/modal/CModalHeader.api.md)!!!

!!!include(./docs/4.0/api/modal/CModalTitle.api.md)!!!