<template>
  <li 
    v-if="distributed.header"
    @click="navClick"
    class="nav-item"
  >
    <CLink class="nav-link" v-bind="navLinkProps">
      <slot name="title">{{title}}</slot>
    </CLink>
  </li>
  <transition
    v-else
    :name="tabs.fade ? 'fade' : ''"
    mode="out-in"
  >
    <div
      v-show="isActive"
      :class="paneClasses"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script>
import CLink, { propsFactory } from '../link/CLink'

const props = Object.assign(propsFactory(), {
  title: String
})

export default {
  name: 'CTab',
  inject: ['distributed', 'tabs', 'initialTab'],
  components: {
    CLink
  },
  beforeMount () {
    this.index = Array.from(this.$parent.$children).indexOf(this)
    if (this.active && this.distributed.header && this.initialTab === undefined) {
      this.distributed.changeTabTo(this.index)
    }
  },
  data () {
    return {
      index: null
    }
  },
  props,
  computed: {
    navLinkProps () {
      return Object.assign(
        {}, this._props, { active: this.isActive }, { title: null }
      )
    },
    paneClasses () {
      return [
        this.distributed.addClasses, 
        'tab-pane',
        { 'active': this.isActive }
      ]
    },
    isActive () {
      return this.tabs.activeTab === this.index
    }
  },
  methods: {
    navClick () {
      if (!this.isActive && !this.disabled) {
        this.distributed.changeTabTo(this.index)
      }
    }
  }
}
</script>

<style scoped>
  .fade-enter {
    display: none;
    opacity: 0;
  }
  .fade-enter-active {
    transition: opacity 0.3s;
  }
  .fade-leave, .fade-leave-active {
    position: absolute;
    display: none;
    opacity: 0;
  }
</style>