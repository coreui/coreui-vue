import { /* computed, */ defineComponent, /* ref, */ h } from 'vue'

const CMultiSelectGroupProps = {
    /**
     * A string of all className you want applied to the base component.
     */
     className: {
      type: String,
      required: false,
    },
}

const CMultiSelectGroup = defineComponent({
  name: 'CMultiSelectGroup',
  props: CMultiSelectGroupProps,
  setup(props, { slots }) {
    return () => h('div', { class: ['multi-select-group', props.className] }, slots.default && slots.default())
  },
})

export { CMultiSelectGroup }
