import { h } from 'vue'
import type { FunctionalComponent, VNode } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ResolvedSidebarItem } from '../../shared'

import { CNavGroup, CNavItem, CSidebarNav } from './../../../../../../src'
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

const renderItem = (item: ResolvedSidebarItem): VNode => {
  const route = useRoute()
  if (item.children && !item.link.includes('.html')) {
    return h(
      CNavGroup,
      {
        compact: true,
        visible: item.children.some((child) => isActiveItem(route, child)),
        // href: props.href,
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
            href: item.link,
          },
          {
            default: () => item.text,
          },
        ),
    },
  )
}

// export default defineComponent({

// })

export const SidebarNav = ({ items }) => {
  return h(
    CSidebarNav,
    {},
    {
      default: () => items.map((item) => renderItem(item)),
    },
  )
}

SidebarNav.displayName = 'SidebarNav'

SidebarNav.props = {
  items: {
    type: Array,
    required: true,
  },
}
