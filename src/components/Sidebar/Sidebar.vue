<template>
  <div class="sidebar" v-on-clickaway="hideMobile">
    <slot>Sidebar</slot>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway'
import { hideMobile } from '../../mixins/hideMobile'

export default {
  name: 'Sidebar',
  mixins: [ clickaway, hideMobile ],
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
    console.error(this.$options._componentTag + ' component is deprecated and will be replaced in coreui-vue 3.0 version, please import C - prefixed version')
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed')
      return this.fixed
    }
  }
}
</script>
