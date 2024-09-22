import { defineComponent, h, inject, Ref } from 'vue'

const CTab = defineComponent({
  name: 'CTab',
  props: {
    /**
     * Toggle the disabled state for the component.
     *
     * @since 5.4.0
     */
    disabled: Boolean,
    /**
     * Item key.
     */
    itemKey: {
      type: [Number, String],
      required: true,
    },
  },
  setup(props, { slots }) {
    const activeItemKey = inject('activeItemKey') as Ref<number | string>
    const id = inject('id')
    const setActiveItemKey = inject('setActiveItemKey') as (key: number | string) => void

    const isActive = () => props.itemKey === activeItemKey.value

    return () =>
      h(
        'button',
        {
          class: [
            'nav-link',
            {
              active: isActive(),
            },
          ],
          id: `${props.itemKey}-tab-${id}`,
          role: 'tab',
          tabindex: isActive() ? 0 : -1,
          type: 'button',
          'aria-controls': `${props.itemKey}-tab-panel-${id}`,
          'aria-selected': isActive(),
          disabled: props.disabled,
          onClick: () => setActiveItemKey(props.itemKey),
          onFocus: () => setActiveItemKey(props.itemKey),
        },
        slots.default && slots.default(),
      )
  },
})

export { CTab }
