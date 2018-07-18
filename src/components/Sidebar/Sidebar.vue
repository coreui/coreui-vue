<template>
  <div class="sidebar" v-on-clickaway="hideMobile">
    <slot>Sidebar</slot>
  </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway'
import { hideMobile } from '../../mixins/hideMobile'

export default {
  name: 'sidebar',
  mixins: [ clickaway, hideMobile ],
  props: {
    fixed: {
      type: Boolean,
      default: false
    }
  },
  mounted: function () {
    this.isFixed()
  },
  methods: {
    isFixed () {
      this.fixed ? document.body.classList.add('sidebar-fixed') : document.body.classList.remove('sidebar-fixed')
      return this.fixed
    }
  }
}
</script>
