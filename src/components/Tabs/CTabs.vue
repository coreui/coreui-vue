<template>
  <div :class="vertical ? 'c-row c-no-gutters': ''">
    <div :class="[addNavWrapperClasses, gridClasses.navs]">
      <ul :class="[navClasses, addNavClasses, { 'c-h-100': vertical }]">
        <CTabNav
          v-for="(tab, key) in ctabInstances"
          @click.native="tabClick(tab)"
          v-bind="tab.$attrs"
          :customTitleSlot="tab.$scopedSlots.title"
          :active="tab === activeTab"
          :disabled="tab.disabled"
          :key="key"
        />
      </ul>
    </div>
    <div :class="[addTabsWrapperClasses, gridClasses.content]">
      <div :class="['c-tab-content', addTabsClasses]">
        <transition :name="noFade ? null : 'fade'" mode="out-in">
          <KeepAlive>
            <template v-for="(tab, key) in ctabInstances">
              <CTabContent
                v-if="activeTab === tab"
                :content="tab.$scopedSlots.default"
                :key="key"
                :class="[addTabClasses, 'c-tab-pane active']"
              />
            </template>
          </KeepAlive>
        </transition>
      </div>
    </div>
    <!-- needed to instantiate CTab components, do nothing -->
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
    vertical: [Boolean, Number, String],
    addNavWrapperClasses: [String, Array],
    addNavClasses: [String, Array],
    addTabsWrapperClasses: [String, Array],
    addTabsClasses: [String, Array],
    addTabClasses: [String, Array]
  },
  data () {
    return {
      defaultSlotNodes: null,
      activatedTab: null
    }
  },
  computed: {
    navClasses () {
      return {
        'c-nav' : true,
        'c-nav-tabs': this.tabs && !this.pills,
        'c-nav-pills': this.pills,
        'c-flex-column': this.vertical,
        'c-nav-fill': this.fill,
        'c-nav-justified': this.justified
      }
    },
    activeTab () {
      return this.activatedTab || this.ctabInstances.filter(el => el.active)[0]
    },
    gridClasses () {
      const cols = this.vertical === true ? 6 : this.vertical
      return cols ? { navs: `c-col-sm-${cols}`, content: `c-col-sm-${12-cols}`} : {}
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

<style scoped lang="scss">
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  @import "~@coreui/coreui/scss/partials/nav.scss";
</style>
