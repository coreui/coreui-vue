import { defineComponent, h, PropType, ref, RendererElement, Transition, useId } from 'vue'
import type { Placement } from '@popperjs/core'

import { CConditionalTeleport } from '../conditional-teleport'
import { usePopper } from '../../composables'
import type { Placements, Triggers } from '../../types'
import { executeAfterTransition } from '../../utils/transition'
import { getRTLPlacement } from '../../utils'

const CPopover = defineComponent({
  name: 'CPopover',
  inheritAttrs: false,
  props: {
    /**
     * Apply a CSS fade transition to the popover.
     *
     * @since 4.9.0
     */
    animation: {
      type: Boolean,
      default: true,
    },
    /**
     * Appends the vue popover to a specific element. You can pass an HTML element or function that returns a single element. By default `document.body`.
     *
     * @since 5.0.0
     */
    container: {
      type: [Object, String] as PropType<HTMLElement | (() => HTMLElement) | string>,
      default: 'body',
    },
    /**
     * Content for your component. If you want to pass non-string value please use dedicated slot `<template #content>...</template>`
     */
    content: String,
    /**
     * The delay for displaying and hiding the popover (in milliseconds). When a numerical value is provided, the delay applies to both the hide and show actions. The object structure for specifying the delay is as follows: delay: `{ 'show': 500, 'hide': 100 }`.
     *
     * @since 4.9.0
     */
    delay: {
      type: [Number, Object] as PropType<number | { show: number; hide: number }>,
      default: 0,
    },
    /**
     * Specify the desired order of fallback placements by providing a list of placements as an array. The placements should be prioritized based on preference.
     *
     * @since 4.9.0
     */
    fallbackPlacements: {
      type: [String, Array] as PropType<Placements | Placements[]>,
      default: () => ['top', 'right', 'bottom', 'left'],
      validator: (value: Placements | Placements[]) => {
        if (typeof value === 'string') {
          return ['top', 'right', 'bottom', 'left'].includes(value)
        }
        if (Array.isArray(value)) {
          return value.every((e) => ['top', 'right', 'bottom', 'left'].includes(e))
        }
        return false
      },
    },
    /**
     * Offset of the popover relative to its target.
     */
    offset: {
      type: Array,
      default: () => [0, 8],
    },
    /**
     * Describes the placement of your component after Popper.js has applied all the modifiers that may have flipped or altered the originally provided placement property.
     */
    placement: {
      type: String as PropType<Placement>,
      default: 'top',
      validator: (value: string) => {
        return ['top', 'right', 'bottom', 'left'].includes(value)
      },
    },
    /**
     * Title for your component. If you want to pass non-string value please use dedicated slot `<template #title>...</template>`
     */
    title: String,
    /**
     * Sets which event handlers you’d like provided to your toggle prop. You can specify one trigger or an array of them.
     *
     * @values 'click', 'focus', 'hover'
     */
    trigger: {
      type: [String, Array] as PropType<Triggers | Triggers[]>,
      default: 'click',
      validator: (value: Triggers | Triggers[]) => {
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
  setup(props, { attrs, slots, emit }) {
    const togglerRef = ref()
    const popoverRef = ref()
    const visible = ref(props.visible)

    const { initPopper, destroyPopper } = usePopper()
    const uniqueId = `popover-${useId()}`

    const delay =
      typeof props.delay === 'number' ? { show: props.delay, hide: props.delay } : props.delay

    const popperConfig = {
      modifiers: [
        {
          name: 'arrow',
          options: {
            element: '.popover-arrow',
          },
        },
        {
          name: 'flip',
          options: {
            fallbackPlacements: props.fallbackPlacements,
          },
        },
        {
          name: 'offset',
          options: {
            offset: props.offset,
          },
        },
      ],
      placement: getRTLPlacement(props.placement, togglerRef.value),
    }

    const handleEnter = (el: RendererElement, done: () => void) => {
      emit('show')
      initPopper(togglerRef.value, popoverRef.value, popperConfig)
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

    const toggleVisible = (event: Event, _visible: boolean) => {
      togglerRef.value = event.target
      if (_visible) {
        setTimeout(() => {
          visible.value = true
        }, delay.show)
        return
      }

      setTimeout(() => {
        visible.value = false
      }, delay.hide)
    }

    return () => [
      h(
        CConditionalTeleport,
        {
          container: props.container,
          teleport: true,
        },
        {
          default: () =>
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
                    ...attrs,
                    class: [
                      'popover',
                      'bs-popover-auto',
                      {
                        fade: props.animation,
                      },
                      attrs.class,
                    ],
                    id: uniqueId,
                    ref: popoverRef,
                    role: 'tooltip',
                  },
                  [
                    h('div', { class: 'popover-arrow' }),
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
        },
      ),
      slots.toggler &&
        slots.toggler({
          id: visible.value ? uniqueId : null,
          on: {
            click: (event: Event) =>
              props.trigger.includes('click') && toggleVisible(event, !visible.value),
            blur: (event: Event) => props.trigger.includes('focus') && toggleVisible(event, false),
            focus: (event: Event) => props.trigger.includes('focus') && toggleVisible(event, true),
            mouseenter: (event: Event) =>
              props.trigger.includes('hover') && toggleVisible(event, true),
            mouseleave: (event: Event) =>
              props.trigger.includes('hover') && toggleVisible(event, false),
          },
        }),
    ]
  },
})

export { CPopover }
