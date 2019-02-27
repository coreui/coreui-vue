<template>
  <ul class="nav">
    <template v-for="(item, index) in items">
      <template v-if="item.title">
        <CSidebarNavTitle
          :key="index"
          :name="item.name"
          :classes="item.class"
          :wrapper="item.wrapper"
        />
      </template>
      <template v-else-if="item.divider">
        <CSidebarNavDivider :key="index" :classes="item.class"/>
      </template>
      <template v-else-if="item.label">
        <CSidebarNavLabel
          :key="index"
          :name="item.name"
          :url="item.url"
          :icon="item.icon"
          :label="item.label"
          :classes="item.class"
        />
      </template>
      <template v-else>
        <template v-if="item.children">
          <!-- First level dropdown -->
          <CSidebarNavDropdown
            :key="index"
            :name="item.name"
            :url="item.url"
            :icon="item.icon"
          >
            <template v-for="(childL1, index1) in item.children">
              <template v-if="childL1.children">
                <!-- Second level dropdown -->
                <CSidebarNavDropdown :key="index1"
                                     :name="childL1.name"
                                     :url="childL1.url"
                                     :icon="childL1.icon">
                  <li
                    :key="index2"
                    class="nav-item"
                    v-for="(childL2, index2) in childL1.children"
                  >
                    <CSidebarNavLink
                      :name="childL2.name"
                      :url="childL2.url"
                      :icon="childL2.icon"
                      :badge="childL2.badge"
                      :variant="item.variant"
                    />
                  </li>
                </CSidebarNavDropdown>
              </template>
              <template v-else>
                <CSidebarNavItem :key="index1" :classes="item.class">
                  <CSidebarNavLink
                    :name="childL1.name"
                    :url="childL1.url"
                    :icon="childL1.icon"
                    :badge="childL1.badge"
                    :variant="item.variant"
                  />
                </CSidebarNavItem>
              </template>
            </template>
          </CSidebarNavDropdown>
        </template>
        <template v-else>
          <CSidebarNavItem :key="index" :classes="item.class">
            <CSidebarNavLink
              :name="item.name"
              :url="item.url"
              :icon="item.icon"
              :badge="item.badge"
              :variant="item.variant"
            />
          </CSidebarNavItem>
        </template>
      </template>
    </template>
  </ul>
</template>

<script>
import CSidebarNavDivider from './CSidebarNavDivider'
import CSidebarNavDropdown from './CSidebarNavDropdown'
import CSidebarNavLink from './CSidebarNavLink'
import CSidebarNavTitle from './CSidebarNavTitle'
import CSidebarNavItem from './CSidebarNavItem'
import CSidebarNavLabel from './CSidebarNavLabel'

export default {
  name: 'CSidebarNavItems',
  props: {
    items: {
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
    CSidebarNavLabel
  }
}
</script>
