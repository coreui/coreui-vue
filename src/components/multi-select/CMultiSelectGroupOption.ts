import { /* computed, */ defineComponent, /* ref, */ h } from 'vue'

const CMultiSelectGroupOptionProps = {
     /**
     * A string of all className you want applied to the base component.
     */
    className: {
      type: String,
      default: '',
      required: false,
    },
    value: {
      type: String,
      required: false,
    } 
}

const CMultiSelectGroupOption = defineComponent({
  name: 'CMultiSelectGroupOption',
  props: CMultiSelectGroupOptionProps,
  setup(props, { slots }) {
    return () => h('div', { class: ['multi-select-group-option', props.className], value: props.value }, slots.default && slots.default())
  },
})

export { CMultiSelectGroupOption }
