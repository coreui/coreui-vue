import { defineComponent, h } from 'vue'

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'fluid' as const,
]

const CContainer = defineComponent({
  name: 'CContainer',
  props: {
    /**
     * Set container 100% wide until small breakpoint.
     */
    sm: {
      type: Boolean,
      required: false,
    },
    /**
     * Set container 100% wide until medium breakpoint.
     */
    md: {
      type: Boolean,
      required: false,
    },
    /**
     * Set container 100% wide until large breakpoint.
     */
    lg: {
      type: Boolean,
      required: false,
    },
    /**
     * Set container 100% wide until X-large breakpoint.
     */
    xl: {
      type: Boolean,
      required: false,
    },
    /**
     * Set container 100% wide until XX-large breakpoint.
     */
    xxl: {
      type: Boolean,
      required: false,
    },
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    fluid: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots }) {
    const repsonsiveCLassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = props[bp]

      breakpoint && repsonsiveCLassNames.push(`container-${bp}`)
    })
    return () =>
      h(
        'div',
        {
          class: [repsonsiveCLassNames.length ? repsonsiveCLassNames : 'container'],
        },
        slots.default && slots.default(),
      )
  },
})

export { CContainer }
