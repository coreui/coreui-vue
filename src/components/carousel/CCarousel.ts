import {
  defineComponent,
  h,
  reactive,
  ref,
  VNode,
  onBeforeMount,
  onMounted,
  onUpdated,
  provide,
  watch,
} from 'vue'

const isVisible = (element: HTMLDivElement) => {
  const rect = element.getBoundingClientRect()
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  )
}

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
     * If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it.
     */
    pause: {
      type: [Boolean, String],
      default: 'hover',
      required: false,
      validator: (value: boolean | string) => {
        return typeof value === 'boolean' || value === 'hover'
      },
    },
    /**
     * Set type of the transition.
     *
     * @values 'crossfade', 'slide'
     */
    transition: {
      type: String,
      default: 'slide',
      required: false,
      validator: (value: string) => {
        return ['crossfade', 'slide'].includes(value)
      },
    },
    /**
     * Set whether the carousel should cycle continuously or have hard stops.
     */
    wrap: {
      type: Boolean,
      default: true,
      required: false,
    },
  },
  setup(props, { slots }) {
    const carouselRef = ref()
    const timeout = ref()
    const animating = ref(false)
    const visible = ref()
    const customInterval = ref<boolean | number>(props.interval)
    const setAnimating = (value: boolean) => {
      animating.value = value
    }
    const setCustomInterval = (value: boolean | number) => {
      customInterval.value = value
    }

    provide('setAnimating', setAnimating)
    provide('setCustomInterval', setCustomInterval)

    const pause = () => timeout.value && clearInterval(timeout.value)

    const cycle = () => {
      pause()
      if (typeof props.interval === 'number') {
        timeout.value = setTimeout(
          () => nextItemWhenVisible(),
          typeof customInterval.value === 'number' ? customInterval.value : props.interval,
        )
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
      if (animating.value) {
        return
      }
      state.direction = direction
      if (direction === 'next') {
        state.active === state.items.length - 1 ? (state.active = 0) : state.active++
      } else {
        state.active === 0 ? (state.active = state.items.length - 1) : state.active--
      }
    }

    const nextItemWhenVisible = () => {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && isVisible(carouselRef.value)) {
        handleControlClick('next')
      }
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

    const handleScroll = () => {
      if (!document.hidden && isVisible(carouselRef.value)) {
        visible.value = true
      } else {
        visible.value = false
      }
    }

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })

    onUpdated(() => {
      watch(animating, () => {
        if (props.wrap) {
          !animating.value && cycle()
          return
        }

        if (!props.wrap && state.active < state.items.length - 1) {
          !animating.value && cycle()
        }
      })
    })

    watch(visible, () => {
      visible.value && cycle()
    })

    return () =>
      h(
        'div',
        {
          class: [
            'carousel slide',
            props.transition === 'crossfade' && 'carousel-fade',
            props.dark && 'carousel-dark',
          ],
          onmouseover: () => props.pause && pause(),
          onmouseleave: () => cycle(),
          ref: carouselRef,
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
