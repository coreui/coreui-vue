import { defineComponent, h, PropType, ref, Teleport, watch } from 'vue'

const getContainer = (
  container?: HTMLElement | (() => HTMLElement) | string,
): HTMLElement | string => {
  if (container) {
    return typeof container === 'function' ? container() : container
  }

  return 'body'
}

const CConditionalTeleport = defineComponent({
  name: 'CConditionalTeleport',
  props: {
    /**
     * An HTML element or function that returns a single element, with `document.body` as the default.
     *
     * @since 5.0.0
     */
    container: {
      type: [Object, String] as PropType<HTMLElement | (() => HTMLElement) | string>,
      default: 'body',
    },
    /**
     * Render some children into a different part of the DOM
     */
    teleport: {
      type: [Boolean],
      default: true,
    },
  },
  setup(props, { slots }) {
    const container = ref<HTMLElement | string>(getContainer(props.container))

    watch(
      () => [props.container, props.teleport],
      () => {
        if (props.teleport) {
          container.value = getContainer(props.container)
        }
      },
    )

    return () =>
      h(
        Teleport,
        {
          disabled: props.teleport === false,
          to: container.value,
        },
        {
          default: () => slots.default && slots.default(),
        },
      )
  },
})
export { CConditionalTeleport }
