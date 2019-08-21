<template>
  <li 
    :class="dropdownClasses"
    @click="handleClick"
  >
    <div class="c-nav-link c-nav-dropdown-toggle">
      <i v-if="icon" :class="classIcon"></i>
      {{name}}
    </div>
    <ul class="c-nav-dropdown-items">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
export default {
  name:'CSidebarNavDropdown',
  props: {
    name: String,
    route: String,
    icon: String,
    open: Boolean
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  inject: {
    dropdownsBehavior: {
      default: null
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (this.dropdownsBehavior === 'closeOnRouteChange') {
          this.isOpen = false
        } else if (this.dropdownsBehavior === 'closeOnInactiveRoute') {
          this.isOpen = route.fullPath.includes(this.route)
        } else if (this.isOpen !== true) {
          this.isOpen = route.fullPath.includes(this.route)
        }
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
    }
  }
}
</script>
