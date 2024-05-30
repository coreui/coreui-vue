import { defineComponent, h, provide, ref, watch } from 'vue'
import { useUniqueId } from '../../composables'

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
    const { getUID } = useUniqueId()
    const uID = ref(getUID())
    const activeItemKey = ref(props.activeItemKey)
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
    provide('id', uID)
    provide('setActiveItemKey', setActiveItemKey)

    return () => h('div', { class: 'tabs' }, slots.default && slots.default())
  },
})

export { CTabs }
