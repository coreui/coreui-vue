import { defineClientAppEnhance } from '@vuepress/client'
import { useScrollPromise } from './composables'

import './styles/index.scss'

export default defineClientAppEnhance(({ app, router }) => {
  // handle scrollBehavior with transition
  const scrollBehavior = router.options.scrollBehavior!
  ;(router.options.scrollBehavior = async (...args) => {
    await useScrollPromise().wait()
    return scrollBehavior(...args)
  }),
    router.addRoute({ path: '/', redirect: '/getting-started/introduction.html' })
})
