<template>
  <CAlert color="success">
    <CAlertHeading>Well done!</CAlertHeading>

    <p>
      Aww yeah, you successfully read this important alert message. This example text is going to
      run a bit longer so that you can see how spacing within an alert works with this kind of
      content.
    </p>
    <hr />
    <p class="mb-0">
      Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
    </p>
  </CAlert>
</template>

<script setup>
import { CAlert, CAlertHeading } from '@coreui/vue'
const message = () => {
  alert('👋 Well, hi there! Thanks for dismissing me.')
}
</script>
