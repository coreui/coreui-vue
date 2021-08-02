const HANDLER = 'c_clickaway_handler'

function setListeners (el: any, binding: any, vnode: any) {
  const callback = binding.value
  if (typeof callback !== 'function') {
    return
  }
  el[HANDLER] = (e : any) => el.contains(e.target) || callback.call(vnode.context, e)
  document.documentElement.addEventListener(binding.arg || 'click', el[HANDLER])
}

function unsetListeners (el: any, binding: any) {
  document.documentElement.removeEventListener(binding.arg || 'click', el[HANDLER])
  delete el[HANDLER]
}

export default {
  beforeMount: setListeners,
  updated: (el: any, binding: any, vnode: any) => {
    if (binding.value !== binding.oldValue) {
      unsetListeners(el, binding)
      setListeners(el, binding, vnode)
    }
  },
  unmounted: unsetListeners
}