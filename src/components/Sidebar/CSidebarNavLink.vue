<template>
  <div v-if="isExternalLink">
    <a :href="url" :class="classList">
      <i :class="classIcon"></i> {{name}}
      <c-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</c-badge>
    </a>
  </div>
  <div v-else>
    <router-link :to="url" :class="classList">
      <i :class="classIcon"></i> {{name}}
      <c-badge v-if="badge && badge.text" :variant="badge.variant">{{badge.text}}</c-badge>
    </router-link>
  </div>
</template>


<script>
export default {
  name: 'CSidebarNavLink',
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
    },
    badge: {
      type: Object,
      default: () => {}
    },
    variant: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    }
  },
  computed: {
    classList () {
      return [
        'nav-link',
        this.linkVariant,
        ...this.itemClasses
      ]
    },
    classIcon () {
      return [
        'nav-icon',
        this.icon
      ]
    },
    linkVariant () {
      return this.variant ? `nav-link-${this.variant}` : ''
    },
    itemClasses () {
      return this.classes ? this.classes.split(' ') : []
    },
    isExternalLink () {
      if (this.url.substring(0, 4) === 'http') {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
