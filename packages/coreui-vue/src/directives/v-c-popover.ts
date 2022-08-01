import { DirectiveBinding } from 'vue'
import { createPopper } from '@popperjs/core'

const getUID = (prefix: string) => {
  do {
    prefix += Math.floor(Math.random() * 1000000)
  } while (document.getElementById(prefix))

  return prefix
}

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

const addPopoverElement = (popover: HTMLDivElement, el: HTMLElement, popperOptions: any) => {
  document.body.appendChild(popover)
  createPopper(el, popover, popperOptions)
  setTimeout(() => {
    popover.classList.add('show')
  }, 1)
}

const removePopoverElement = (popover: HTMLDivElement) => {
  popover.classList.remove('show')
  setTimeout(() => {
    document.body.removeChild(popover)
  }, 300)
}

const togglePopoverElement = (popover: HTMLDivElement, el: HTMLElement, popperOptions: any) => {
  const popperElement = document.getElementById(popover.id)
  if (popperElement && popperElement.classList.contains('show')) {
    removePopoverElement(popover)
    return
  }
  addPopoverElement(popover, el, popperOptions)
}

export default {
  name: 'c-popover',
  uid: '',
  mounted(el: HTMLElement, binding: DirectiveBinding): void {
    const value = binding.value
    const content = typeof value === 'string' ? value : value.content ? value.content : ''
    const header = value.header ? value.header : ''
    const trigger = value.trigger ? value.trigger : 'click'

    // Popper Config
    const offset = value.offset ? value.offset : [0, 8]
    const placement = value.placement ? value.placement : 'top'

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

    const popoverUID = getUID('popover')
    binding.arg = popoverUID
    const popover = createPopoverElement(popoverUID, header, content)

    trigger.includes('click') &&
      el.addEventListener('click', () => {
        togglePopoverElement(popover, el, popperOptions)
      })

    if (trigger.includes('focus')) {
      el.addEventListener('focus', () => {
        addPopoverElement(popover, el, popperOptions)
      })
      el.addEventListener('blur', () => {
        removePopoverElement(popover)
      })
    }

    if (trigger.includes('hover')) {
      el.addEventListener('mouseenter', () => {
        addPopoverElement(popover, el, popperOptions)
      })
      el.addEventListener('mouseleave', () => {
        removePopoverElement(popover)
      })
    }
  },
  unmounted(_el: HTMLElement, binding: DirectiveBinding): void {
    const popover = binding.arg && document.getElementById(binding.arg)
    popover && popover.remove()
  },
}
