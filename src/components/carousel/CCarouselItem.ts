import { defineComponent, h, ref, toRefs, watch } from 'vue'

const CCarouselItem = defineComponent({
  name: 'CCarouselItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    direction: {
      type: String,
      default: 'next',
      required: false,
    },
  },
  setup(props, { slots }) {
    const carouselItemRef = ref()
    const { active } = toRefs(props)
    const directionClassName = ref()
    const orderClassName = ref()
    const activeClassName = ref(active.value && 'active')

    watch(active, (active, prevActive) => {
      if (!prevActive && active) {
        orderClassName.value = `carousel-item-${props.direction}`
      }
      setTimeout(() => {
        if (prevActive && !active) {
          activeClassName.value = 'active'
        }
        directionClassName.value = `carousel-item-${props.direction === 'next' ? 'start' : 'end'}`
      }, 1)

      carouselItemRef.value.addEventListener('transitionend', () => {
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
