import { DirectiveBinding } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Options } from '@popperjs/core'

import { useUniqueId } from '../composables'

const createTooltipElement = (id: string, content: string): HTMLDivElement => {
  const tooltip = document.createElement('div')
  tooltip.id = id
  tooltip.classList.add('tooltip', 'bs-tooltip-auto', 'fade')
  tooltip.setAttribute('role', 'tooltip')
  tooltip.innerHTML = `<div class="tooltip-arrow" data-popper-arrow></div>
     <div class="tooltip-inner" id="">${content}</div>`
  return tooltip
}

const addTooltipElement = (
  el: HTMLElement,
  tooltip: HTMLDivElement,
  popperOptions: Partial<Options>,
  uID: string,
) => {
  el.setAttribute('aria-describedby', uID)
  document.body.appendChild(tooltip)
  createPopper(el, tooltip, popperOptions)
  setTimeout(() => {
    tooltip.classList.add('show')
  }, 1)
}

const removeTooltipElement = (el: HTMLElement, tooltip: HTMLDivElement) => {
  el.removeAttribute('aria-describedby')
  tooltip.classList.remove('show')
  setTimeout(() => {
    tooltip.remove()
  }, 300)
}

const toggleTooltipElement = (
  el: HTMLElement,
  tooltip: HTMLDivElement,
  popperOptions: Partial<Options>,
  uID: string,
) => {
  const popperElement = document.getElementById(tooltip.id)
  if (popperElement && popperElement.classList.contains('show')) {
    removeTooltipElement(el, tooltip)
    return
  }
  addTooltipElement(el, tooltip, popperOptions, uID)
}

export default {
  name: 'c-tooltip',
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    const { getUID } = useUniqueId('tooltip')
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

    const uID = getUID()
    binding.arg = uID
    const tooltip = createTooltipElement(uID, content)

    trigger.includes('click') &&
      el.addEventListener('click', () => {
        toggleTooltipElement(el, tooltip, popperOptions, uID)
      })

    if (trigger.includes('focus')) {
      el.addEventListener('focus', () => {
        addTooltipElement(el, tooltip, popperOptions, uID)
      })
      el.addEventListener('blur', () => {
        removeTooltipElement(el, tooltip)
      })
    }

    if (trigger.includes('hover')) {
      el.addEventListener('mouseenter', () => {
        addTooltipElement(el, tooltip, popperOptions, uID)
      })
      el.addEventListener('mouseleave', () => {
        removeTooltipElement(el, tooltip)
      })
    }
  },
  beforeUnmount(_el: HTMLElement, binding: DirectiveBinding): void {
    const tooltip = binding.arg && document.getElementById(binding.arg)
    tooltip && tooltip.remove()
  },
}
