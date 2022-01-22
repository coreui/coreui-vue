import { h } from 'vue'
import { defineClientAppEnhance } from '@vuepress/client'
import CodeGroup from './components/global/CodeGroup'
import CodeGroupItem from './components/global/CodeGroupItem.vue'
// import OutboundLink from './components/global/OutboundLink.vue'
import { useScrollPromise } from './composables'

import './styles/index.scss'

export default defineClientAppEnhance(({ app, router }) => {
  app.component('CodeGroup', CodeGroup)
  app.component('CodeGroupItem', CodeGroupItem)

  app.component('NavbarSearch', () => {
    const SearchComponent = app.component('Docsearch') || app.component('SearchBox')
    if (SearchComponent) {
      return h(SearchComponent)
    }
    return null
  })

  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!
  ;(router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait()
    return scrollBehavior(...args)
  }),
    router.addRoute({ path: '/', redirect: '/getting-started/introduction.html' })
})
