import { App } from 'vue'
import { CHeader } from './CHeader'
import { CHeaderBrand } from './CHeaderBrand'
import { CHeaderDivider } from './CHeaderDivider'
import { CHeaderNav } from './CHeaderNav'
import { CHeaderText } from './CHeaderText'
import { CHeaderToggler } from './CHeaderToggler'

const CHeaderPlugin = {
  install: (app: App): void => {
    app.component(CHeader.name as string, CHeader)
    app.component(CHeaderBrand.name as string, CHeaderBrand)
    app.component(CHeaderDivider.name as string, CHeaderDivider)
    app.component(CHeaderNav.name as string, CHeaderNav)
    app.component(CHeaderText.name as string, CHeaderText)
    app.component(CHeaderToggler.name as string, CHeaderToggler)
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
