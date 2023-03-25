import { defineComponent, h } from 'vue'

export type BPObject = {
  cols?: 'auto' | number | string | null
  gutter?: number | string | null
  gutterX?: number | string | null
  gutterY?: number | string | null
}

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

const CRow = defineComponent({
  name: 'CRow',
  props: {
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xs: Object as () => BPObject,
    /**
     * The number of columns/offset/order on small devices (<768px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    sm: Object as () => BPObject,
    /**
     * The number of columns/offset/order on medium devices (<992px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    md: Object as () => BPObject,
    /**
     * The number of columns/offset/order on large devices (<1200px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    lg: Object as () => BPObject,
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xl: Object as () => BPObject,
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     *
     * @values { cols: 'auto' | number | string } | { gutter: number | string } | { gutterX: number | string } | { gutterY: number | string }
     */
    xxl: Object as () => BPObject,
  },
  setup(props, { slots }) {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = props[bp]
      const infix = bp === 'xs' ? '' : `-${bp}`

      if (typeof breakpoint === 'object') {
        if (breakpoint.cols) {
          repsonsiveClassNames.push(`row-cols${infix}-${breakpoint.cols}`)
        }
        if (typeof breakpoint.gutter === 'number') {
          repsonsiveClassNames.push(`g${infix}-${breakpoint.gutter}`)
        }
        if (typeof breakpoint.gutterX === 'number') {
          repsonsiveClassNames.push(`gx${infix}-${breakpoint.gutterX}`)
        }
        if (typeof breakpoint.gutterY === 'number') {
          repsonsiveClassNames.push(`gy${infix}-${breakpoint.gutterY}`)
        }
      }
    })

    return () =>
      h(
        'div',
        {
          class: ['row', repsonsiveClassNames],
        },
        slots.default && slots.default(),
      )
  },
})

export { CRow }
