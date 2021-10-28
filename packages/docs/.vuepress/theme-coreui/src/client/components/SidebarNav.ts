import { defineComponent, h, computed, onMounted, ref } from 'vue'
import type { VNode } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ResolvedSidebarItem } from '../../shared'

import { withBase } from '@vuepress/client'

import { CBadge, CNavGroup, CNavItem, CSidebarNav } from '@coreui/vue/src/'
import { CIcon } from '@coreui/icons-vue'

const normalizePath = (path: string): string =>
  decodeURI(path)
    .replace(/#.*$/, '')
    .replace(/(index)?\.(md|html)$/, '')

const isActiveLink = (route: RouteLocationNormalizedLoaded, link?: string): boolean => {
  if (link === undefined) {
    return false
  }

  if (route.hash === link) {
    return true
  }

  const currentPath = normalizePath(route.path)
  const targetPath = normalizePath(link)

  return currentPath === targetPath
}

const isActiveItem = (route: RouteLocationNormalizedLoaded, item: ResolvedSidebarItem): boolean => {
  if (isActiveLink(route, item.link)) {
    return true
  }

  if (item.children) {
    return item.children.some((child) => isActiveItem(route, child))
  }

  return false
}

const SidebarNav = defineComponent({
  name: 'SidebarNav',
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
  setup(props) {
    const route = useRoute()
    const firstRender = ref(true)

    onMounted(() => {
      firstRender.value = false
    })

    const renderItem = (item: ResolvedSidebarItem): VNode => {
      if (item.children && !item.link.includes('.html')) {
        const visible = computed(() => item.children.some((child) => isActiveItem(route, child)))

        return h(
          CNavGroup,
          {
            ...(firstRender.value && { visible: visible.value }),
            compact: true,
          },
          {
            togglerContent: () => [
              h(CIcon, {
                customClassName: 'nav-icon text-primary',
                icon: ['512 512', item.icon],
                height: 64,
                width: 64,
              }),
              item.text,
            ],
            default: () => item.children.map((child) => renderItem(child)),
          },
        )
      }

      return h(
        RouterLink,
        {
          to: item.link,
          custom: true,
        },
        {
          default: (props) =>
            h(
              CNavItem,
              {
                active: props.isActive,
                disabled: item.disabled,
                href: withBase(item.link),
              },
              {
                default: () => [
                  item.text,
                  item.badge &&
                    h(
                      CBadge,
                      {
                        class: 'ms-auto',
                        color: item.badge.color,
                      },
                      {
                        default: () => item.badge.text,
                      },
                    ),
                ],
              },
            ),
        },
      )
    }

    return () => h(
      CSidebarNav,
      {},
      {
        default: () => props.items.map((item: any) => renderItem(item)),
      }
    )
    },
})

export { SidebarNav }