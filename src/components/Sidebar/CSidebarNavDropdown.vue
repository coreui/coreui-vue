<template>
  <li :class="dropdownClasses">
    <a class="c-nav-link c-nav-dropdown-toggle" @click="handleClick">
      <i v-if="icon" :class="classIcon"></i>
      {{name}}
    </a>
    <ul class="c-nav-dropdown-items" @click="itemClicked">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name:'CSidebarNavDropdown',
  props: {
    name: String,
    route: {
      type: String,
      validator: val => val.length > 0
    },
    icon: String,
    open: Boolean
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  inject: {
    dropdownStateOnRouteChange: {
      default: 'openActive'
    }
  },
  watch: {
    open (val) {
      this.isOpen = val
    },
    $route: {
      immediate: true,
      handler (route) {
        const mode = this.dropdownStateOnRouteChange
        if (mode === 'close') {
          this.isOpen = false
        } else if (mode === 'closeInactive' && this.route) {
          this.isOpen = route.fullPath.includes(this.route)
        }  else if (mode === 'openActive' && !this.isOpen && this.route) {
          this.isOpen = route.fullPath.includes(this.route)
        }
        // else if (mode === 'noAction') {
        //   return
        // }
      }
    }
  },
  computed: {
    classIcon () {
      return ['c-nav-icon', this.icon]
    },
    dropdownClasses () {
      return [
        'c-nav-item c-nav-dropdown',
        { 'c-open': this.isOpen }
      ]
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      this.isOpen = !this.isOpen
      this.$emit('update:open', this.isOpen)
    },
    itemClicked (e) {
      this.$emit('item-clicked', e)
    }
  }
}
</script>
