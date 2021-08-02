import { /* computed, */ defineComponent, /* ref, */ h } from 'vue'

const CMultiSelectGroupLabelProps = {
    /**
     * A string of all className you want applied to the base component.
     */
     className: {
      type: String,
      default: '',
      required: false,
    },  
}

const CMultiSelectGroupLabel = defineComponent({
  name: 'CMultiSelectGroupLabel',
  props: CMultiSelectGroupLabelProps,
  setup(props, { slots }) {
    return () => h('div', { class: ['multi-select-group-label', props.className] }, slots.default && slots.default())
  },
})

export { CMultiSelectGroupLabel }
