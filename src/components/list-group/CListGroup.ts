import { defineComponent, h } from 'vue'

const CListGroup = defineComponent({
  name: 'CListGroup',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    component: {
      type: String,
      required: false,
      default: 'ul',
    },
    /**
     * Remove some borders and rounded corners to render list group items edge-to-edge in a parent component (e.g., `<CCard>`)
     */
    flush: {
      type: Boolean,
      required: false,
    },
    /**
     * Specify a layout type.
     *
     * @values 'horizontal', 'horizontal-sm', 'horizontal-md', 'horizontal-lg', 'horizontal-xl', 'horizontal-xxl',
     */
    layout: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return [
          'horizontal',
          'horizontal-sm',
          'horizontal-md',
          'horizontal-lg',
          'horizontal-xl',
          'horizontal-xxl',
        ].includes(value)
      },
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.component,
        {
          class: [
            'list-group',
            {
              'list-group-flush': props.flush,
              [`list-group-${props.layout}`]: props.layout,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CListGroup }
