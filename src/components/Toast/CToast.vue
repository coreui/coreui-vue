<template>
  <CTeleport
    v-if="isTeleported"
    :object="$options.object"
    destroyFunctionName="close"
    :container="container"
    v-bind="$attrs"
  >
    <slot :close="close"></slot>
  </CTeleport>
  <Toast
    v-else
    :position="position"
    v-bind="$attrs"
  >
    <slot :close="close"></slot>
  </Toast>
</template>

<script>
import CTeleport from './CTeleport'
import Toast from './Toast'
export default {
  name: 'CToast',
  object: Toast,
  props: {
    container: [String, Object, HTMLElement],
  },
  inject: {
    inToaster: {
      default: false
    }
  },
  computed: {
    isTeleported () {
      return this.container !== 'noTeleport' && !this.inToaster
    },
    position () {
      return this.$attrs.position || this.inToaster ? 'block' : null
    }
  },
  methods: {
    close () {
      console.log(this)
      this.$children[0].$destroy()
      // this.$destroy()
    }
  }
}
</script>
