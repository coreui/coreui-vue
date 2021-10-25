import type { ClientAppEnhance } from '@vuepress/client'
import { CIcon } from '@coreui/icons-vue'
import CChartPlugin from '@coreui/vue-chartjs/src/'
import CoreuiVue from '@coreui/vue/src'
import '@coreui/coreui/scss/coreui.scss'
import '@coreui/chartjs/scss/coreui-chartjs.scss'

import {
  cibCoreuiC,
  cibDiscourse,
  cibGithub,
  cibTwitter,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBurn,
  cilCheckCircle,
  cilCloudDownload,
  cilInfo,
  cilMenu,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilUserFollow,
  cilWarning,
} from '@coreui/icons'

export const icons = {
  cibCoreuiC,
  cibDiscourse,
  cibGithub,
  cibTwitter,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBurn,
  cilCheckCircle,
  cilCloudDownload,
  cilInfo,
  cilMenu,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilUserFollow,
  cilWarning,
}

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(CoreuiVue)
  app.provide('icons', icons)
  app.component('CIcon', CIcon)
  app.use(CChartPlugin)
}

export default clientAppEnhance
