import { DirectiveBinding } from 'vue'
import { createPopper } from '@popperjs/core'

import { getUID } from '../utils'

const createTooltipElement = (id: string, content: string): HTMLDivElement => {
  const tooltip = document.createElement('div')
  tooltip.id = id
  tooltip.classList.add('tooltip', 'bs-tooltip-auto', 'fade')
  tooltip.setAttribute('role', 'tooltip')
  tooltip.innerHTML = `<div class="tooltip-arrow" data-popper-arrow></div>
     <div class="tooltip-inner" id="">${content}</div>`
  return tooltip
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const addTooltipElement = (tooltip: HTMLDivElement, el: HTMLElement, popperOptions: any) => {
  document.body.appendChild(tooltip)
  createPopper(el, tooltip, popperOptions)
  setTimeout(() => {
    tooltip.classList.add('show')
  }, 1)
}

const removeTooltipElement = (tooltip: HTMLDivElement) => {
  tooltip.classList.remove('show')
  setTimeout(() => {
    tooltip.remove()
  }, 300)
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toggleTooltipElement = (tooltip: HTMLDivElement, el: HTMLElement, popperOptions: any) => {
  const popperElement = document.getElementById(tooltip.id)
  if (popperElement && popperElement.classList.contains('show')) {
    removeTooltipElement(tooltip)
    return
  }
  addTooltipElement(tooltip, el, popperOptions)
}

export default {
  name: 'c-tooltip',
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    const value = binding.value
    const content = typeof value === 'string' ? value : value.content ?? ''
    const trigger = value.trigger ?? 'hover'

    // Popper Config
    const offset = value.offset ?? [0, 6]
    const placement = value.placement ?? 'top'

    const popperOptions = {
      placement: placement,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
      ],
    }

    const tooltipUID = getUID('tooltip')
    binding.arg = tooltipUID
    const tooltip = createTooltipElement(tooltipUID, content)

    trigger.includes('click') &&
      el.addEventListener('click', () => {
        toggleTooltipElement(tooltip, el, popperOptions)
      })

    if (trigger.includes('focus')) {
      el.addEventListener('focus', () => {
        addTooltipElement(tooltip, el, popperOptions)
      })
      el.addEventListener('blur', () => {
        removeTooltipElement(tooltip)
      })
    }

    if (trigger.includes('hover')) {
      el.addEventListener('mouseenter', () => {
        addTooltipElement(tooltip, el, popperOptions)
      })
      el.addEventListener('mouseleave', () => {
        removeTooltipElement(tooltip)
      })
    }
  },
  beforeUnmount(_el: HTMLElement, binding: DirectiveBinding): void {
    const tooltip = binding.arg && document.getElementById(binding.arg)
    tooltip && tooltip.remove()
  },
}
