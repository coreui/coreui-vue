<template>
  <div @click="checkHide($event)">
    <div :class="modalClasses" tabindex="-1" role="dialog" style="overflow-y:scroll">
      <div :class="dialogClasses" role="document">
        <div :class="contentClasses">
          <slot name="header">
            <div class="modal-header" v-if="!noHeader" style="border-bottom:none !important">
              <h5 class="modal-title">{{title}}</h5>
              <button type="button" class="close" aria-label="Close" @click="hide()">
                <span>&times;</span>
              </button>
            </div>
          </slot>
          <slot name="body" v-if="!noBody">
            <div class="modal-body">
              <slot></slot>
            </div>
          </slot>
          <slot name="footer" v-if="!noFooter">
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" @click="hide()">Close</button>
              <button type="button" :class="btnClasses" @click="hide()">OK</button>
            </div>
          </slot>
        </div>
      </div>
    </div>
    <div :class="backdropClasses" v-if="!noBackdrop && (is_visible || is_transitioning)">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CModal',
  // components: { BButton, BButtonClose },
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    visible: Boolean,
    centered: Boolean,
    noFade: Boolean,
    noBackdrop: Boolean,
    noCloseOnBackdrop: Boolean,
    noHeader: Boolean,
    noBody: Boolean,
    noFooter: Boolean,
    title: String,
    size: String,
    variant: String,
    borderVariant: String,
    addModalClasses: String,
    addDialogClasses: String,
    addContentClasses: String
  },
  data () {
    return {
      is_visible: false,
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
        'modal',
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
      if (newVal === oldVal)
        return
      this.toggle(newVal)
    }
  },
  methods: {
    checkHide (e) {
      if(e.target.classList.contains('closeModal'))
        this.hide()
    },
    hide () {
      this.$emit('change', false)
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
