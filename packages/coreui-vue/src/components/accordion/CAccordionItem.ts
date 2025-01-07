import { defineComponent, h, inject, provide, ref, watch, Ref, useId } from 'vue'

const CAccordionItem = defineComponent({
  name: 'CAccordionItem',
  props: {
    /**
     * The id global attribute defines an identifier (ID) that must be unique in the whole document.
     */
    id: String,
    /**
     * The item key.
     */
    itemKey: [Number, String],
  },
  setup(props, { slots }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const alwaysOpen = inject('alwaysOpen') as boolean
    const setActiveItemKey = inject('setActiveItemKey') as (key: number | string) => void

    const id = props.id ?? useId()
    const itemKey = ref(props.itemKey ?? id)
    const visible = ref(Boolean(activeItemKey.value === itemKey.value))

    watch(activeItemKey, () => (visible.value = Boolean(activeItemKey.value === itemKey.value)))

    const toggleVisibility = () => {
      visible.value = !visible.value
      if (!alwaysOpen && visible) {
        setActiveItemKey(itemKey.value)
      }
    }

    provide('id', id)
    provide('visible', visible)
    provide('toggleVisibility', toggleVisibility)

    return () => h('div', { class: ['accordion-item'] }, slots.default && slots.default())
  },
})

export { CAccordionItem }
