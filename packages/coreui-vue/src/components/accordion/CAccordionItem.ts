import { defineComponent, h, inject, provide, ref, watch, Ref } from 'vue'

const CAccordionItem = defineComponent({
  name: 'CAccordionItem',
  props: {
    /**
     * The item key.
     */
    itemKey: {
      type: [Number, String],
      default: undefined,
      require: false,
    },
  },
  setup(props, { slots }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const alwaysOpen = inject('alwaysOpen') as boolean
    // eslint-disable-next-line no-unused-vars
    const setActiveItemKey = inject('setActiveItemKey') as (key: number | string) => void

    const itemKey = ref(props.itemKey ? props.itemKey : Math.random().toString(36).substr(2, 9))
    const visible = ref(Boolean(activeItemKey.value === itemKey.value))

    watch(activeItemKey, () => (visible.value = Boolean(activeItemKey.value === itemKey.value)))

    const toggleVisibility = () => {
      visible.value = !visible.value
      !alwaysOpen && visible && setActiveItemKey(itemKey.value)
    }

    provide('visible', visible)
    provide('toggleVisibility', toggleVisibility)

    return () => h('div', { class: ['accordion-item'] }, slots.default && slots.default())
  },
})

export { CAccordionItem }
