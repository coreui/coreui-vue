<template>
  <CLink v-if="wrappedInLink" v-bind="linkProps">
    <img
      class="c-header-brand" 
      v-bind="$attrs"
    />
  </CLink>
  <img
    v-else
    class="c-header-brand" 
    v-bind="$attrs"
  />
</template>

<script>
import CLink from '../link/CLink'
export default {
  name: 'CHeaderBrand',
  inheritAttrs: false,
  components: {
    CLink
  },
  props: {
    wrappedInLink: [String, Object]
  },
  computed : {
    linkProps () {
      return this.getObject(this.wrappedInLink, 'href')
    }
  },
  methods: {
    getObject (prop, key) {
      return typeof prop === 'object' ? prop : { [`${key}`]: prop }
    }
  }
}
</script>
