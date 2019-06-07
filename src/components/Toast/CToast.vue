<template>
  <transition
    :name="0 ? null : 'fade'"
    :appear="true"
    v-if="!isClosed"
  >
    <div
      :class="[toastClasses]"
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      style="z-index:1100"
      :style="computedStyles"
    >
      <div v-if="!props.noHeader" class="c-toast-header">
        <strong class="c-mr-auto" v-html="props.titleHtml"></strong>
        <CButtonClose
          v-if="!props.noCloseButton"
          @click="close()"
          class="c-ml-2 c-mb-1"
        />
      </div>
      <slot :close="close">
        <div class="c-toast-body" v-html="props.bodyHtml">
        </div>
      </slot>
    </div>
  </transition>
</template>

<script>
import toastMixin from './toastMixin'
import CButtonClose from '../Button/CButtonClose'

export default {
  name: 'CToast',
  mixins: [ toastMixin ],
  inject: {
    toaster: {
      default: false
    }
  },
  data () {
    return {
      isClosed: false,
      timeout: null
    }
  },
  mounted () {
    if (this.props.autohide) {
      this.setAutohide()
    }
  },
  computed: {
    toastClasses () {
      return ['c-toast',
        {
          'c-show': this.props.show,
          'c-full': this.props.position.includes('full')
        }
      ]
    },
    props () {
      return Object.keys(toastMixin.props).reduce((props, key) => {
        const propUndefined = !Object.keys(this.$options.propsData).includes(key)
        const propInheritedFromToaster = propUndefined && this.toaster.props[key]
        props[key] = propInheritedFromToaster ? this.toaster.props[key] : this[key]
        return props
      }, {})
    }
  },
  methods: {
    close () {
      this.isClosed = true
      this.$el.removeEventListener('mouseover', this.onHover)
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
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  @import "~@coreui/coreui/scss/partials/toasts.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";

</style>
