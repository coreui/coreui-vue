import { App } from 'vue'
import { CNav } from './CNav'
import { CNavGroup } from './CNavGroup'
import { CNavGroupItems } from './CNavGroupItems'
import { CNavItem } from './CNavItem'
import { CNavLink } from './CNavLink'
import { CNavTitle } from './CNavTitle'

const CNavPlugin = {
  install: (app: App): void => {
    app.component(CNav.name as string, CNav)
    app.component(CNavGroup.name as string, CNavGroup)
    app.component(CNavGroupItems.name as string, CNavGroupItems)
    app.component(CNavItem.name as string, CNavItem)
    app.component(CNavLink.name as string, CNavLink)
    app.component(CNavTitle.name as string, CNavTitle)
  },
}

export { CNavPlugin, CNav, CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle }
