import { computed, defineComponent, h, PropType } from 'vue'

import { CTableBody } from './CTableBody'
import { CTableCaption } from './CTableCaption'
import { CTableDataCell } from './CTableDataCell'
import { CTableFoot } from './CTableFoot'
import { CTableHead } from './CTableHead'
import { CTableHeaderCell } from './CTableHeaderCell'
import { CTableRow } from './CTableRow'

import { Color } from '../../props'
import { getColumnLabel, getColumnNames } from './utils'
import type { Column, FooterItem, Item } from './types'

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
    bordered: Boolean,
    /**
     * Remove borders on all sides of the table and cells.
     */
    borderless: Boolean,
    /**
     * Put the `<caption>` on the top of the table.
     *
     * @values 'top' | string
     */
    caption: String,
    /**
     * Set the text of the table caption and the caption on the top of the table.
     *
     * @since 4.5.0
     */
    captionTop: String,
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
    },
    /**
     * Enable a hover state on table rows within a `<CTableBody>`.
     */
    hover: Boolean,
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
    },
    responsive: {
      type: [Boolean, String],
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
    small: Boolean,
    /**
     * Add zebra-striping to any table row within the `<CTableBody>`.
     */
    striped: Boolean,
    /**
     * Add zebra-striping to any table column.
     *
     * @since 4.4.0
     */
    stripedColumns: Boolean,
    /**
     * Properties that will be passed to the table footer component.
     *
     * Properties to [CTableFoot](#ctablefoot) component.
     * @since 4.5.0
     */
    tableFootProps: {
      type: Object,
    },
    /**
     * Properties that will be passed to the table head component.
     *
     *  Properties to [CTableHead](#ctablehead) component.
     * @since 4.5.0
     */
    tableHeadProps: {
      type: Object,
    },
  },
  setup(props, { slots, attrs }) {
    const columnNames = computed(() => getColumnNames(props.columns, props.items))
    //   props.columns
    //     ? props.columns.map((column: Column | string) => {
    //         if (typeof column === 'object') return column.key
    //         else return column
    //       })
    //     : Object.keys((props.items && props.items[0]) || {}).filter((el) => el.charAt(0) !== '_'),
    // )

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
                                  default: () => getColumnLabel(column),
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
                              columnNames.value &&
                                columnNames.value.map(
                                  (colName: string) =>
                                    item[colName] !== undefined &&
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
