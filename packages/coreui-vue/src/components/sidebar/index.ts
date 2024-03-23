import { App } from 'vue'
import { CSidebar } from './CSidebar'
import { CSidebarBrand } from './CSidebarBrand'
import { CSidebarFooter } from './CSidebarFooter'
import { CSidebarHeader } from './CSidebarHeader'
import { CSidebarNav } from './CSidebarNav'
import { CSidebarToggler } from './CSidebarToggler'

const CSidebarPlugin = {
  install: (app: App): void => {
    app.component(CSidebar.name as string, CSidebar)
    app.component(CSidebarBrand.name as string, CSidebarBrand)
    app.component(CSidebarFooter.name as string, CSidebarFooter)
    app.component(CSidebarHeader.name as string, CSidebarHeader)
    app.component(CSidebarNav.name as string, CSidebarNav)
    app.component(CSidebarToggler.name as string, CSidebarToggler)
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
