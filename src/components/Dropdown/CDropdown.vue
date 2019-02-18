<script>
import CLink from '../Link/CLink'
import Popper from 'popper.js'
import { mixin as clickaway } from 'vue-clickaway'
import { deepObjectsMerge } from '@coreui/coreui/dist/js/coreui-utilities'

export default {
  name: 'CDropdown',
  mixins: [ clickaway ],
  data () {
    return {
      visible: this.show
    }
  },
  mounted () {
    if(this.show)
      this.createPopper
  },
  props: {
    buttonContent: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    dropup: Boolean,
    disabled: Boolean,
    addMenuClasses: String,
    addButtonClasses: String,
    nav: Boolean,
    noCaret: Boolean,
    variant: {
      type: String,
      default: 'secondary'
    },
    size: {
      type: String,
      validator: val => ['sm', 'lg'].includes(val)
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
      if(this.$refs.menu.classList.contains('show'))
        this.toggle(false)
    },
    click (e) {
      e.preventDefault()
      this.toggle(!this.visible)
    },
    toggle (value) {
      if(this.disabled)
        return
      setTimeout(() => {
        this.visible = value
        this.menagePopper()
      }, 0)
    },
    menagePopper () {
      if(!this.noPopper)
          setTimeout(() => this.visible ? this.createPopper() : this.removePopper(), 0)
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
        placement: this.placement ? this.placement : this.dropup ? 'top-start' : 'bottom-start',
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
        !this.dropup ? 'dropdown': 'dropup',
        {
          'show': this.visible,
          'nav-item': this.nav,
          'btn-group': this.haveButtonClasses
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
        this.haveButtonClasses ? `btn btn-${this.variant}` : 'nav-link',
        {
          'dropdown-toggle': !this.noCaret && !this.split,
          [`btn-${this.size}`]: this.size,
          'disabled' : this.disabled,
        }
      ]
    },
    computedMenuClasses () {
      return [
        this.addMenuClasses,
        'dropdown-menu',
        { 'show': this.visible }
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
        domProps: !this.$slots.buttonContent ?
                  { innerHTML: this.buttonContent } :
                  null
      }, this.$slots.buttonContent)
    let splitButton = h(false)
    if (this.split) {
      splitButton = h(
      this.buttonTag,
      {
        class: [ this.computedButtonClasses, 'dropdown-toggle dropdown-toggle-split'],
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
