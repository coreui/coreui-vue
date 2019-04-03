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
            <slot name="body">
                <slot></slot>
            </slot>
          </div>
          <div v-if="!noFooter" class="modal-footer">
            <slot name="footer" :hide="hide">
                <button
                  type="button"
                  class="btn btn-secondary" @click="hide()"
                >
                  Close
                </button>
                <button
                  type="button"
                  :class="btnClasses"
                  @click="hide()"
                >
                  OK
                </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
    <div
      v-if="!noBackdrop && (is_visible || is_transitioning)"
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
    size: String,
    variant: String,
    borderVariant: String,
    noFade: Boolean,
    noBackdrop: Boolean,
    noCloseOnBackdrop: Boolean,
    noHeader: Boolean,
    noBody: Boolean,
    noFooter: Boolean,
    addModalClasses: String,
    addDialogClasses: String,
    addContentClasses: String
  },
  data () {
    return {
      is_visible: this.visible,
      is_transitioning: false,
      timeout: null,
    }
  },
  computed: {
    backdropClasses () {
      return {
        'modal-backdrop': true,
        fade: !this.noFade,
        show: this.is_visible || this.noFade
      }
    },
    modalClasses () {
      return [
        'modal overflow-auto',
        this.addModalClasses,
        {
          closeModal: !this.noCloseOnBackdrop,
          fade: !this.noFade,
          show: this.is_visible,
          'd-block': this.is_visible || this.is_transitioning,
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
    visible (newVal, oldVal) {
      if (newVal === oldVal) return
      this.toggle(newVal)
    }
  },
  methods: {
    modalClick (e) {
      if(e.target === this.$el.firstElementChild && !this.noCloseOnBackdrop)
        this.hide()
    },
    hide () {
      this.$emit('update:visible', false)
    },
    toggle (newVal) {
      setTimeout(() => { this.is_visible = newVal }, 0)
      if (!this.noFade) {
        this.is_transitioning = true
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.is_transitioning = false
        }, 150)
      }
    }
  }
}
</script>
