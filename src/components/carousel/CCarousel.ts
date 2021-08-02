// TODO:
// 1. disable next/prev item when animating
// 2. set indivual intervals for items

import { defineComponent, h, reactive, ref, VNode, onBeforeMount } from 'vue'

const CCarousel = defineComponent({
  name: 'CCarousel',
  props: {
    /**
     * Adding in the previous and next controls.
     */
    controls: Boolean,
    /**
     * Add darker controls, indicators, and captions.
     */
    dark: Boolean,
    /**
     * index of the active item.
     *
     * @default 0
     */
    index: {
      type: Number,
      default: 0,
      required: false,
    },
    /**
     * Adding indicators at the bottom of the carousel for each item.
     */
    indicators: Boolean,
    /**
     * The amount of time to delay between automatically cycling an item. If false, carousel will not automatically cycle.
     */
    interval: {
      type: [Boolean, Number],
      default: 5000,
      required: false,
    },
    /**
     * Adding indicators at the bottom of the carousel for each item.
     *
     * @values 'crossfade', 'slide'
     * @default 'slide'
     */
    transition: {
      type: String,
      default: 'slide',
      required: false,
      validator: (value: string) => {
        return ['crossfade', 'slide'].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    const timeout = ref()
    const pause = () => timeout.value && clearInterval(timeout.value)

    const cycle = () => {
      pause()
      if (typeof props.interval === 'number') {
        timeout.value = setInterval(() => nextItem(), props.interval)
      }
    }

    const state = reactive({
      items: [] as VNode[],
      active: props.index,
      direction: 'next',
    })

    onBeforeMount(() => {
      if (slots.default) {
        // @ts-expect-error TODO: fix types
        state.items = slots.default().filter((child) => child.type.name === 'CCarouselItem')
      }
    })

    const handleControlClick = (direction: string) => {
      state.direction = direction
      if (direction === 'next') {
        state.active === state.items.length - 1 ? (state.active = 0) : state.active++
      } else {
        state.active === 0 ? (state.active = state.items.length - 1) : state.active--
      }
    }

    const nextItem = () => {
      handleControlClick('next')
    }

    const handleIndicatorClick = (index: number) => {
      if (state.active === index) {
        return
      }

      if (state.active < index) {
        state.direction = 'next'
        state.active = index
        return
      }

      if (state.active > index) {
        state.direction = 'prev'
        state.active = index
      }
    }

    cycle()

    return () =>
      h(
        'div',
        {
          class: [
            'carousel slide',
            props.transition === 'crossfade' && 'carousel-fade',
            props.dark && 'carousel-dark',
          ],
          onmouseover: () => pause(),
          onmouseleave: () => cycle(),
        },
        [
          props.indicators &&
            h(
              'div',
              {
                class: 'carousel-indicators',
              },
              state.items.map((_, index) => {
                return h('button', {
                  type: 'button',
                  id: index,
                  'data-coreui-target': '',
                  ...(state.active === index && { class: 'active' }),
                  onClick: () => handleIndicatorClick(index),
                })
              }),
            ),
          h(
            'div',
            { class: 'carousel-inner' },
            state.items.map((item, index) => {
              return h(item, {
                active: state.active === index ? true : false,
                direction: state.direction,
              })
            }),
          ),
          props.controls && [
            h(
              'button',
              {
                type: 'button',
                class: 'carousel-control-prev',
                'data-coreui-target': '',
                onClick: () => handleControlClick('prev'),
              },
              [
                h('span', { class: 'carousel-control-prev-icon', ariaHidden: 'true' }),
                h('span', { class: 'visually-hidden' }, 'Previous'),
              ],
            ),
            h(
              'button',
              {
                type: 'button',
                class: 'carousel-control-next',
                'data-coreui-target': '',
                onClick: () => handleControlClick('next'),
              },
              [
                h('span', { class: 'carousel-control-next-icon', ariaHidden: 'true' }),
                h('span', { class: 'visually-hidden' }, 'Next'),
              ],
            ),
          ],
        ],
      )
  },
})
export { CCarousel }
