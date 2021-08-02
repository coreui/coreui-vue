import { defineComponent, h } from 'vue'

const CCarouselCaption = defineComponent({
  name: 'CCarouselCaption',
  setup(_, { slots }) {
    return () =>
      h(
        'div',
        {
          class: 'carousel-caption',
        },
        slots.default && slots.default(),
      )
  },
})
export { CCarouselCaption }
