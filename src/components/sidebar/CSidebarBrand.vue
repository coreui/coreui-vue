<template>
  <div class="c-sidebar-brand">
    <slot>
      <CLink v-if="wrappedInLink" v-bind="linkProps">
        <img
          class="c-sidebar-brand-full" 
          v-bind="fullAttributes" 
        >
        <img 
          class="c-sidebar-brand-minimized" 
          v-bind="minimizedAttributes"
        >
      </CLink>
      <template v-else>
        <img 
          class="c-sidebar-brand-full"
          v-bind="fullAttributes"
        >
        <img 
          class="c-sidebar-brand-minimized" 
          v-bind="minimizedAttributes"
        >
      </template>
    </slot>
  </div>
</template>

<script>
import CLink from '../link/CLink'
export default {
  name: 'CSidebarBrand',
  components: {
    CLink
  },
  props: {
    img: [String, Object],
    imgFull: [String, Object],
    imgMinimized: [String, Object],
    wrappedInLink: [String, Object]
  },
  computed: {
    linkProps () {
      return this.getObject(this.wrappedInLink, 'href')
    },
    minimizedAttributes () {
      return this.getObject(this.imgMinimized || this.img, 'src')
    },
    fullAttributes () {
      return this.getObject(this.imgFull || this.img, 'src')
    }
  },
  methods: {
    getObject (prop, key) {
      return typeof prop === 'object' ? prop : { [`${key}`]: prop }
    }
  }
}
</script>
