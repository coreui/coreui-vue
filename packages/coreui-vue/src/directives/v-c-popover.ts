import { DirectiveBinding } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Options } from '@popperjs/core'

import { useUniqueId } from '../composables'

const createPopoverElement = (id: string, header: string, content: string): HTMLDivElement => {
  const popover = document.createElement('div')
  popover.id = id
  popover.classList.add('popover', 'bs-popover-auto', 'fade')
  popover.setAttribute('role', 'popover')
  popover.innerHTML = `<div class="popover-arrow" data-popper-arrow></div>
     <div class="popover-header">${header}</div>
     <div class="popover-body" id="">${content}</div>`
  return popover
}

const addPopoverElement = (
  el: HTMLElement,
  popover: HTMLDivElement,
  popperOptions: Partial<Options>,
  uID: string,
) => {
  el.setAttribute('aria-describedby', uID)
  document.body.appendChild(popover)
  createPopper(el, popover, popperOptions)
  setTimeout(() => {
    popover.classList.add('show')
  }, 1)
}

const removePopoverElement = (el: HTMLElement, popover: HTMLDivElement) => {
  el.removeAttribute('aria-describedby')
  popover.classList.remove('show')
  setTimeout(() => {
    popover.remove()
  }, 300)
}

const togglePopoverElement = (
  el: HTMLElement,
  popover: HTMLDivElement,
  popperOptions: Partial<Options>,
  uID: string,
) => {
  const popperElement = document.getElementById(popover.id)
  if (popperElement && popperElement.classList.contains('show')) {
    removePopoverElement(el, popover)
    return
  }
  addPopoverElement(el, popover, popperOptions, uID)
}

export default {
  name: 'c-popover',
  uid: '',
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    const { getUID } = useUniqueId('popover')
    const value = binding.value
    const content = typeof value === 'string' ? value : value.content ?? ''
    const header = value.header ?? ''
    const trigger = value.trigger ?? 'click'

    // Popper Config
    const offset = value.offset ?? [0, 8]
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
    const popover = createPopoverElement(uID, header, content)

    trigger.includes('click') &&
      el.addEventListener('click', () => {
        togglePopoverElement(el, popover, popperOptions, uID)
      })

    if (trigger.includes('focus')) {
      el.addEventListener('focus', () => {
        addPopoverElement(el, popover, popperOptions, uID)
      })
      el.addEventListener('blur', () => {
        removePopoverElement(el, popover)
      })
    }

    if (trigger.includes('hover')) {
      el.addEventListener('mouseenter', () => {
        addPopoverElement(el, popover, popperOptions, uID)
      })
      el.addEventListener('mouseleave', () => {
        removePopoverElement(el, popover)
      })
    }
  },
  unmounted(_el: HTMLElement, binding: DirectiveBinding): void {
    const popover = binding.arg && document.getElementById(binding.arg)
    popover && popover.remove()
  },
}
