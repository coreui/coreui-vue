<template>
  <CTeleport
    v-if="isTeleported"
    :object="$options.object"
    destroyFunctionName="close"
    :container="container"
    v-bind="$attrs"
  >
    <slot></slot>
  </CTeleport>
  <Toaster
    v-else
    v-bind="$attrs"
  >
    <slot></slot>
  </Toaster>
</template>

<script>
import CTeleport from './CTeleport'
import Toaster from './Toaster'
export default {
  name: 'CToaster',
  object: Toaster,
  props: {
    container: [String, Object, HTMLElement],
  },
  computed: {
    isTeleported () {
      return this.container !== 'noTeleport'
    }
  }
}
</script>
