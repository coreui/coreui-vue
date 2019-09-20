<template>
  <div :class="wrapperClasses">
    <div :class="navWrapperClasses">
      <ul :class="navClasses">
        <CTabNav
          v-for="(tab, key) in ctabInstances"
          @click.native="tabClick(tab)"
          v-bind="tab.$attrs"
          :title-html="tab.titleHtml"
          :custom-title-slot="tab.$scopedSlots.title"
          :active="tab === activeTab"
          :disabled="tab.disabled"
          :key="key"
        />
      </ul>
    </div>
    <div :class="[addTabsWrapperClasses, gridClasses.content]">
      <div :class="tabsClasses">
        <transition :name="noFade ? null : 'fade'" mode="out-in">
          <KeepAlive>
            <template v-for="(tab, key) in ctabInstances">
              <CTabContent
                v-if="activeTab === tab"
                :content="tab.$scopedSlots.default"
                :key="key"
                :class="[addTabClasses, 'tab-pane active']"
              />
            </template>
          </KeepAlive>
        </transition>
      </div>
    </div>
    <!-- needed to instantiate CTab components, shouldn't render anything -->
    <slot></slot>
  </div>
</template>

<script>
import CTabNav from './CTabNav'
import CTabContent from './CTabContent'

export default {
  name: 'CTabs',
  components: {
    CTabNav,
    CTabContent
  },
  props: {
    fill: Boolean,
    justified: Boolean,
    pills: Boolean,
    tabs: {
      type: Boolean,
      default: true
    },
    noFade: Boolean,
    vertical: [Boolean, Object],
    addNavWrapperClasses: [String, Array, Object],
    addNavClasses: [String, Array, Object],
    addTabsWrapperClasses: [String, Array, Object],
    addTabsClasses: [String, Array, Object],
    addTabClasses: [String, Array, Object]
  },
  data () {
    return {
      defaultSlotNodes: null,
      activatedTab: null
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
          'nav' : true,
          'nav-tabs': this.tabs && !this.pills,
          'nav-pills': this.pills,
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
    activeTab () {
      return this.activatedTab || this.ctabInstances.filter(el => el.active)[0]
    },
    gridClasses () {
      if (this.vertical === true) {
        return { navs: 'col-sm-4', content: 'col-sm-8'}
      } else {
        return this.vertical || {}
      }
    },
    ctabInstances () {
      if (this.defaultSlotNodes) {
        return this.defaultSlotNodes.map(node => {
          const instance = node.componentInstance
          if (instance && instance.$options._componentTag === 'CTab') {
            return instance
          }
        }).filter(el => el)
      } else {
        return []
      }
    }
  },
  mounted () {
    this.defaultSlotNodes = this.$slots.default
  },
  updated () {
    this.defaultSlotNodes = this.$slots.default
  },
  methods: {
    tabClick (tab) {
      if (!tab.disabled) {
        this.activatedTab = tab
      }
    }
  }
}
</script>

<style lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @import "~@coreui/coreui/scss/partials/nav.scss";
</style>
