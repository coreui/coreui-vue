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
          <div v-if="!noHeader" class="modal-header" >
            <slot name="header" :hide="hide">
                <h5 class="modal-title">
                  {{title}}
                </h5>
                <button
                  type="button"
                  class="close"
                  aria-label="Close"
                  @click="hide()"
                >
                  <span>&times;</span>
                </button>
            </slot>
          </div>
          <div v-if="!noBody" class="modal-body">
            <slot :hide="hide"></slot>
          </div>
          <div v-if="!noFooter" class="modal-footer">
            <slot name="footer" :hide="hide">
              <button
                type="button"
                class="btn btn-secondary" @click="hide()"
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
        'modal-backdrop': true,
        'fade': !this.noFade,
        'show': this.isVisible || this.noFade
      }
    },
    modalClasses () {
      return [
        'modal overflow-auto',
        this.addModalClasses,
        {
          // 'close-modal': !this.noCloseOnBackdrop,
          'fade': !this.noFade,
          'show': this.isVisible,
          'd-block': this.isVisible || this.isTransitioning,
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
