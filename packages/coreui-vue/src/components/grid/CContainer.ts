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
    sm: Boolean,
    /**
     * Set container 100% wide until medium breakpoint.
     */
    md: Boolean,
    /**
     * Set container 100% wide until large breakpoint.
     */
    lg: Boolean,
    /**
     * Set container 100% wide until X-large breakpoint.
     */
    xl: Boolean,
    /**
     * Set container 100% wide until XX-large breakpoint.
     */
    xxl: Boolean,
    /**
     * Set container 100% wide, spanning the entire width of the viewport.
     */
    fluid: Boolean,
  },
  setup(props, { slots }) {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = props[bp]

      breakpoint && repsonsiveClassNames.push(`container-${bp}`)
    })
    return () =>
      h(
        'div',
        {
          class: [repsonsiveClassNames.length > 0 ? repsonsiveClassNames : 'container'],
        },
        slots.default && slots.default(),
      )
  },
})

export { CContainer }
