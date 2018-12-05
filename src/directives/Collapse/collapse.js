export default {
  attachAttributes (el, binding) {
    let item = document.getElementById(binding.arg)
    item.style.overflow = 'hidden'
    item.classList.add('collapse')
    if (!binding.modifiers.show && !binding.value) {
      el.classList.add('collapsed')
      el.setAttribute('aria-expanded', 'false')
    } else {
      el.setAttribute('aria-expanded', 'true')
      item.classList.add('show')
    }
  },
  inserted (el, binding) {
    binding.def.attachAttributes(el, binding)
    if(binding.value == undefined)
      el.addEventListener('click', () => binding.def.toggle(el, binding))
  },
  update (el, binding) {
    if(binding.oldValue !== binding.value)
      binding.def.toggle(el, binding)
  },
  toggle (el, binding) {
    let item = document.getElementById(binding.arg)
    let duration = el.dataset.duration ? Number(el.dataset.duration) : 400
    if(item.classList.contains('show'))
      binding.def.hide(item, el, duration)
    else
      binding.def.show(item, el, duration)
  },
  hide(item, el, duration){
    item.style.transition = `all ${duration}ms ease-in-out`
    item.style.height = item.scrollHeight + 'px'
    setTimeout(function () {
      item.style.paddingTop = 0
      item.style.paddingBottom = 0
      item.style.height = 0
    }, 1)
    setTimeout(function () {
      item.classList.remove('show');
      item.style.transition = ''
      item.style.paddingTop = ''
      item.style.paddingBottom = ''
      el.setAttribute('aria-expanded', 'false')
      el.classList.add('collapsed')
      item.style.height = ''
    }, duration)
  },
  show (item, el, duration) {
    var getHeight = function () {
      item.style.display = 'block'
      let style = []
      style['height'] = item.scrollHeight + 'px'
      style['pt'] = window.getComputedStyle(item).paddingTop
      style['pb'] = window.getComputedStyle(item).paddingBottom
      item.style.display = ''
      return style
    }
    var style = getHeight()
    item.style.height = 0
    item.style.paddingTop = 0
    item.style.paddingBottom = 0
    item.classList.add('show')

    setTimeout(function () {
      item.style.transition = `all ${duration}ms ease-in-out`
      item.style.height = style['height']
      item.style.paddingTop = style['pt']
      item.style.paddingBottom = style['pb']
    }, 1);
   setTimeout(function () {
      item.style.height = ''
      item.style.transition = ''
      el.setAttribute('aria-expanded', 'true')
      el.classList.remove('collapsed')
    }, duration)
  }
}
