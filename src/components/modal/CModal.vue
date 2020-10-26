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
          <slot name="header-wrapper">
            <header class="modal-header">
              <slot name="header">
                <h5 class="modal-title">
                  {{title}}
                </h5>
                <CButtonClose @click="hide($event)"/>
              </slot>
            </header>
          </slot>
          <slot name="body-wrapper">
            <div class="modal-body">
              <slot></slot>
            </div>
          </slot>
          <slot name="footer-wrapper">
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
                  @click="hide($event, true)"
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
      v-if="backdrop && (visible || isTransitioning)"
      :class="backdropClasses"
    >
    </div>
  </div>
</template>

<script>
import CButtonClose from '../button/CButtonClose'

export default {
  name: 'CModal',
  components: {
    CButtonClose
  },
  props: {
    show: Boolean,
    centered: Boolean,
    title: String,
    size: {
      type: String,
      validator: val => ['', 'sm', 'lg', 'xl'].includes(val)
    },
    color: String,
    borderColor: String,
    fade: {
      type: Boolean,
      default: true
    },
    backdrop: {
      type: Boolean,
      default: true
    },
    closeOnBackdrop: {
      type: Boolean,
      default: true
    },
    addContentClasses: [String, Array, Object],
    onKey: Function,
  },
  data () {
    return {
      visible: this.show,
      isTransitioning: false,
      timeout: null
    }
  },
  computed: {
    backdropClasses () {
      return {
        'modal-backdrop': true,
        'fade': this.fade,
        'show': this.visible || !this.fade
      }
    },
    modalClasses () {
      return [
        'modal overflow-auto',
        {
          'fade': this.fade,
          'show': this.visible,
          'd-block': this.visible || this.isTransitioning,
          [`modal-${this.color}`]: this.color
        }
      ]
    },
    dialogClasses () {
      return [
        'modal-dialog',
        {
          'modal-dialog-centered': this.centered,
          [`modal-${this.size}`]: this.size
        }
      ]
    },
    contentClasses () {
      return [
        this.addContentClasses,
        'modal-content',
        {
          [`border-${this.borderColor}`]: this.borderColor
        }
      ]
    },
    btnClasses () {
      return [`btn btn-${this.color || 'primary'}`]
    }
  },
  watch: {
    show (val) {
      this.toggle(val)
    }
  },
  methods: {
    modalClick (e) {
      if (e.target === this.$el.firstElementChild && this.closeOnBackdrop) {
        this.hide(e)
      }
    },
    hide (e, accept = false) {
      this.$emit('update:show', false, e, accept)
      if(this.visible){
        window.removeEventListener("keydown", this.hideEsc ); 
      }
    },
    hideEsc (event){
      if(typeof this.onKey != 'undefined'){
        if(this.onKey('', event.keyCode)!==false){
          this.hide(event)
        }
      }else{
        if(event.keyCode == '27'){
          this.hide(event)
        }
      }
    },
    toggle (newVal) {
      setTimeout(() => { this.visible = newVal }, 0)
      if(newVal){
        window.addEventListener('keydown', this.hideEsc );
      }
      if (this.fade) {
        this.isTransitioning = true
        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          this.isTransitioning = false
        }, 150)
      }
    }
  },
  mounted: function(){
    if(this.show){
      window.addEventListener('keydown', this.hideEsc );
    }
  }
}
</script>
