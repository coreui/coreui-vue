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
          <slot v-if="!noHeader" name="header-wrapper"
          >
            <header  class="modal-header">
              <slot name="header">
                <h5 class="modal-title">
                  {{title}}
                </h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="hide($event)"
                >
                  <span>&times;</span>
                </button>
              </slot>
            </header>
          </slot>
          <slot v-if="!noBody" name="body-wrapper">
            <div class="modal-body">
              <slot></slot>
            </div>
          </slot>
          <slot v-if="!noFooter" name="footer-wrapper">
            <footer class="modal-footer">
              <slot name="footer">
                <button
                  type="button"
                  class="btn btn-secondary" 
                  @click="hide($event)"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  :class="btnClasses"
                  @click="hide($event)"
                >
                  OK
                </button>
              </slot>
            </footer>
          </slot>
        </div>
      </div>
    </div>
    <div
      v-if="!noBackdrop && (visible || isTransitioning)"
      :class="backdropClasses"
    >
    </div>
  </div>
</template>

<script>
export default {
  name: 'CModal',
  props: {
    show: Boolean,
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
      visible: this.show,
      isTransitioning: false,
      timeout: null,
    }
  },
  computed: {
    backdropClasses () {
      return {
        'modal-backdrop': true,
        'fade': !this.noFade,
        'show': this.visible || this.noFade
      }
    },
    modalClasses () {
      return [
        'modal overflow-auto',
        this.addModalClasses,
        {
          // 'close-modal': !this.noCloseOnBackdrop,
          'fade': !this.noFade,
          'show': this.visible,
          'd-block': this.visible || this.isTransitioning,
          [`modal-${this.variant}`]: Boolean(this.variant)
        }
      ]
    },
    dialogClasses () {
      return [
        this.addDialogClasses,
        'modal-dialog',
        {
          'modal-dialog-centered': this.centered,
          [`modal-${this.size}`]: Boolean(this.size),
        }
      ]
    },
    contentClasses () {
      return [
        this.addContentClasses,
        'modal-content',
        {
          [`border-${this.borderVariant}`]: Boolean(this.borderVariant),
        }
      ]
    },
    btnClasses () {
      return [`btn btn-${this.variant || 'primary'}`]
    }
  },
  watch: {
    show (val) {
      this.toggle(val)
    }
  },
  methods: {
    modalClick (e) {
      if (e.target === this.$el.firstElementChild && !this.noCloseOnBackdrop) {
        this.hide(e)
      }
    },
    hide (e) {
      this.$emit('update:show', false)
      this.$emit('hide', e)
    },
    toggle (newVal) {
      setTimeout(() => { this.visible = newVal }, 0)
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
