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
    show: Boolean
  },
  data () {
    return {
      open: this.show
    }
  },
  inject: {
    dropdownMode: {
      default: 'openActive'
    }
  },
  watch: {
    show (val) {
      this.open = val
    },
    $route: {
      immediate: true,
      handler (route) {
        const mode = this.dropdownMode
        if (mode === 'close') {
          this.open = false
        } else if (mode === 'closeInactive' && this.route) {
          this.open = route.fullPath.includes(this.route)
        }  else if (mode === 'openActive' && !this.open && this.route) {
          this.open = route.fullPath.includes(this.route)
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
        { 'c-open': this.open }
      ]
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      this.open = !this.open
      this.$emit('update:show', this.open)
    },
    itemClicked (e) {
      this.$emit('item-clicked', e)
    }
  }
}
</script>
