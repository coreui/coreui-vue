import { defineClientConfig } from '@vuepress/client'
import { CIcon } from '@coreui/icons-vue'
import CChartPlugin from '@coreui/vue-chartjs'
import CoreuiVue from '@coreui/vue/src/'
import '@coreui/coreui/scss/coreui.scss'
import '@coreui/chartjs/scss/coreui-chartjs.scss'

import {
  cibCoreuiC,
  cibDiscourse,
  cibGithub,
  cibTwitter,
  cibOpenCollective,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBurn,
  cilCheckCircle,
  cilCloudDownload,
  cilContrast,
  cilHandshake,
  cilInfo,
  cilMenu,
  cilMoon,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilSun,
  cilUserFollow,
  cilWarning,
} from '@coreui/icons'

export const icons = {
  cibCoreuiC,
  cibDiscourse,
  cibGithub,
  cibTwitter,
  cibOpenCollective,
  cilArrowBottom,
  cilArrowRight,
  cilArrowTop,
  cilBasket,
  cilBurn,
  cilCheckCircle,
  cilCloudDownload,
  cilContrast,
  cilHandshake,
  cilInfo,
  cilMenu,
  cilMoon,
  cilOptions,
  cilPeople,
  cilPuzzle,
  cilSettings,
  cilSpeedometer,
  cilSun,
  cilUserFollow,
  cilWarning,
}

export default defineClientConfig({
  enhance({ app, router }) {
    app.use(CoreuiVue)
    app.provide('icons', icons)
    app.component('CIcon', CIcon)
    app.use(CChartPlugin),
    router.addRoute({ path: '', redirect: '/getting-started/introduction.html' })
  },
})
