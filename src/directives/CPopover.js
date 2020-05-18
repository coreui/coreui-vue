import Tooltip from 'tooltip.js'
import './old-popover.css'

export default {
  name: 'c-popover',
  tooltip: null,
  inserted (el, binding) {
    const tooltip = new Tooltip(el, binding.def.getTooltipConfig(binding))
    binding.def._tooltip = tooltip
    if (binding.value.active) {
      tooltip.show()
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
    const title = props.content || 'content'
    // const modifiersTriggers = String(Object.keys(binding.modifiers)).replace(',',' ')
    const closeOnClickOutside = props.closeOnClickOutside === false ? false : true
    const html = props.html === false ? false : true
    const popperOptions = props.popperOptions || { modifiers: { preventOverflow: { boundariesElement: 'offsetParent' }}}
    return {
      title,
      trigger: 'click',
      html,
      placement: props.placement || 'right',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.popover-old-body',
      template: binding.def.getTemplate(props.header),
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      closeOnClickOutside,
      popperOptions
    }
  },
  getTemplate (header) {
    return `<div class="popover-old bs-popover-old-auto fade show" role="tooltip">
              <div class="arrow"></div>
              <h3 class="popover-old-header">${header || 'header'}</h3>
              <div class="popover-old-body"></div>
            </div>`
  }
}
