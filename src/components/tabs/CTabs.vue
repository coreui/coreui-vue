<template>
  <div :class="wrapperClasses">
    <div :class="navWrapperClasses">
      <CDistributor 
        tag="ul" 
        :class="navClasses" 
        :header="true"
        :changeTabTo="changeTabTo"
      >
        <slot></slot>
      </CDistributor>
    </div>
    <div :class="[addTabsWrapperClasses, gridClasses.content]">
      <CDistributor
        :class="tabsClasses" 
        :addClasses="addTabClasses"
      >
        <slot></slot>
      </CDistributor>
    </div>
  </div>
</template>

<script>
import CDistributor from './CDistributor'

export default {
  name: 'CTabs',
  components: {
    CDistributor
  },
  provide () {
    const tabs = {}
    Object.defineProperty(tabs, 'activeTab', {
      get: () => this.activeTabIndex
    })
    Object.defineProperty(tabs, 'fade', {
      get: () => this.fade
    })
    return { tabs, initialTab: this.activeTab }
  },
  props: {
    fill: Boolean,
    justified: Boolean,
    variant: {
      type: String,
      default: 'tabs',
      validator: val => ['', 'tabs', 'pills'].includes(val)
    },
    fade: {
      type: Boolean,
      default: true
    },
    vertical: [Boolean, Object],
    addNavWrapperClasses: [String, Array, Object],
    addNavClasses: [String, Array, Object],
    addTabsWrapperClasses: [String, Array, Object],
    addTabsClasses: [String, Array, Object],
    addTabClasses: [String, Array, Object],
    activeTab: Number
  },
  data () {
    return {
      activeTabIndex: this.activeTab || 0
    }
  },
  watch: {
    activeTab (val) {
      this.activeTabIndex = val || 0
    }
  },
  computed: {
    wrapperClasses () {
      return { 'row no-gutters': this.vertical }
    },
    navWrapperClasses () {
      return [ this.addNavWrapperClasses, this.gridClasses.navs]
    },
    navClasses () {
      return [
        this.addNavClasses,
        {
          'nav': true,
          'nav-tabs': this.variant === 'tabs',
          'nav-pills': this.variant === 'pills',
          'flex-column': this.vertical,
          'nav-fill': this.fill,
          'nav-justified': this.justified,
          'h-100': this.vertical
        }
      ]
    },
    tabsClasses () {
      return [
        this.addTabsClasses,
        'tab-content',
        {
          'pl-3 p-0': this.vertical
        }
      ]
    },
    gridClasses () {
      if (this.vertical === true) {
        return { navs: 'col-sm-4', content: 'col-sm-8'}
      } else {
        return this.vertical || {}
      }
    }
  },
  methods: {
    changeTabTo (tab) {
      this.activeTabIndex = tab
      this.$emit('update:activeTab', tab)
    }
  }
}
</script>


