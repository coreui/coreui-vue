const HANDLER = 'c_clickaway_handler'

function setListeners (el, binding, vnode) {
  const callback = binding.value
  if (typeof callback !== 'function') {
    return
  }
  el[HANDLER] = (e) => el.contains(e.target) || callback.call(vnode.context, e)
  document.documentElement.addEventListener(binding.arg || 'click', el[HANDLER])
}

function unsetListeners (el, binding) {
  document.documentElement.removeEventListener(binding.arg || 'click', el[HANDLER])
  delete el[HANDLER]
}

export default {
  bind: setListeners,
  update: (el, binding, vnode) => {
    if (binding.value !== binding.oldValue) {
      unsetListeners(el, binding)
      setListeners(el, binding, vnode)
    }
  },
  unbind: unsetListeners
}