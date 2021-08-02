import { defineComponent, h } from 'vue'

const CCreateNavItemProps = {
  /**
   * A string of all className you want applied to the base component.
   */
  className: {
    type: String,
    required: false,
  },
}

const CCreateNavItem = defineComponent({
  name: 'CCreateNavItem',
  props: CCreateNavItemProps,
  setup(_, { slots }) {
    return () => h('div', {}, slots.default && slots.default())
  },
})

export { CCreateNavItem }
