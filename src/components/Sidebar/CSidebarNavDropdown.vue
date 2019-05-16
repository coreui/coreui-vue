<template>
  <router-link
    tag="li"
    :class="dropdownClasses"
    :to="url"
    disabled
  >
    <div
      class="c-nav-link c-nav-dropdown-toggle"
      @click="handleClick"
    >
      <i :class="classIcon"></i>
      {{name}}
    </div>
    <ul class="c-nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  name:'CSidebarNavDropdown',
  props: {
    name: String,
    url: String,
    icon: String,
    open: {
      type: Boolean,
      default: undefined
    }
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler (route) {
        if (this.open === undefined) {
          this.isOpen = route.fullPath.includes(this.url)
        } else if (this.open === false) {
          this.isOpen = false
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

<style scoped lang="css">
  .c-nav-link {
    cursor:pointer;
  }
</style>
