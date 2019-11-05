<template>
  <li :class="dropdownClasses">
    <a class="c-sidebar-nav-dropdown-toggle" @click="handleClick">
      <CIcon v-if="icon" v-bind="computedIcon"/>
      <i v-if="fontIcon" :class="['c-sidebar-nav-icon', fontIcon]"></i>
      {{name}}
    </a>
    <ul class="c-sidebar-nav-dropdown-items" @click="itemClicked">
      <slot></slot>
    </ul>
  </li>
</template>

<script>
import CIcon from '@coreui/icons-vue/CIcon.vue'

export default {
  name:'CSidebarNavDropdown',
  components: {
    CIcon
  },
  props: {
    name: String,
    route: {
      type: String,
      validator: val => val.length > 0
    },
    icon: [String, Object],
    fontIcon: String,
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
      return ['c-sidebar-nav-icon', this.icon]
    },
    dropdownClasses () {
      return [
        'c-sidebar-nav-dropdown',
        { 'c-show': this.open }
      ]
    },
    computedIcon () {
      if (typeof this.icon === 'object') {
        return Object.assign(
          { customClasses: 'c-sidebar-nav-icon' },
          this.icon
        )
      } else {
        return { customClasses: 'c-sidebar-nav-icon', name: this.icon }
      }
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
