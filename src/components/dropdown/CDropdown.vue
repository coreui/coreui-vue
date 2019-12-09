<template>
  <component 
    :is="inNav ? 'li' : 'div'" 
    :class="computedDropdownClasses"
    v-on-clickaway="hide"
    @click="checkClick($event)"
  >
    <slot name="toggler">
      <component
        :is="togglerTag"
        v-on="{ click: splittedToggler ? hide : toggle }"
        :class="computedTogglerClasses"
        v-bind="splittedToggler ? '' : togglerAttrs"
      >
        <slot name="toggler-content">{{togglerText}}</slot>
      </component>
      <button
        v-if="splittedToggler"
        @click="toggle"
        class="dropdown-toggle dropdown-toggle-split"
        :class="computedTogglerClasses"
        v-bind="togglerAttrs"
      />
    </slot>
    <div 
      ref="menu"
      :class="computedMenuClasses"
    >
      <slot></slot>
    </div>
  </component>
</template>

<script>
import CLink from '../link/CLink'
import Popper from 'popper.js'
import { mixin as clickaway } from 'vue-clickaway2'
import { deepObjectsMerge } from '@coreui/coreui-utils/src/index.js'

export default {
  name: 'CDropdown',
  mixins: [ clickaway ],
  props: {
    togglerText: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    disabled: Boolean,
    addMenuClasses: [String, Array, Object],
    addTogglerClasses: [String, Array, Object],
    inNav: Boolean,
    caret: {
      type: Boolean,
      default: true
    },
    color: String,
    size: {
      type: String,
      validator: val => ['', 'sm', 'lg'].includes(val)
    },
    split: Boolean,
    offset: {
      type: Number,
      default: 0
    },
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
    flip: {
      type: Boolean,
      default: true
    },
    popperConfig: Object
  },
  data () {
    return {
      visible: this.show
    }
  },
  watch: {
    show (val) {
      this.visible = val
    },
    visible: {
      immediate: true,
      handler (val) {
        val ? this.createPopper() : this.removePopper()
        this.$emit('update:show', val)
      }
    },
    $route () {
      this.visible = false
    }
  },
  methods: {
    checkClick (e) {
      if (
        this.$scopedSlots.toggler && 
        this.$el.firstElementChild.contains(e.target)
      ) {
        this.toggle(e)
      }
    },

    hide () {
      this.visible = false
    },

    toggle (e) {
      e.preventDefault()
      this.visible = !this.visible
    },

    removePopper () {
      if (this._popper) {
        this._popper.destroy()
      }
      this._popper = null
    },

    createPopper () {
      this.removePopper()
      if (this.disabled) {
        this.visible = false
        return
      }
      this.$nextTick(() => {
        this._popper = new Popper(
          this.$el.firstElementChild, 
          this.$refs.menu, 
          this.computedPopperConfig
        )
      })
      
    }
  },
  computed: {
    generatedPopperConfig () {
      return {
        placement: this.placement,
        modifiers: {
          offset: { offset: this.offset },
          flip: { enabled: this.flip }
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
          'nav-item': this.inNav,
          'btn-group': this.splittedToggler
        }
      ]
    },

    togglerTag () {
      return this.inNav ? CLink : 'button'
    },

    splittedToggler () {
      return this.split && !this.inNav
    },

    computedTogglerClasses () {
      return [
        this.addTogglerClasses,
        this.inNav ? 'nav-link' : 'btn',
        {
          'dropdown-toggle': this.caret && !this.split,
          [`btn-${this.size}`]: this.size && !this.inNav,
          'disabled' : this.disabled,
          [`${ this.inNav ? 'bg' : 'btn'}-${ this.color }`]: this.color
        }
      ]
    },

    togglerAttrs () {
      return {
        'type': this.inNav ? null : 'button',
        'aria-expanded': this.visible ? 'true' : 'false',
        'aria-haspopup': 'true'
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
