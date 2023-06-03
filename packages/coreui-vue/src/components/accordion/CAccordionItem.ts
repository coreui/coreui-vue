import { defineComponent, h, inject, provide, ref, watch, Ref } from 'vue'

const CAccordionItem = defineComponent({
  name: 'CAccordionItem',
  props: {
    /**
     * The item key.
     */
    itemKey: [Number, String],
  },
  setup(props, { slots }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const alwaysOpen = inject('alwaysOpen') as boolean
    const setActiveItemKey = inject('setActiveItemKey') as (key: number | string) => void

    const itemKey = ref(props.itemKey ?? Math.random().toString(36).slice(2, 11))
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
