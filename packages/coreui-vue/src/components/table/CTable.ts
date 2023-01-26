import { computed, defineComponent, h, PropType } from 'vue'

import { Color } from '../props'
import { CTableBody } from './CTableBody'
import { CTableCaption } from './CTableCaption'
import { CTableDataCell } from './CTableDataCell'
import { CTableFoot } from './CTableFoot'
import { CTableHead } from './CTableHead'
import { CTableHeaderCell } from './CTableHeaderCell'
import { CTableRow } from './CTableRow'

export interface Column {
  label?: string
  key: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _style?: any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}

export interface FooterItem {
  label?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}

export type Item = {
  [key: string]: number | string | any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  _props?: any
}

const pretifyName = (name: string) => {
  return name
    .replace(/[-_.]/g, ' ')
    .replace(/ +/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

const label = (column: Column | string) =>
  typeof column === 'object'
    ? column.label !== undefined
      ? column.label
      : pretifyName(column.key)
    : pretifyName(column)

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
     * @values 'top' | string
     */
    caption: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Set the text of the table caption and the caption on the top of the table.
     *
     * @since 4.5.0
     */
    captionTop: {
      type: String,
      default: undefined,
      required: false,
    },
    /**
     * Prop for table columns configuration. If prop is not defined, table will display columns based on the first item keys, omitting keys that begins with underscore (e.g. '_props')
     *
     * In columns prop each array item represents one column. Item might be specified in two ways:
     * String: each item define column name equal to item value.
     * Object: item is object with following keys available as column configuration:
     * - key (required)(String) - define column name equal to item key.
     * - label (String) - define visible label of column. If not defined, label will be generated automatically based on column name, by converting kebab-case and snake_case to individual words and capitalization of each word.
     * - _props (Object) - adds classes to all cels in column, ex. _props: { scope: 'col', className: 'custom-class' },
     * - _style (Object) - adds styles to the column header (useful for defining widths)
     *
     * @since 4.5.0
     */
    columns: {
      type: Array as PropType<(Column | string)[]>,
      required: false,
    },
    /**
     * Sets the color context of the component to one of CoreUI’s themed colors.
     *
     * @values  'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', string
     */
    color: Color,
    /**
     * Array of objects or strings, where each element represents one cell in the table footer.
     *
     * Example items:
     * ['FooterCell', 'FooterCell', 'FooterCell']
     * or
     * [{ label: 'FooterCell', _props: { color: 'success' }, ...]
     *
     * @since 4.5.0
     */
    footer: {
      type: Array as PropType<(FooterItem | string)[]>,
      required: false,
    },
    /**
     * Enable a hover state on table rows within a `<CTableBody>`.
     */
    hover: {
      type: Boolean,
      required: false,
    },
    /**
     * Array of objects, where each object represents one item - row in table. Additionally, you can add style classes to each row by passing them by '_props' key and to single cell by '_cellProps'.
     *
     * Example item:
     * { name: 'John' , age: 12, _props: { color: 'success' }, _cellProps: { age: { className: 'fw-bold'}}}
     *
     * @since 4.5.0
     */
    items: {
      type: Array as PropType<Item[]>,
      required: false,
    },
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
    /**
     * Properties that will be passed to the table footer component.
     *
     * Properties to [CTableFoot](#ctablefoot) component.
     * @since 4.5.0
     */
    tableFootProps: {
      type: Object,
      default: undefined,
      required: false,
    },
    /**
     * Properties that will be passed to the table head component.
     *
     *  Properties to [CTableHead](#ctablehead) component.
     * @since 4.5.0
     */
    tableHeadProps: {
      type: Object,
      default: undefined,
      required: false,
    },
  },
  setup(props, { slots, attrs }) {
    const rawColumnNames = computed(() =>
      props.columns
        ? props.columns.map((column: Column | string) => {
            if (typeof column === 'object') return column.key
            else return column
          })
        : Object.keys((props.items && props.items[0]) || {}).filter((el) => el.charAt(0) !== '_'),
    )

    const table = () =>
      h(
        'table',
        {
          class: [
            'table',
            {
              [`align-${props.align}`]: props.align,
              [`caption-top`]: props.captionTop || props.caption === 'top',
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
        {
          default: () => [
            ((props.caption && props.caption !== 'top') || props.captionTop) &&
              h(
                CTableCaption,
                {},
                {
                  default: () => props.caption || props.captionTop,
                },
              ),
            props.columns &&
              h(
                CTableHead,
                {
                  ...props.tableHeadProps,
                },
                {
                  default: () =>
                    h(
                      CTableRow,
                      {},
                      {
                        default: () => [
                          props.columns &&
                            props.columns.map((column: Column | string) =>
                              h(
                                CTableHeaderCell,
                                {
                                  ...(typeof column === 'object' &&
                                    column._props && { ...column._props }),
                                  ...(typeof column === 'object' &&
                                    column._style && { style: { ...column._style } }),
                                },
                                {
                                  default: () => label(column),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                },
              ),
            props.items &&
              h(
                CTableBody,
                {},
                {
                  default: () => [
                    props.items &&
                      props.items.map((item: Item) =>
                        h(
                          CTableRow,
                          {
                            ...(item._props && { ...item._props }),
                          },
                          {
                            default: () => [
                              rawColumnNames.value.map(
                                (colName: string) =>
                                  item[colName] &&
                                  h(
                                    CTableDataCell,
                                    {
                                      ...(item._cellProps &&
                                        item._cellProps['all'] && { ...item._cellProps['all'] }),
                                      ...(item._cellProps &&
                                        item._cellProps[colName] && {
                                          ...item._cellProps[colName],
                                        }),
                                    },
                                    {
                                      default: () => item[colName],
                                    },
                                  ),
                              ),
                            ],
                          },
                        ),
                      ),
                  ],
                },
              ),
            slots.default && slots.default(),
            props.footer &&
              h(
                CTableFoot,
                {
                  ...props.tableFootProps,
                },
                {
                  default: () =>
                    h(
                      CTableRow,
                      {},
                      {
                        default: () => [
                          props.footer &&
                            props.footer.map((item: FooterItem | string) =>
                              h(
                                CTableDataCell,
                                {
                                  ...(typeof item === 'object' &&
                                    item._props && { ...item._props }),
                                },
                                {
                                  default: () => (typeof item === 'object' ? item.label : item),
                                },
                              ),
                            ),
                        ],
                      },
                    ),
                },
              ),
          ],
        },
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
