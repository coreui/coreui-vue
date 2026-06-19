<template>
  <CCallout color="info">
    <h5>Conveying meaning to assistive technologies</h5>
    <p>
      Using color to add meaning only provides a visual indication, which will not be conveyed to
      users of assistive technologies – such as screen readers. Ensure that information denoted by
      the color is either obvious from the content itself (e.g. the visible text), or is included
      through alternative means, such as additional text hidden with the `.visually-hidden` class.
    </p>
  </CCallout>
</template>

<script setup>
import { CCallout } from '@coreui/vue'
</script>
