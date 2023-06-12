import { defineClientConfig } from '@vuepress/client'
import { h } from 'vue'
import {
  setupSidebarItems,
  useScrollPromise,
} from './composables/index.js'
import Layout from './layouts/Layout.vue'
import NotFound from './layouts/404.vue'

import './styles/index.scss'

export default defineClientConfig({
  enhance({ app, router }) {

    // compat with @vuepress/plugin-external-link-icon
    app.component('AutoLinkExternalIcon', () => {
      const ExternalLinkIcon = app.component('ExternalLinkIcon')
      if (ExternalLinkIcon) {
        return h(ExternalLinkIcon)
      }
      return null
    })

    // handle scrollBehavior with transition
    const scrollBehavior = router.options.scrollBehavior!
    router.options.scrollBehavior = async (...args) => {
      await useScrollPromise().wait()
      return scrollBehavior(...args)
    }
  },

  setup() {
    setupSidebarItems()
  },

  layouts: {
    Layout,
    NotFound,
  },
})