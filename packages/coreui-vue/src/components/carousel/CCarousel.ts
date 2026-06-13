import {
  defineComponent,
  h,
  ref,
  VNode,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  provide,
  watch,
} from 'vue'

import { isInViewport, isRTL, Swipe } from '../../utils'

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
    },
    /**
     * If set to 'hover', pauses the cycling of the carousel on mouseenter and resumes the cycling of the carousel on mouseleave. If set to false, hovering over the carousel won't pause it.
     */
    pause: {
      type: [Boolean, String],
      default: 'hover',
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
      validator: (value: string) => {
        return ['crossfade', 'slide'].includes(value)
      },
    },
    /**
     * Set whether the carousel should support left/right swipe interactions on touchscreen devices.
     *
     * @since 5.10.0
     */
    touch: {
      type: Boolean,
      default: true,
    },
    /**
     * Set whether the carousel should cycle continuously or have hard stops.
     */
    wrap: {
      type: Boolean,
      default: true,
    },
  },
  emits: [
    /**
     * Event called when the slide transition starts.
     *
     * @since 5.10.0
     */
    'slide',
    /**
     * Event called when the slide transition ends.
     *
     * @since 5.10.0
     */
    'slid',
  ],
  setup(props, { emit, slots }) {
    const carouselRef = ref()

    const active = ref(props.index)
    const animating = ref(false)
    const customInterval = ref<boolean | number>(props.interval)
    const direction = ref('next')
    const items = ref<VNode[]>([])
    const timeout = ref()
    const visible = ref()

    let swipe: Swipe | undefined

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
          typeof customInterval.value === 'number' ? customInterval.value : props.interval
        )
      }
    }

    const handleControlClick = (_direction: string) => {
      if (animating.value) {
        return
      }
      direction.value = _direction
      if (_direction === 'next') {
        active.value = active.value === items.value.length - 1 ? 0 : active.value + 1
      } else {
        active.value = active.value === 0 ? items.value.length - 1 : active.value - 1
      }
    }

    const nextItemWhenVisible = () => {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && carouselRef.value && isInViewport(carouselRef.value)) {
        handleControlClick('next')
      }
    }

    const handleIndicatorClick = (index: number) => {
      if (active.value === index) {
        return
      }

      if (active.value < index) {
        direction.value = 'next'
        active.value = index
        return
      }

      if (active.value > index) {
        direction.value = 'prev'
        active.value = index
      }
    }

    const handleScroll = () => {
      visible.value =
        !document.hidden && carouselRef.value && isInViewport(carouselRef.value) ? true : false
    }

    onBeforeMount(() => {
      if (slots.default) {
        const children =
          typeof slots.default()[0].type === 'symbol'
            ? slots.default()[0].children
            : slots.default()

        if (children && Array.isArray(children)) {
          // @ts-expect-error TODO: fix types
          items.value = children.filter((child) => child.type.name === 'CCarouselItem')
        }
      }
    })

    onMounted(() => {
      window.addEventListener('scroll', handleScroll)

      if (props.touch && carouselRef.value) {
        swipe = new Swipe(carouselRef.value, {
          onLeft: () => handleControlClick(isRTL(carouselRef.value) ? 'prev' : 'next'),
          onRight: () => handleControlClick(isRTL(carouselRef.value) ? 'next' : 'prev'),
        })
      }
    })

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
      swipe?.dispose()
    })

    watch(animating, () => {
      if (animating.value) {
        emit('slide', active.value, direction.value)
        return
      }

      emit('slid', active.value, direction.value)

      if (props.wrap || active.value < items.value.length - 1) {
        cycle()
      }
    })

    watch(visible, () => {
      if (visible.value) {
        cycle()
      }
    })

    return () =>
      h(
        'div',
        {
          class: ['carousel slide', props.transition === 'crossfade' && 'carousel-fade'],
          ...(props.dark && { 'data-coreui-theme': 'dark' }),
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
              items.value.map((_, index) => {
                return h('button', {
                  type: 'button',
                  id: index,
                  'data-coreui-target': '',
                  ...(active.value === index && { class: 'active' }),
                  onClick: () => handleIndicatorClick(index),
                })
              })
            ),
          h(
            'div',
            { class: 'carousel-inner' },
            items.value.map((item, index) => {
              return h(item, {
                active: active.value === index ? true : false,
                direction: direction.value,
              })
            })
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
              ]
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
              ]
            ),
          ],
        ]
      )
  },
})
export { CCarousel }
