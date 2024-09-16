import { defineComponent, h, provide, ref, useId, watch } from 'vue'

const CTabs = defineComponent({
  name: 'CTabs',
  props: {
    /**
     * The active item key.
     */
    activeItemKey: {
      type: [Number, String],
      required: true,
    }
  },
  emits: [
    /**
     * The callback is fired when the active tab changes.
     */
    'change',
  ],
  setup(props, { slots, emit }) {
    const activeItemKey = ref(props.activeItemKey)
    const uniqueId = useId()
    const setActiveItemKey = (key: string | number) => {
      activeItemKey.value = key
    }

    watch(
      () => props.activeItemKey,
      (value) => {
        activeItemKey.value = value
        emit('change', value)
      },
    )

    provide('activeItemKey', activeItemKey)
    provide('id', uniqueId)
    provide('setActiveItemKey', setActiveItemKey)

    return () => h('div', { class: 'tabs' }, slots.default && slots.default())
  },
})

export { CTabs }
