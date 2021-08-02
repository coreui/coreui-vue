import { defineComponent, h, toRefs } from 'vue'

const CTabPane = defineComponent({
  name: 'CTabPane',
  props: {
    /**
     * Toggle the visibility of component.
     */
    visible: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props, { slots }) {
    const { visible } = toRefs(props)

    return () =>
      h(
        'div',
        {
          class: [
            'tab-pane',
            'fade',
            {
              'show active': visible.value,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CTabPane }
