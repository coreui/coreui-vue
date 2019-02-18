import Tooltip from 'tooltip.js'
export default {
  name: 'c-popover',
  inserted (el, binding) {
    binding.def._tooltip = new Tooltip(el, binding.def.getTooltipConfig(binding))

    if (binding.modifiers.active) {
      binding.def._tooltip.show()
    }
    // console.log(binding)
  },
  // update (el, binding) {
  //   console.log(binding.value.counter)
  //   console.log(binding.def)
  // },
  // componentUpdated () {
  //   console.log('componentUpdated')
  // },
  unbind (el, binding) {
    let tooltip = binding.def._tooltip
    if (tooltip) {
      tooltip.dispose()
      tooltip = null
    }
  },
  getTooltipConfig (binding) {
    const props = binding.value
    return {
      title: props.content,
      trigger: String(Object.keys(binding.modifiers)).replace(',',' '),
      // trigger: 'hover,focus',
      html: true,
      placement: props.placement || 'right',
      delay: props.delay || 0,
      offset: props.offset || 0,
      arrowSelector: '.arrow',
      innerSelector: '.popover-body',//passed by extension
      template: binding.def.getTemplate(props.header),//passed by extension
      boundariesElement: document.getElementById(props.boundaries) || props.boundaries,
      container: props.appendToBody ? document.body : false,
      popperOptions: props.popperOptions
    }
  },
  getTemplate (header) {
    return `<div class="popover bs-popover-auto fade show" role="tooltip">
              <div class="arrow"></div>
              <h3 class="popover-header">${header || 'header'}</h3>
              <div class="popover-body"></div>
            </div>`
  }
}
