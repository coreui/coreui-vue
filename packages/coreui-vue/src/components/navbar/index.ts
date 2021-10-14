import { App } from 'vue'
import { CNavbar } from './CNavbar'
import { CNavbarBrand } from './CNavbarBrand'
import { CNavbarNav } from './CNavbarNav'
import { CNavbarText } from './CNavbarText'
import { CNavbarToggler } from './CNavbarToggler'

const CNavbarPlugin = {
  install: (app: App): void => {
    app.component(CNavbar.name, CNavbar)
    app.component(CNavbarBrand.name, CNavbarBrand)
    app.component(CNavbarNav.name, CNavbarNav)
    app.component(CNavbarText.name, CNavbarText)
    app.component(CNavbarToggler.name, CNavbarToggler)
  },
}

export { CNavbarPlugin, CNavbar, CNavbarBrand, CNavbarNav, CNavbarText, CNavbarToggler }
