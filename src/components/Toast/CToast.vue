<template>
  <div
    v-if="this.isShowed || this.hidding"
    :class="toastClasses"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    :style="computedStyles"
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

export default {
  name: 'CToast',
  mixins: [ toastMixin ],
  props: {
    show: Boolean
  },
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
      isShowed: false,
      hidding: false,
      timeout: null
    }
  },
  watch: {
    show : {
      immediate: true,
      handler (val) {
        this.$nextTick(() => {
          val ? this.display() : this.close()
        })
      }
    }
  },
  computed: {
    toastClasses () {
      return [
        'c-toast',
        {
          'c-show': this.isShowed,
          'c-full': this.props.position.includes('full'),
          'c-fade': !this.props.noFade
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
    display () {
      this.isShowed = true
      if (this.props.autohide) {
        this.$nextTick(() => this.setAutohide())
      }
    },
    autohideClose () {
      this.close()
      if (!this.noFade) {
        this.$el.addEventListener('mouseover', this.restoreHiddingToast)
        setTimeout(() => {
          this.$el.removeEventListener('mouseover', this.restoreHiddingToast)
        }, this.props.autohide)
      }
    },
    close () {
      this.isShowed = false
      this.$emit('update:show', false)
      this.$el.removeEventListener('mouseout', this.onHoverOut)
      this.$el.removeEventListener('mouseover', this.onHover)
      if (!this.props.noFade) {
        this.hidding = true
         setTimeout(() => this.hidding = false, 1500)
      }
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
        this.autohideClose()
      }, this.props.autohide)
      this.$el.addEventListener('mouseover', this.onHover)
    },
    restoreHiddingToast () {
      this.hidding = false
      this.isShowed = true
      this.onHover()
    }
  }
}
</script>

<style lang="scss">
  .toast.full {
    max-width: 100%;
  }
  .c-toast:last-child {
    margin-bottom: 0.75rem;
  }
  .c-toast.c-fade {
    transition: opacity 2s;
  }
  .c-toast.c-fade.c-show {
    transition: opacity 0.5s;
  }
  @import "~@coreui/coreui/scss/partials/toasts.scss";
  @import "~@coreui/coreui/scss/utilities/_spacing.scss";

</style>
