<template>
  <nav class="sidebar-nav">
    <VuePerfectScrollbar class="scroll-area" :settings="psSettings" @ps-scroll-y="scrollHandle">
      <ul class="nav">
        <template v-for="(item, index) in navItems">
          <template v-if="item.title">
            <c-sidebar-nav-title :key="index" :name="item.name" :classes="item.class" :wrapper="item.wrapper"/>
          </template>
          <template v-else-if="item.divider">
            <c-sidebar-nav-divider :key="index" :classes="item.class"/>
          </template>
          <template v-else-if="item.label">
            <c-sidebar-nav-label :key="index" :name="item.name" :url="item.url" :icon="item.icon" :label="item.label" :classes="item.class"/>
          </template>
          <template v-else>
            <template v-if="item.children">
              <!-- First level dropdown -->
              <c-sidebar-nav-dropdown :key="index" :name="item.name" :url="item.url" :icon="item.icon">
                <template v-for="(childL1, index1) in item.children">
                  <template v-if="childL1.children">
                    <!-- Second level dropdown -->
                    <c-sidebar-nav-dropdown :key="index1" :name="childL1.name" :url="childL1.url" :icon="childL1.icon">
                      <li :key="index2" class="nav-item" v-for="(childL2, index2) in childL1.children">
                        <c-sidebar-nav-link :name="childL2.name" :url="childL2.url" :icon="childL2.icon" :badge="childL2.badge" :variant="item.variant"/>
                      </li>
                    </c-sidebar-nav-dropdown>
                  </template>
                  <template v-else>
                    <c-sidebar-nav-item :key="index1" :classes="item.class">
                      <c-sidebar-nav-link :name="childL1.name" :url="childL1.url" :icon="childL1.icon" :badge="childL1.badge" :variant="item.variant"/>
                    </c-sidebar-nav-item>
                  </template>
                </template>
              </c-sidebar-nav-dropdown>
            </template>
            <template v-else>
              <c-sidebar-nav-item :key="index" :classes="item.class">
                <c-sidebar-nav-link :name="item.name" :url="item.url" :icon="item.icon" :badge="item.badge" :variant="item.variant"/>
              </c-sidebar-nav-item>
            </template>
          </template>
        </template>
      </ul>
      <slot></slot>
    </VuePerfectScrollbar>
  </nav>
</template>

<script>
import CSidebarNavDivider from './CSidebarNavDivider'
import CSidebarNavDropdown from './CSidebarNavDropdown'
import CSidebarNavLink from './CSidebarNavLink'
import CSidebarNavTitle from './CSidebarNavTitle'
import CSidebarNavItem from './CSidebarNavItem'
import CSidebarNavLabel from './CSidebarNavLabel'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'CSidebarNav',
  props: {
    navItems: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  components: {
    CSidebarNavDivider,
    CSidebarNavDropdown,
    CSidebarNavLink,
    CSidebarNavTitle,
    CSidebarNavItem,
    CSidebarNavLabel,
    VuePerfectScrollbar
  },
  data () {
    return {}
  },
  computed: {
    psSettings: () => {
      // ToDo: find better rtl fix
      return {
        maxScrollbarLength: 200,
        minScrollbarLength: 40,
        suppressScrollX: getComputedStyle(document.querySelector('html')).direction !== 'rtl',
        wheelPropagation: false,
        interceptRailY: styles => ({ ...styles, height: 0 })
      }
    }
  },
  methods: {
    scrollHandle (evt) {
      // console.log(evt)
    }
  }
}
</script>

<style scoped lang="css">
  .scroll-area {
    position: absolute;
    height: 100%;
    margin: auto;
  }
</style>
