import { defineComponent, h, PropType } from 'vue'

type Span = 'auto' | number | string | boolean | null

type BPObject = {
  span?: Span
  offset?: number | string | null
  order?: 'first' | 'last' | number | string | null
}

type Col = Span | BPObject

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

const CCol = defineComponent({
  name: 'CCol',
  props: {
    /**
     * The number of columns/offset/order on extra small devices (<576px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xs: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
    /**
     * The number of columns/offset/order on small devices (<768px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    sm: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
    /**
     * The number of columns/offset/order on medium devices (<992px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    md: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
    /**
     * The number of columns/offset/order on large devices (<1200px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    lg: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
    /**
     * The number of columns/offset/order on X-Large devices (<1400px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xl: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
    /**
     * The number of columns/offset/order on XX-Large devices (≥1400px).
     *
     * @values 'auto' | number | string | boolean | { span: 'auto' | number | string | boolean } | { offset: number | string } | { order: 'first' | 'last' | number | string }
     */
    xxl: {
      type: [Boolean, Number, String, Object] as PropType<Col>,
      default: undefined,
      require: false,
    },
  },
  setup(props, { slots }) {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = props[bp]

      const infix = bp === 'xs' ? '' : `-${bp}`

      if (breakpoint) {
        if (typeof breakpoint === 'number' || typeof breakpoint === 'string') {
          repsonsiveClassNames.push(`col${infix}-${breakpoint}`)
        }

        if (typeof breakpoint === 'boolean') {
          repsonsiveClassNames.push(`col${infix}`)
        }
      }

      if (breakpoint && typeof breakpoint === 'object') {
        if (typeof breakpoint.span === 'number' || typeof breakpoint.span === 'string') {
          repsonsiveClassNames.push(`col${infix}-${breakpoint.span}`)
        }

        if (typeof breakpoint.span === 'boolean') {
          repsonsiveClassNames.push(`col${infix}`)
        }

        if (typeof breakpoint.order === 'number' || typeof breakpoint.order === 'string') {
          repsonsiveClassNames.push(`order${infix}-${breakpoint.order}`)
        }

        if (typeof breakpoint.offset === 'number') {
          repsonsiveClassNames.push(`offset${infix}-${breakpoint.offset}`)
        }
      }
    })

    return () =>
      h(
        'div',
        {
          class: [repsonsiveClassNames.length ? repsonsiveClassNames : 'col'],
        },
        slots.default && slots.default(),
      )
  },
})

export { CCol }
