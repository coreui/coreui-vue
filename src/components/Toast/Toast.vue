<template>
  <div
    :class="[toastClasses]"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    style="z-index:1100"
    :style="computedPosition"
  >
    <div v-if="!noHeader" class="toast-header">
      <strong class="mr-auto" v-html="titleHtml"></strong>
      <CButtonClose @click="close()" class="ml-2 mb-1"/>
    </div>
    <slot>
      <div class="toast-body" v-html="bodyHtml">
      </div>
    </slot>
  </div>
</template>

<script>
import computedPosition from './computedPosition'
import CButtonClose from '../Button/CButtonClose'

export default {
  name: 'Toast',
  mixins: [computedPosition],
  props: {
    show: Boolean,
    noHeader: Boolean,
    titleHtml: {
      type: String,
      default: 'CToast component'
    },
    bodyHtml: {
      type: String,
      default: 'Hello, world! This is a <b>toast</b> message.'
    },
  },
  computed: {
    toastClasses () {
      return [ 'toast',
        {
          'show': this.show,
          'full': this.position.includes('full')
        }
      ]
    }
  },
  methods: {
    close () {
      this.$el.parentElement.removeChild(this.$el)
      this.$destroy()
    }
  }
}
</script>

<style scoped>
  .toast.full {
    max-width: 100%;
  }
</style>
