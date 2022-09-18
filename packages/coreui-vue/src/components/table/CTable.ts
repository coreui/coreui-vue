import { defineComponent, h } from 'vue'

import { Color } from '../props'

const CTable = defineComponent({
  name: 'CTable',
  props: {
    /**
     * Set the vertical aligment.
     *
     * @values 'bottom', 'middle', 'top'
     */
    align: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return ['bottom', 'middle', 'top'].includes(value)
      },
    },
    /**
     * Sets the border color of the component to one of CoreUI’s themed colors.
     *
     * @values 'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'
     */
    borderColor: Color,
    /**
     * Add borders on all sides of the table and cells.
     */
    bordered: {
      type: Boolean,
      required: false,
    },
    /**
     * Remove borders on all sides of the table and cells.
     */
    borderless: {
      type: Boolean,
      required: false,
    },
    /**
     * Put the `<caption>` on the top of the table.
     *
     * @values 'top'
     */
    caption: {
      type: String,
      default: undefined,
      required: false,
      validator: (value: string) => {
        return value === 'top'
      },
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Enable a hover state on table rows within a `<CTableBody>`.
     */
    hover: {
      type: Boolean,
      required: false,
    },
    /**
     * Make any table responsive across all viewports or pick a maximum breakpoint with which to have a responsive table up to.
     *
     * @values boolean, 'sm', 'md', 'lg', 'xl', 'xxl'
     */
    responsive: {
      type: [Boolean, String],
      default: undefined,
      required: false,
      validator: (value: boolean | string) => {
        if (typeof value == 'string') {
          return ['sm', 'md', 'lg', 'xl', 'xxl'].includes(value)
        }
        if (typeof value == 'boolean') {
          return true
        }
        return false
      },
    },
    /**
     * Make table more compact by cutting all cell `padding` in half.
     */
    small: {
      type: Boolean,
      required: false,
    },
    /**
     * Add zebra-striping to any table row within the `<CTableBody>`.
     */
    striped: {
      type: Boolean,
      required: false,
    },
    /**
     * Add zebra-striping to any table column.
     *
     * @since 4.4.0
     */
    stripedColumns: {
      type: Boolean,
      required: false,
    },
  },
  setup(props, { slots, attrs }) {
    const table = () =>
      h(
        'table',
        {
          class: [
            'table',
            {
              [`align-${props.align}`]: props.align,
              [`caption-${props.caption}`]: props.caption,
              [`border-${props.borderColor}`]: props.borderColor,
              'table-bordered': props.bordered,
              'table-borderless': props.borderless,
              [`table-${props.color}`]: props.color,
              'table-hover': props.hover,
              'table-sm': props.small,
              'table-striped': props.striped,
              'table-striped-columns': props.stripedColumns,
            },
            attrs.class,
          ],
        },
        slots.default && slots.default(),
      )
    return () => [
      props.responsive
        ? h(
            'div',
            {
              class:
                typeof props.responsive === 'boolean'
                  ? 'table-responsive'
                  : `table-responsive-${props.responsive}`,
            },
            table(),
          )
        : table(),
    ]
  },
})

export { CTable }
