import { h } from 'vue'
import type { FunctionalComponent, VNode } from 'vue'
import { useRoute } from 'vue-router'
import type { RouteLocationNormalizedLoaded } from 'vue-router'
import type { ResolvedSidebarItem } from '../../shared'
import NavLink from './NavLink.vue'

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

const renderItem = (item: ResolvedSidebarItem, props: VNode['props'], children): VNode => {
  // if the item has link, render it as `<NavLink>`
  if (item.link) {
    return h('li', { class: 'nav-item' }, [
      h(NavLink, {
        ...props,
        item,
      }),
    ])
  }

  // if the item only has text, render it as `<p>`
  return h('li', { class: 'nav-item nav-group show', ...props }, [
    h('a', { class: 'nav-link nav-group-toggle', innerHTML: `${item.icon} ${item.text}`, }, [
      // h(
      //   'svg',
      //   {
      //     version: '1.1',
      //     xmlns: 'http://www.w3.org/2000/svg',
      //     class: 'nav-icon text-primary',
      //     width: '64',
      //     height: '64',
      //     viewBox: '0 0 64 64',
      //     innerHTML: item.icon,
      //   },
      // ),
      // item.text,
    ]),
    children,
  ])
}

const renderChildren = (item: ResolvedSidebarItem, depth: number): VNode | null => {
  if (!item.children?.length) {
    return null
  }

  return h(
    'ul',
    {
      class: [
        'nav-group-items compact',
        // {
        //   'sidebar-sub-items': depth > 0,
        // },
      ],
    },
    item.children.map((child) =>
      h(SidebarChild, {
        item: child,
        depth: depth + 1,
      }),
    ),
  )
}

export const SidebarChild: FunctionalComponent<{
  item: ResolvedSidebarItem
  depth?: number
}> = ({ item, depth = 0 }) => {
  const route = useRoute()
  const active = isActiveItem(route, item)

  return [
    renderItem(
      item,
      {
        class: {
          'nav-item nav-group show': depth === 0,
          'nav-link': depth > 0,
          active,
        },
      },
      renderChildren(item, depth),
    ),
  ]
}

SidebarChild.displayName = 'SidebarChild'

SidebarChild.props = {
  item: {
    type: Object,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
  },
}
