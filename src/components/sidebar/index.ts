import { App } from 'vue'
import { CSidebar } from './CSidebar'
import { CSidebarBrand } from './CSidebarBrand'
import { CSidebarFooter } from './CSidebarFooter'
import { CSidebarHeader } from './CSidebarHeader'
import { CSidebarNav } from './CSidebarNav'
import { CSidebarToggler } from './CSidebarToggler'

const CSidebarPlugin = {
  install: (app: App): void => {
    app.component(CSidebar.name, CSidebar)
    app.component(CSidebarBrand.name, CSidebarBrand)
    app.component(CSidebarFooter.name, CSidebarFooter)
    app.component(CSidebarHeader.name, CSidebarHeader)
    app.component(CSidebarNav.name, CSidebarNav)
    app.component(CSidebarToggler.name, CSidebarToggler)
  },
}

export {
  CSidebarPlugin,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
}
