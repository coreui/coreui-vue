import { defineComponent, h, provide, ref, watch } from 'vue'

const CAccordion = defineComponent({
  name: 'CAccordion',
  props: {
    /**
     * The active item key.
     */
    activeItemKey: [Number, String],
    /**
     * Make accordion items stay open when another item is opened
     */
    alwaysOpen: Boolean,
    /**
     * Removes the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container.
     */
    flush: Boolean,
  },
  setup(props, { slots }) {
    const activeItemKey = ref(props.activeItemKey)
    const setActiveItemKey = (key: string | number) => {
      activeItemKey.value = key
    }

    watch(
      () => props.activeItemKey,
      (value) => (activeItemKey.value = value),
    )

    provide('activeItemKey', activeItemKey)
    provide('alwaysOpen', props.alwaysOpen)
    provide('setActiveItemKey', setActiveItemKey)

    return () =>
      h(
        'div',
        { class: ['accordion', { ['accordion-flush']: props.flush }] },
        slots.default && slots.default(),
      )
  },
})

export { CAccordion }
