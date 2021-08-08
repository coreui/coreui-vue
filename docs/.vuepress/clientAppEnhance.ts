import type { ClientAppEnhance } from '@vuepress/client'
import { CIcon } from '@coreui/icons-vue'
import CoreuiVue from '../../src/'
import '@coreui/coreui/scss/coreui.scss'

import { cilPuzzle, cilSpeedometer } from '@coreui/icons'

export const icons = {
  cilPuzzle,
  cilSpeedometer,
}

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(CoreuiVue)
  app.provide('icons', icons)
  app.component('CIcon', CIcon)
}

export default clientAppEnhance
