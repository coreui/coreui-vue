<template>
  <div class="c-sidebar-brand">
    <slot>
      <CLink v-if="wrappedInLink" v-bind="wrappedInLink">
        <img
          class="c-sidebar-brand-full" 
          :src="fullSrc" 
          width="118" 
          height="46" 
          alt="Logo"
        >
        <img 
          class="c-sidebar-brand-minimized" 
          :src="minimizedSrc"
          width="118" 
          height="46" 
          alt="Logo"
        >
      </CLink>
      <template v-else>
        <img 
          class="c-sidebar-brand-full" 
          :src="fullSrc" 
          width="118" 
          height="46" 
          alt="Logo"
        >
        <img 
          class="c-sidebar-brand-minimized" 
          :src="minimizedSrc"
          width="118" 
          height="46" 
          alt="Logo"
        >
      </template>
    </slot>
  </div>
</template>

<script>
import CLink from '../Link/CLink'
export default {
  name: 'CSidebarBrand',
  components: {
    CLink
  },
  props: {
    fullSrc: String,
    minimizedSrc: String,
    wrappedInLink: Object
  }
}
</script>
