<template>
  <router-link
    tag="li"
    :class="dropdownClasses"
    :to="url"
    disabled
  >
    <div
      class="nav-link nav-dropdown-toggle"
      @click="handleClick"
    >
      <i :class="classIcon"></i>
      {{name}}
    </div>
    <ul class="nav-dropdown-items">
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
    open: Boolean
  },
  data () {
    return {
      isOpen: this.open
    }
  },
  computed: {
    classIcon () {
      return ['nav-icon', this.icon]
    },
    dropdownClasses () {
      return [
        'nav-item nav-dropdown',
        { open: this.isOpen }
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
  .nav-link {
    cursor:pointer;
  }
</style>
