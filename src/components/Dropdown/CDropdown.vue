<template>
  <component :is="nav ? 'li' : 'div'" :class="computedDropdownClasses">
    <slot name="toggler" :click="click" :visible="visible">
      <component
        :is="togglerTag"
        v-on="{ click: splittedToggler ? '' : click }"
        :class="computedTogglerClasses"
        v-bind="splittedToggler ? '' : togglerAttrs"
      >
        <slot name="toggler-content">{{togglerText}}</slot>
      </component>
      <button
        v-if="splittedToggler"
        @click="click"
        class="dropdown-toggle dropdown-toggle-split"
        :class="computedTogglerClasses"
        v-bind="togglerAttrs"
      />
    </slot>
     <div ref="menu" :class="computedMenuClasses" v-on-clickaway="hide">
      <slot></slot>
    </div>
  </component>
</template>

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
    togglerText: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    disabled: Boolean,
    addMenuClasses: [String, Array, Object],
    addTogglerClasses: [String, Array, Object],
    nav: Boolean,
    noCaret: Boolean,
    variant: String,
    size: {
      type: String,
      validator: val => ['', 'sm', 'lg'].includes(val)
    },
    split: Boolean,
    offset: Number,
    placement: {
      type: String,
      validator: position => {
        return [
          '', 'top-end', 'top', 'top-start',
          'bottom-end', 'bottom', 'bottom-start',
          'right-start', 'right', 'right-end',
          'left-start', 'left', 'left-end'
        ].includes(position)
      },
      default: 'bottom-start'
    },
    noFlip: Boolean,
    popperConfig: Object,
    noPopper: Boolean,
  },
  mounted () {
    this.menagePopper()
  },
  methods:{
    hide () {
      if (this.visible) {
        this.toggle(false)
      }
    },

    click (e) {
      e.preventDefault()
      this.toggle(!this.visible)
    },

    toggle (value) {
      if (value === false || !this.disabled) {
        setTimeout(() => {
          this.visible = value
          this.menagePopper()
        }, 0)
      }
    },

    menagePopper () {
      if (!this.noPopper) {
        setTimeout(() => {
          this.visible ? this.createPopper() : this.removePopper()
        }, 0)
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
      this._popper = new Popper(
        this.$el.firstElementChild, 
        this.$refs.menu, 
        this.computedPopperConfig
      )
    }
  },
  computed: {
    generatedPopperConfig () {
      return {
        placement: this.placement,
        modifiers: {
          offset: { offset: this.offset || 0 },
          flip: { enabled: !this.noFlip }
        }
      }
    },

    computedPopperConfig () {
      return deepObjectsMerge(this.generatedPopperConfig, this.popperConfig || {})
    },

    carretClass () {
      return this.placement.includes('top') ? 'dropup' : 
               this.placement.includes('right') ? 'dropright' :
                 this.placement.includes('left') ? 'dropleft' : 'dropdown'
    },

    computedDropdownClasses () {
      return [
        this.carretClass,
        {
          'show': this.visible,
          'nav-item': this.nav,
          'btn-group': this.splittedToggler
        }
      ]
    },

    togglerTag () {
      return this.nav ? CLink : 'button'
    },

    splittedToggler () {
      return this.split && !this.nav
    },

    computedTogglerClasses () {
      return [
        this.addTogglerClasses,
        this.nav ? 'nav-link' : 'btn',
        {
          'dropdown-toggle': !this.noCaret && !this.split,
          [`btn-${this.size}`]: this.size && !this.nav,
          'disabled' : this.disabled,
          [`${ this.nav ? 'bg' : 'btn'}-${ this.variant }`]: this.variant
        }
      ]
    },

    togglerAttrs () {
      return {
        'aria-expanded': this.visible ? 'true' : 'false',
        'aria-haspopup': 'true',
      }
    },

    computedMenuClasses () {
      return [
        this.addMenuClasses,
        'dropdown-menu',
        { 'show': this.visible }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/dropdown.scss";
  @import "~@coreui/coreui/scss/partials/buttons.scss";
  @import "~@coreui/coreui/scss/partials/button-group.scss";
</style>
