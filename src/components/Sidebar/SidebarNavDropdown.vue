<template>
  <router-link tag="li" class="nav-item nav-dropdown" :to="url" disabled>
    <div class="nav-link nav-dropdown-toggle" @click="handleClick"><i :class="classIcon"></i> {{name}}</div>
    <ul class="nav-dropdown-items">
      <slot></slot>
    </ul>
  </router-link>
</template>

<script>
export default {
  name: 'SidebarNavDropdown',
  props: {
    name: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    }
  },
  computed: {
    classIcon () {
      return [
        'nav-icon',
        this.icon
      ]
    }
  },
  methods: {
    handleClick (e) {
      e.preventDefault()
      e.target.parentElement.classList.toggle('open')
    }
  },
  mounted () {
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  }
}
</script>

<style scoped lang="css">
  .nav-link {
    cursor:pointer;
  }
</style>
