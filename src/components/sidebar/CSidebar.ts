import { defineComponent, h } from 'vue'

const CSidebar = defineComponent({
  name: 'CSidebar',
  props: {
    /**
     * Hide sidebar.
     */
    hide: Boolean,
    /**
     * Make sidebar narrow.
     */
    narrow: {
      type: Boolean,
      required: false,
    },
    /**
     * Set sidebar to overlaid variant.
     */
    overlaid: {
      type: Boolean,
      required: false,
    },
    /**
     * Place sidebar in non-static positions.
     */
    position: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['fixed'].includes(value)
      },
    },
    /**
     * Make any sidebar self hiding across all viewports or pick a maximum breakpoint with which to have a self hiding up to.
     *
     * @values 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    selfHiding: {
      type: [Boolean, String],
      default: undefined,
      validator: (value: boolean | string) => {
        if (typeof value === 'string') {
          return ['xs', 'sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
        } else if (typeof value === 'boolean') {
          return true
        } else {
          return false
        }
      },
    },
    /**
     * Size the component small, large, or extra large.
     */
    size: {
      type: String,
      default: undefined,
      validator: (value: string) => {
        return ['sm', 'lg', 'xl'].includes(value)
      },
    },
    /**
     * Expand narrowed sidebar on hover.
     */
    unfoldable: Boolean,
    /**
     * Toggle the visibility of sidebar component.
     */
    visible: {
      type: Boolean,
      default: undefined,
    },
  },
  setup(props, { slots }) {
    return () =>
      h(
        'div',
        {
          class: [
            'sidebar',
            {
              'sidebar-narrow': props.narrow,
              'sidebar-overlaid': props.overlaid,
              [`sidebar-${props.position}`]: props.position,
              [`sidebar-self-hiding${
                typeof props.selfHiding !== 'boolean' && '-' + props.selfHiding
              }`]: props.selfHiding,
              [`sidebar-${props.size}`]: props.size,
              'sidebar-narrow-unfoldable': props.unfoldable,
              show: props.visible === true,
              hide: props.visible === false,
            },
          ],
        },
        slots.default && slots.default(),
      )
  },
})

export { CSidebar }
