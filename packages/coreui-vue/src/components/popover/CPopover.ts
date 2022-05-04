import { defineComponent, h, PropType, ref, RendererElement, Teleport, Transition } from 'vue'
import { createPopper, Placement } from '@popperjs/core'

import { executeAfterTransition } from './../../utils/transition'

const CPopover = defineComponent({
  name: 'CPopover',
  props: {
    /**
     * Content for your component. If you want to pass non-string value please use dedicated slot `<template #content>...</template>`
     */
    content: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Offset of the popover relative to its target.
     */
    offset: {
      type: Array,
      default: () => [0, 8],
      required: false,
    },
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     */
    placement: {
      type: String as PropType<Placement>,
      default: 'top',
      required: false,
      validator: (value: string) => {
        return ['top', 'right', 'bottom', 'left'].includes(value)
      },
    },
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @values 'click', 'focus', 'hover'
     */
    trigger: {
      type: [String, Array] as PropType<string | string[]>,
      default: 'click',
      required: false,
      validator: (value: string | string[]) => {
        if (typeof value === 'string') {
          return ['click', 'focus', 'hover'].includes(value)
        }
        if (Array.isArray(value)) {
          return value.every((e) => ['click', 'focus', 'hover'].includes(e))
        }
        return false
      },
    },
    /**
     * Toggle the visibility of popover component.
     */
    visible: Boolean,
  },
  emits: [
    /**
     * Callback fired when the component requests to be hidden.
     */
    'hide',
    /**
     * Callback fired when the component requests to be shown.
     */
    'show',
  ],
  setup(props, { slots, emit }) {
    const togglerRef = ref()
    const popoverRef = ref()
    const popper = ref()
    const visible = ref(props.visible)

    const handleEnter = (el: RendererElement, done: () => void) => {
      emit('show')
      initPopper()
      el.classList.add('show')
      executeAfterTransition(() => done(), el as HTMLElement)
    }

    const handleLeave = (el: RendererElement, done: () => void) => {
      emit('hide')
      el.classList.remove('show')
      executeAfterTransition(() => {
        done()
        destroyPopper()
      }, el as HTMLElement)
    }

    const handleToggle = (event: Event) => {
      togglerRef.value = event.target
      visible.value = !visible.value
    }

    const initPopper = () => {
      if (togglerRef.value) {
        popper.value = createPopper(togglerRef.value, popoverRef.value, {
          placement: props.placement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: props.offset,
              },
            },
          ],
        })
      }
    }

    const destroyPopper = () => {
      if (popper.value) {
        popper.value.destroy()
      }
      popper.value = undefined
    }

    return () => [
      h(
        Teleport,
        {
          to: 'body',
        },
        h(
          Transition,
          {
            onEnter: (el, done) => handleEnter(el, done),
            onLeave: (el, done) => handleLeave(el, done),
          },
          () =>
            visible.value &&
            h(
              'div',
              {
                class: 'popover fade bs-popover-auto',
                ref: popoverRef,
                role: 'tooltip',
              },
              [
                h('div', { class: 'popover-arrow', 'data-popper-arrow': '' }),
                (props.title || slots.title) &&
                  h(
                    'div',
                    { class: 'popover-header' },
                    {
                      default: () => (slots.title && slots.title()) || props.title,
                    },
                  ),
                (props.content || slots.content) &&
                  h(
                    'div',
                    { class: 'popover-body' },
                    {
                      default: () => (slots.content && slots.content()) || props.content,
                    },
                  ),
              ],
            ),
        ),
      ),
      slots.toggler &&
        slots.toggler({
          on: {
            click: (event: Event) => props.trigger.includes('click') && handleToggle(event),
            blur: (event: Event) => props.trigger.includes('focus') && handleToggle(event),
            focus: (event: Event) => props.trigger.includes('focus') && handleToggle(event),
            mouseenter: (event: Event) => props.trigger.includes('hover') && handleToggle(event),
            mouseleave: (event: Event) => props.trigger.includes('hover') && handleToggle(event),
          },
        }),
    ]
  },
})

export { CPopover }
