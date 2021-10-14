import { defineComponent, h, inject, ref, toRefs, watch } from 'vue'

const CCarouselItem = defineComponent({
  name: 'CCarouselItem',
  props: {
    /**
     * @ignore
     */
    active: {
      type: Boolean,
      default: false,
    },
    /**
     * @ignore
     */
    direction: {
      type: String,
      default: 'next',
      required: false,
    },
    /**
     * The amount of time to delay between automatically cycling an item.
     */
    interval: {
      type: [Boolean, Number],
      default: false,
      required: false,
    },
  },
  setup(props, { slots }) {
    const carouselItemRef = ref()
    const { active } = toRefs(props)
    const directionClassName = ref()
    const orderClassName = ref()
    const activeClassName = ref(active.value && 'active')

    // eslint-disable-next-line no-unused-vars
    const setAnimating = inject('setAnimating') as (value: boolean) => void
    // eslint-disable-next-line no-unused-vars
    const setCustomInterval = inject('setCustomInterval') as (value: boolean | number) => void

    watch(active, (active, prevActive) => {
      active && setCustomInterval(props.interval)
      if (!prevActive && active) {
        orderClassName.value = `carousel-item-${props.direction}`
        setCustomInterval(props.interval)
      }
      setTimeout(() => {
        if (prevActive && !active) {
          activeClassName.value = 'active'
        }
        directionClassName.value = `carousel-item-${props.direction === 'next' ? 'start' : 'end'}`
      }, 0)

      carouselItemRef.value.addEventListener('transitionstart', () => {
        setAnimating(true)
      })

      carouselItemRef.value.addEventListener('transitionend', () => {
        setAnimating(false)

        if (active) {
          directionClassName.value = ''
          orderClassName.value = ''
          activeClassName.value = 'active'
        }
        if (!active) {
          directionClassName.value = ''
          orderClassName.value = ''
          activeClassName.value = ''
        }
      })
    })

    return () =>
      h(
        'div',
        {
          class: [
            'carousel-item',
            activeClassName.value,
            directionClassName.value,
            orderClassName.value,
          ],
          ref: carouselItemRef,
        },
        slots.default && slots.default(),
      )
  },
})
export { CCarouselItem }
