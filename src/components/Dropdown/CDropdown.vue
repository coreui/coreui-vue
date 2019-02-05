<template>
  <li :class="computedDropdownClasses">
    <a href="#"
       aria-haspopup="true"
       :aria-expanded="visible"
       :class="computedToggleClasses"
       @click="click($event)"
       ref="toggle"
    >
      <slot name="button">
        <button class="btn btn-outline-primary dropdown-toggle">{{text}}</button>
      </slot>
    </a>
    <div :class="computedMenuClasses" ref="menu" v-on-clickaway="hide">
      <slot></slot>
    </div>
  </li>
</template>
<script>
import Popper from 'popper.js'
import { mixin as clickaway } from 'vue-clickaway'

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
    text: {
      type: String,
      default: 'Dropdown'
    },
    show: Boolean,
    dropup: Boolean,
    disabled: Boolean,
    right: Boolean,
    menuClasses: String,
    toggleClasses: String,
    popperConfig: Object
  },
  mounted () {
    this.checkForPopper()
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
    toggle (visible) {
      if(this.disabled)
        return
      this.visible = visible
      this.checkForPopper()
    },
    checkForPopper () {
      if(this.popperConfig)
          setTimeout(() => this.visible ? this.createPopper() : this.removePopper(), 0)
    },
    removePopper () {
      if (this._popper) {
        this._popper.destroy()
      }
      this._popper = null
    },
    createPopper (element) {
      this.removePopper()
      this._popper = new Popper(this.$refs.toggle, this.$refs.menu, this.popperConfig)
    }
  },
  computed: {
    computedDropdownClasses () {
      return [
        'dropdown',
        {
          'dropup': this.dropup,
          'show': this.visible
        }
      ]
    },
    computedToggleClasses () {
      return [
        this.toggleClasses,
        {
          'disabled' : this.disabled
        }
      ]
    },
    computedMenuClasses () {
      return [
        this.menuClasses,
        'dropdown-menu',
        this.right ? 'dropdown-menu-right' : 'dropdown-menu-left',
        { 'show': this.visible }
      ]
    }
  },
}
</script>
