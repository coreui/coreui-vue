import { defineComponent, h } from 'vue'

import { Color } from '../../props'

const BREAKPOINTS = [
  'xxl' as const,
  'xl' as const,
  'lg' as const,
  'md' as const,
  'sm' as const,
  'xs' as const,
]

export const CPlaceholder = defineComponent({
  name: 'CPlaceholder',
  props: {
    /**
     * Set animation type to better convey the perception of something being actively loaded.
     *
     * @values 'glow', 'wave'
     */
    animation: {
      type: String,
      validator: (value: string) => {
        return ['glow', 'wave'].includes(value)
      },
    },
    /**
     * Component used for the root node. Either a string to use a HTML element or a component.
     */
    as: {
      type: String,
      default: 'span',
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    color: Color,
    /**
     * Size the component extra small, small, or large.
     *
     * @values 'xs', 'sm', 'lg'
     */
    size: {
      type: String,
      validator: (value: string) => {
        return ['xs', 'sm', 'lg'].includes(value)
      },
    },
    /**
     * The number of columns on extra small devices (<576px).
     */
    xs: Number,
    /**
     * The number of columns on small devices (<768px).
     */
    sm: Number,
    /**
     * The number of columns on medium devices (<992px).
     */
    md: Number,
    /**
     * The number of columns on large devices (<1200px).
     */
    lg: Number,
    /**
     * The number of columns on X-Large devices (<1400px).
     */
    xl: Number,
    /**
     * The number of columns on XX-Large devices (≥1400px).
     */
    xxl: Number,
  },
  setup(props, { slots }) {
    const repsonsiveClassNames: string[] = []

    BREAKPOINTS.forEach((bp) => {
      const breakpoint = props[bp]

      const infix = bp === 'xs' ? '' : `-${bp}`

      if (typeof breakpoint === 'number') {
        repsonsiveClassNames.push(`col${infix}-${breakpoint}`)
      }

      if (typeof breakpoint === 'boolean') {
        repsonsiveClassNames.push(`col${infix}`)
      }
    })

    return () =>
      h(
        props.as,
        {
          class: [
            props.animation ? `placeholder-${props.animation}` : 'placeholder',
            {
              [`bg-${props.color}`]: props.color,
              [`placeholder-${props.size}`]: props.size,
            },
            repsonsiveClassNames,
          ],
        },
        slots.default && slots.default(),
      )
  },
})
