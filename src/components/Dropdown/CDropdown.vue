<script>
import CLink from '../Link/CLink'
import Popper from 'popper.js'
import { mixin as clickaway } from 'vue-clickaway2'
import { deepObjectsMerge } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  name: 'CDropdown',
  mixins: [ clickaway ],
  data () {
    return {
      visible: this.show
    }
  },
  props: {
    buttonHtml: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    dropup: Boolean,
    disabled: Boolean,
    addMenuClasses: [String, Array, Object],
    addButtonClasses: [String, Array, Object],
    nav: Boolean,
    noCaret: Boolean,
    variant: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String,
      validator: val => ['', 'sm', 'lg'].includes(val)
    },
    split: Boolean,
    offset: Number,
    placement: String,
    noFlip: Boolean,
    popperConfig: Object,
    noPopper: Boolean,
  },
  mounted () {
    this.menagePopper()
  },
  methods:{
    hide () {
      if (this.$refs.menu.classList.contains('c-show')) {
        this.toggle(false)
      }
    },
    click (e) {
      e.preventDefault()
      this.toggle(!this.visible)
    },
    toggle (value) {
      if (!this.disabled) {
        setTimeout(() => {
          this.visible = value
          this.menagePopper()
        }, 0)
      }
    },
    menagePopper () {
      if (!this.noPopper) {
        setTimeout(() => {
          this.visible ? this.createPopper() : this.removePopper(), 0
        })
      }
    },
    removePopper () {
      if (this._popper) {
        this._popper.destroy()
      }
      this._popper = null
    },
    createPopper () {
      this.removePopper()
      this._popper = new Popper(this.$refs.toggle, this.$refs.menu, this.computedPopperConfig)
    }
  },
  computed: {
    generatedPopperConfig () {
      return {
        placement: this.placement || (this.dropup ? 'top-start' : 'bottom-start'),
        modifiers: {
          offset: { offset: this.offset || 0 },
          flip: { enabled: !this.noFlip }
        }
      }
    },
    computedPopperConfig () {
      return deepObjectsMerge(this.generatedPopperConfig, this.popperConfig || {})
    },
    computedDropdownClasses () {
      return [
        !this.dropup ? 'c-dropdown': 'c-dropup',
        {
          'c-show': this.visible,
          'c-nav-item': this.nav,
          'c-btn-group': this.haveButtonClasses
        }
      ]
    },
    buttonTag () {
      return this.nav ? CLink : 'button'
    },
    haveButtonClasses () {
      return this.nav && !this.split ? Boolean(this.$options.propsData.variant) : true
    },
    computedButtonClasses () {
      return [
        this.addButtonClasses,
        this.haveButtonClasses ? `c-btn c-btn-${this.variant}` : 'c-nav-link',
        {
          'c-dropdown-toggle': !this.noCaret && !this.split,
          [`c-btn-${this.size}`]: this.size,
          'c-disabled' : this.disabled,
        }
      ]
    },
    computedMenuClasses () {
      return [
        this.addMenuClasses,
        'c-dropdown-menu',
        { 'c-show': this.visible }
      ]
    },
  },
  render (h) {
    const toggle = this.$slots.button || h(
      this.buttonTag,
      {
        style: { cursor: 'pointer' },
        attrs: {
          'aria-haspopup': true,
          'aria-expanded': this.visible,
        },
        on: {
          click: this.split ? '' : this.click
        },
        ref: 'toggle',
        class: this.computedButtonClasses,
        domProps: !this.$slots['button-content'] ?
                  { innerHTML: this.buttonHtml } :
                  null
      }, this.$slots['button-content'])
    let splitButton = h(false)
    if (this.split) {
      splitButton = h(
      this.buttonTag,
      {
        class: [
          this.computedButtonClasses,
          'c-dropdown-toggle c-dropdown-toggle-split'
        ],
        on: { click: this.click }
      })
    }


    const content = h(
      'div',
      {
        class: this.computedMenuClasses,
        ref: 'menu',
        directives: [{ name: 'on-clickaway', value: this.hide }],
      },
      this.$slots.default
    )
    return h(
      this.nav ? 'li' : 'div',
      { class: this.computedDropdownClasses },
      [ toggle, splitButton, content ]
    )
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/dropdown.scss";
  @import "~@coreui/coreui/scss/partials/buttons.scss";
  @import "~@coreui/coreui/scss/partials/button-group.scss";
</style>
