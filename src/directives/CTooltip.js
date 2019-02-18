import Tooltip from 'tooltip.js'
export default {
  name: 'c-tooltip',
  inserted (el, binding) {
    binding.def._tooltip = new Tooltip(el, binding.def.getTooltipConfig(binding))
    if (binding.modifiers.active) {
      binding.def._tooltip.show()
    }
  },
  unbind (el, binding) {
    let tooltip = binding.def._tooltip
    if (tooltip) {
      tooltip.dispose()
      tooltip = null
    }
  },
  getTooltipConfig (binding) {
    const props = binding.value
    const title = typeof binding.value === 'string' ?
                  binding.value : binding.value.content
    return {
      title,
      trigger: String(Object.keys(binding.modifiers)).replace(',',' '),
      html: true,
      placement: props.placement || 'top',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.tooltip-inner',//passed by extension
      template: binding.def.getTemplate(),//passed by extension
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      popperOptions: props.popperOptions
    }
  },
  getTemplate (title) {
    return `<div class="tooltip bs-tooltip-auto fade show" role="tooltip">
              <div class="arrow"></div>
              <div class="tooltip-inner"></div>
            </div>`
  }
}
