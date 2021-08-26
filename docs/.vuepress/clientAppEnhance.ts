import type { ClientAppEnhance } from '@vuepress/client'
import { CIcon } from '@coreui/icons-vue'
import { CChart } from '@coreui/vue-chartjs'
import CoreuiVue from '../../src/'
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
  cilCloudDownload,
  cilMenu,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilUserFollow,
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
  cilCloudDownload,
  cilMenu,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilUserFollow,
}

const clientAppEnhance: ClientAppEnhance = ({ app }) => {
  app.use(CoreuiVue)
  app.provide('icons', icons)
  app.component('CIcon', CIcon)
  app.component('CChart', CChart)
}

export default clientAppEnhance
