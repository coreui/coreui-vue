import { App } from 'vue'
import { CHeader } from './CHeader'
import { CHeaderBrand } from './CHeaderBrand'
import { CHeaderDivider } from './CHeaderDivider'
import { CHeaderNav } from './CHeaderNav'
import { CHeaderText } from './CHeaderText'
import { CHeaderToggler } from './CHeaderToggler'

const CHeaderPlugin = {
  install: (app: App): void => {
    app.component(CHeader.name, CHeader)
    app.component(CHeaderBrand.name, CHeaderBrand)
    app.component(CHeaderDivider.name, CHeaderDivider)
    app.component(CHeaderNav.name, CHeaderNav)
    app.component(CHeaderText.name, CHeaderText)
    app.component(CHeaderToggler.name, CHeaderToggler)
  },
}

export {
  CHeaderPlugin,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderText,
  CHeaderToggler,
}
