<template>
  <CSidebarNavItem :classes="navItemClasses">
    <a class="nav-label" :href="url">
      <i :class="iconClasses"></i>
      {{name}}
    </a>
  </CSidebarNavItem>
</template>

<script>
import CSidebarNavItem from './CSidebarNavItem'
export default {
  name: 'CSidebarNavLabel',
  components: {
    CSidebarNavItem,
  },
  props: {
    name: String,
    url: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: 'fa fa-circle'
    },
    classes: String,
    label: {
      type: Object,
      required: true,
      default: () => {}
    }
  },
  computed: {
    navItemClasses () {
      return ['hidden-cn', this.classes]
    },
    iconClasses () {
      return [
        this.icon || 'fa fa-circle',
        this.label.class,
        { [`text-${this.label.variant}`] : this.label.variant }
      ]
    }
  }
}
</script>
