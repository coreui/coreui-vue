<template>
  <component 
    :is="inNav ? 'li' : 'div'" 
    :class="computedDropdownClasses"
    v-c-clickaway="visible ? hide : null"
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
import { createPopper } from '@popperjs/core'
import { CClickaway } from '../../directives'

export default {
  name: 'CDropdown',
  directives: {
    CClickaway
  },
  components: {
    CLink
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
    offset: {
      type: Array,
      default: () => [0, 0]
    },
    flip: {
      type: Boolean,
      default: true
    },
    customPopperOptions: Object
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
    }
  },
  mounted () {
    this.$on('dropdown-close', this.hide)
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

        this._popper = createPopper(
          //not first child because of split buttons
          this.$el.children[this.$el.children.length - 2], 
          this.$refs.menu, 
          this.customPopperOptions || this.defaultPopperOptions
        )
      })
      
    }
  },
  computed: {
    defaultPopperOptions () {
      return {
        placement: this.placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: this.offset
            }
          },
          {
            name: 'flip',
            enabled: this.flip
          },
          {
            name: 'preventOverflow',
            options: {
              padding: 10
            }
          }
        ]
      }
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
