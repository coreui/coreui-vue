import { App } from 'vue'
import { CNavbar } from './CNavbar'
import { CNavbarBrand } from './CNavbarBrand'
import { CNavbarNav } from './CNavbarNav'
import { CNavbarText } from './CNavbarText'
import { CNavbarToggler } from './CNavbarToggler'

const CNavbarPlugin = {
  install: (app: App): void => {
    app.component(CNavbar.name as string, CNavbar)
    app.component(CNavbarBrand.name as string, CNavbarBrand)
    app.component(CNavbarNav.name as string, CNavbarNav)
    app.component(CNavbarText.name as string, CNavbarText)
    app.component(CNavbarToggler.name as string, CNavbarToggler)
  },
}

export { CNavbarPlugin, CNavbar, CNavbarBrand, CNavbarNav, CNavbarText, CNavbarToggler }
