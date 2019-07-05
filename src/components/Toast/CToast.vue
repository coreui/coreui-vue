<template>
  <div
    :class="toastClasses"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :style="computedStyles"
    v-if="isShowed"
  >
    <div v-if="!props.noHeader" class="c-toast-header">
      <slot name="title">
        <strong class="c-mr-auto" v-html="props.titleHtml"></strong>
      </slot>
      <CButtonClose
        v-if="!props.noCloseButton"
        @click="close()"
        class="c-ml-2 c-mb-1"
      />
    </div>
    <slot>
      <div class="c-toast-body" v-html="props.bodyHtml"></div>
    </slot>
  </div>
</template>

<script>
import toastMixin from './toastMixin'
import CButtonClose from '../Button/CButtonClose'
const props = Object.assign({}, toastMixin.props, {
  show: Boolean
})

export default {
  name: 'CToast',
  mixins: [ toastMixin ],
  props,
  components: {
    CButtonClose
  },
  inject: {
    toaster: {
      default: false
    }
  },
  data () {
    return {
      isShowed: this.show,
      timeout: null
    }
  },
  watch: {
    show (val) {
      this.isShowed = val
    }
  },
  mounted () {
    if (this.props.autohide) {
      this.setAutohide()
    }
  },
  computed: {
    toastClasses () {
      return [
        'c-toast',
        {
          'c-show': this.isShowed,
          'c-full': this.props.position.includes('full')
        }
      ]
    },
    directlyDeclaredProps () {
      return Object.keys(this.$options.propsData)
    },
    injectedProps () {
      return this.toaster && this.toaster.props ? this.toaster.props : {}
    },
    props () {
      return Object.keys(toastMixin.props).reduce((computedProps, key) => {
        const propIsDirectlyDeclared = this.directlyDeclaredProps.includes(key)
        const parentPropExists = this.injectedProps[key] !== undefined
        const propIsInherited = parentPropExists && !propIsDirectlyDeclared
        computedProps[key] = propIsInherited ? this.injectedProps[key] : this[key]
        return computedProps
      }, {})
    }
  },
  methods: {
    close () {
      this.isShowed = false
      this.$emit('update:show', false)
      this.$el.removeEventListener('mouseover', this.onHover)
      this.$el.removeEventListener('mouseout', this.onHoverOut)
    },
    onHover () {
      this.$el.removeEventListener('mouseover', this.onHover)
      clearTimeout(this.timeout)
      this.$el.addEventListener('mouseout', this.onHoverOut)
    },
    onHoverOut () {
      this.$el.removeEventListener('mouseout', this.onHoverOut)
      this.setAutohide()
    },
    setAutohide () {
      this.timeout = setTimeout(() => {
        this.close()
      }, this.props.autohide)
      this.$el.addEventListener('mouseover', this.onHover)
    }
  }
}
</script>

<style lang="scss">
  .toast.full {
    max-width: 100%;
  }
  @import "~@coreui/coreui/scss/partials/toasts.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";

</style>
