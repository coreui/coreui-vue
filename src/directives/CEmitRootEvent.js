export default {
  name: 'c-emit-root-event',
  bind (el, binding, node) {
    if (!binding.arg) {
      return
    } 
    const customListeners = Object.keys(binding.modifiers)
    const listeners = customListeners.length ? customListeners : ['click']
    listeners.map(listener => {
      el.addEventListener(listener, () => {
        node.context.$root.$emit(binding.arg, binding.value)
      })
    })
  }
}
