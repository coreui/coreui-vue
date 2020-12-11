import Tooltip from 'tooltip.js'
import './old-tooltip.css'

export default {
  name: 'c-tooltip',
  inserted (el, binding) {
    binding.def._tooltip = new Tooltip(el, binding.def.getTooltipConfig(binding))
    el._c_tooltip = binding.def._tooltip
    if (binding.value.active) {
      binding.def._tooltip.show()
    }
  },
  unbind (el, binding) {
    let tooltip = binding.def._tooltip
    if (tooltip) {
      tooltip.dispose()
      tooltip = null
      el._c_tooltip = null
    }
  },
  getTooltipConfig (binding) {
    const props = binding.value
    const title = props.content || props
    const html = !!props.html !== false
    // const modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',',' ')
    const closeOnClickOutside = !!props.closeOnClickOutside !== false
    const popperOptions = props.popperOptions || { modifiers: { preventOverflow: { boundariesElement: 'offsetParent' }}}
    return {
      title,
      trigger: 'hover',
      html,
      placement: props.placement || 'top',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.tooltip-old-inner',
      template: binding.def.getTemplate(),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside,
      popperOptions
    }
  },
  getTemplate () {
    return `<div class="tooltip-old bs-tooltip-old-auto fade show" role="tooltip">
              <div class="arrow"></div>
              <div class="tooltip-old-inner"></div>
            </div>`
  },
  update(el, binding, vnode) {
    if ((binding.value.content !== binding.oldValue.content)  && el === vnode.elm) {
      vnode.context.$nextTick(() => {
        const title = binding.value.content
        el._c_tooltip.updateTitleContent(title)
      })
    }
  }
}
