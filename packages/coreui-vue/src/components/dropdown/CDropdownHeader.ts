import { defineComponent, h } from 'vue'

const CDropdownHeader = defineComponent({
  name: 'CDropdownHeader',
  props: {
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'h6',
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        props.as,
        {
          class: 'dropdown-header',
        },
        slots.default && slots.default(),
      )
  },
})

export { CDropdownHeader }
