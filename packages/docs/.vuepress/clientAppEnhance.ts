import type { ClientAppEnhance } from '@vuepress/client'
import { CIcon } from '@coreui/icons-vue'
import { CChart } from '@coreui/vue-chartjs'
import CoreuiVue from '../../../packages/coreui-vue/src'
import '@coreui/coreui/scss/coreui.scss'

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
  app.component('CChart', CChart)
}

export default clientAppEnhance
