<template>
  <div>
    <div
      :class="modalClasses"
      tabindex="-1"
      role="dialog"
      @click="modalClick($event)"
    >
      <div :class="dialogClasses" role="document">
        <div :class="contentClasses">
          <div v-if="!noHeader" class="c-modal-header" >
            <slot name="header" :hide="hide">
                <h5 class="c-modal-title">
                  {{title}}
                </h5>
                <button
                  type="button"
                  class="c-close"
                  aria-label="Close"
                  @click="hide()"
                >
                  <span>&times;</span>
                </button>
            </slot>
          </div>
          <div v-if="!noBody" class="c-modal-body">
            <slot :hide="hide"></slot>
          </div>
          <div v-if="!noFooter" class="c-modal-footer">
            <slot name="footer" :hide="hide">
              <button
                type="button"
                class="c-btn c-btn-secondary" @click="hide()"
              >
                Cancel
              </button>
              <button
                type="button"
                :class="btnClasses"
                @click="hide(true)"
              >
                OK
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!noBackdrop && (isVisible || isTransitioning)"
      :class="backdropClasses"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CModal',
  props: {
    visible: Boolean,
    centered: Boolean,
    title: String,
    size: {
      type: String,
      validator: val => ['', 'sm', 'lg'].includes(val)
    },
    variant: String,
    borderVariant: String,
    noFade: Boolean,
    noBackdrop: Boolean,
    noCloseOnBackdrop: Boolean,
    noHeader: Boolean,
    noBody: Boolean,
    noFooter: Boolean,
    addModalClasses: [String, Array, Object],
    addDialogClasses: [String, Array, Object],
    addContentClasses: [String, Array, Object]
  },
  data () {
    return {
      isVisible: this.visible,
      isTransitioning: false,
      timeout: null,
    }
  },
  computed: {
    backdropClasses () {
      return {
        'c-modal-backdrop': true,
        'c-fade': !this.noFade,
        'c-show': this.isVisible || this.noFade
      }
    },
    modalClasses () {
      return [
        'c-modal c-overflow-auto',
        this.addModalClasses,
        {
          // 'c-close-modal': !this.noCloseOnBackdrop,
          'c-fade': !this.noFade,
          'c-show': this.isVisible,
          'c-d-block': this.isVisible || this.isTransitioning,
          [`c-modal-${this.variant}`]: Boolean(this.variant)
        }
      ]
    },
    dialogClasses () {
      return [
        this.addDialogClasses,
        'c-modal-dialog',
        {
          'c-modal-dialog-centered': this.centered,
          [`c-modal-${this.size}`]: Boolean(this.size),
        }
      ]
    },
    contentClasses () {
      return [
        this.addContentClasses,
        'c-modal-content',
        {
          [`c-border-${this.borderVariant}`]: Boolean(this.borderVariant),
        }
      ]
    },
    btnClasses () {
      return [`c-btn c-btn-${this.variant || 'primary'}`]
    }
  },
  watch: {
    visible (val) {
      this.toggle(val)
    }
  },
  methods: {
    modalClick (e) {
      if (e.target === this.$el.firstElementChild && !this.noCloseOnBackdrop) {
        this.hide()
      }
    },
    hide (accepted = false) {
      this.$emit('update:visible', false)
      this.$emit('accepted', accepted)
    },
    toggle (newVal) {
      setTimeout(() => { this.isVisible = newVal }, 0)
      if (!this.noFade) {
        this.isTransitioning = true
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isTransitioning = false
        }, 150)
      }
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/modal.scss";
  @import "~@coreui/coreui/scss/partials/buttons.scss";
  @import "~@coreui/coreui/scss/partials/close.scss";
  @import "~@coreui/coreui/scss/utilities/_borders.scss";
  @import "~@coreui/coreui/scss/utilities/_display.scss";
  @import "~@coreui/coreui/scss/utilities/_overflow.scss";
</style>
