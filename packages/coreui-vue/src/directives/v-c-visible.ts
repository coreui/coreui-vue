import { ObjectDirective } from 'vue'

interface VShowElement extends HTMLElement {
  // _vod = vue original display
  _vod: string
}

export const vVisible: ObjectDirective<VShowElement> = {
  beforeMount(el, { value }, { transition }) {
    el._vod = el.style.display === 'none' ? '' : el.style.display
    if (transition && value) {
      transition.beforeEnter(el)
    }
  },
  mounted(el, { value }, { transition }) {
    if (transition && value) {
      transition.enter(el)
    }
  },
  updated(el, { value, oldValue }, { transition }) {
    if (!value === !oldValue) return
    if (transition) {
      if (value) {
        transition.beforeEnter(el)
        transition.enter(el)
      } else {
        transition.leave(el, () => {
          // setDisplay(el, false)
        })
      }
    }
  },
}
