import type { ClientAppEnhance } from '@vuepress/client'
import CoreuiVue from '../../src/'
import '@coreui/coreui/scss/coreui.scss'

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(CoreuiVue)
}

export default clientAppEnhance