import { App } from 'vue'
import { CNav } from './CNav'
import { CNavGroup } from './CNavGroup'
import { CNavGroupItems } from './CNavGroupItems'
import { CNavItem } from './CNavItem'
import { CNavLink } from './CNavLink'
import { CNavTitle } from './CNavTitle'

const CNavPlugin = {
  install: (app: App): void => {
    app.component(CNav.name, CNav)
    app.component(CNavGroup.name, CNavGroup)
    app.component(CNavGroupItems.name, CNavGroupItems)
    app.component(CNavItem.name, CNavItem)
    app.component(CNavLink.name, CNavLink)
    app.component(CNavTitle.name, CNavTitle)
  },
}

export { CNavPlugin, CNav, CNavGroup, CNavGroupItems, CNavItem, CNavLink, CNavTitle }
