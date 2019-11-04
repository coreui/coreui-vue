<template>
  <div>
    <div v-if="itemsPerPageSelect || tableFilter" class="row my-2 mx-0">
      <div
        class="col-sm-6 form-inline p-0"
        v-if="tableFilter"
      >
        <label class="mr-2">Filter:</label>
        <input
          class="form-control table-filter"
          type="text"
          placeholder="type string..."
          @input="tableFilterChange($event.target.value)"
          @change="tableFilterChange($event.target.value, 'change')"
          :value="tableFilterState"
        >
      </div>

      <div
        v-if="itemsPerPageSelect"
        class="col-sm-6 p-0"
        :class="{ 'offset-sm-6': !tableFilter }"
      >
        <div class="form-inline float-sm-right">
          <label class="mr-2">Items per page:</label>
          <select
            class="form-control"
            @change="paginationChange"
          >
            <option value="" selected disabled hidden>
              {{perPageItems}}
            </option>
            <option
              v-for="(number, key) in [5,10,20,50]"
              :val="number"
              :key="key"
            >
              {{number}}
            </option>
          </select>
        </div>
      </div>
    </div>


    <slot name="over-table"/>
    <div :class="`position-relative ${responsive ? 'table-responsive' : '' }`">
      <table :class="tableClasses">
        <thead>
          <tr>
            <template v-for="(name, index) in columnNames">
              <th
                @click="changeSort(rawColumnNames[index], index)"
                :class="[headerClass(index), sortingIconStyles]"
                :style="headerStyles(index)"
                :key="index"
              >
                <slot :name="`${rawColumnNames[index]}-header`">
                  <div class="d-inline">{{name}}</div>
                </slot>
                <slot
                  v-if="isSortable(index)"
                  name="sorting-icon"
                  :state="getIconState(index)"
                >
                  <CIcon
                    width="18"
                    name="arrowTop"
                    :class="iconClasses(index)"
                  />
                </slot>
              </th>
            </template>
          </tr>

          <tr v-if="columnFilter" class="table-sm">
            <template v-for="(colName, index) in rawColumnNames" >
              <th :class="headerClass(index)" :key="index">
                <slot :name="`${rawColumnNames[index]}-filter`">
                  <input
                    v-if="!fields || fields[index].filter !== false"
                    class="w-100 table-filter"
                    @input="columnFilterEvent(colName, $event.target.value, 'input')"
                    @change="columnFilterEvent(colName, $event.target.value, 'change')"
                    :value="columnFilterState[colName]"
                  />
                </slot>
              </th>
            </template>
          </tr>
        </thead>


        <tbody 
          :style="clickableRows ? 'cursor:pointer;': null" 
          class="position-relative"
        >
          <template v-for="(item, itemIndex) in currentItems" >
            <tr
              :class="item._classes" 
              :tabindex="clickableRows ? 0 : null"
              @click="rowClicked(item, itemIndex + firstItemIndex)"
              :key="itemIndex"
            >
              <template v-for="(colName, index) in rawColumnNames" >
                <slot
                  v-if="$scopedSlots[colName]"
                  :name="colName"
                  :item="item"
                  :index="itemIndex + firstItemIndex"
                />
                <td
                  v-else
                  :class="cellClass(item, colName, index)"
                  :key="index"
                >
                  {{String(item[colName])}}
                </td>
              </template>
            </tr>
            <tr
              v-if="$scopedSlots.details"
              class="p-0"
              style="border:none !important"
              :key="'details' + itemIndex"
            >
              <td
                :colspan="colspan"
                class="p-0"
                style="border:none !important"
              >
                <slot
                  name="details"
                  :item="item"
                  :index="itemIndex + firstItemIndex"
                />
              </td>
            </tr>
          </template>
          <tr v-if="!currentItems.length">
            <td :colspan="colspan">
              <slot name="no-items-view">
                <div class="text-center my-5">
                  <h2>{{ passedItems.length ? 'No filtering results ' : 'No items'}}
                    <CIcon
                      width="30"
                      name="ban"
                      class="text-danger mb-2"
                    />
                  </h2>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>


        <tfoot v-if="footer && currentItems.length > 0">
          <tr>
            <template v-for="(name, index) in columnNames">
              <th
                @click="changeSort(rawColumnNames[index], index)"
                :class="[headerClass(index), sortingIconStyles]"
                :style="headerStyles(index)"
                :key="index"
              >
                <slot :name="`${rawColumnNames[index]}-header`">
                  <div class="d-inline">{{name}}</div>
                </slot>
                <slot
                  v-if="isSortable(index)"
                  name="sorting-icon"
                  :state="getIconState(index)"
                >
                  <CIcon
                    width="18"
                    name="arrowTop"
                    :class="iconClasses(index)"
                  />
                </slot>
              </th>
            </template>
          </tr>
        </tfoot>
        <slot name="caption"/>
      </table>

      <slot name="loading" v-if="loading">
        <div style="position:absolute;left:0;top:0;bottom:0;right:0;background-color:rgb(255,255,255,0.4);">
          <div style="position:absolute;bottom:50%;left:50%;transform:translateX(-50%);">
            <CSpinner color="success"/>
          </div>
        </div>
      </slot>

    </div>
    <slot name="under-table"/>


    <CPagination
      v-if="pagination"
      v-show="totalPages > 1"
      :activePage.sync="page"
      :pages="totalPages"
      v-bind="typeof pagination === 'object' ? pagination : null"
    />
  </div>
</template>

<script>
import CSpinner from '../spinner/CSpinner'
import CPagination from '../pagination/CPagination'
import { CIcon as CIconRaw} from '@coreui/icons/vue'
import { arrowTop, ban } from '@coreui/icons'
const CIcon = Object.assign({}, CIconRaw, { icons : { arrowTop, ban }})

export default {
  name: 'CDataTable',
  components: {
    CPagination,
    CSpinner,
    CIcon
  },
  props: {
    items: Array,
    fields: Array,
    itemsPerPage: {
      type: Number,
      default: 10
    },
    activePage: Number,    
    pagination: [Boolean, Object],
    addTableClasses: [String, Array, Object],
    responsive: {
      type: Boolean,
      default: true
    },
    size: String,
    dark: Boolean,
    striped: Boolean,
    fixed: Boolean,
    hover: Boolean,
    border: Boolean,
    outlined: Boolean,
    itemsPerPageSelect: Boolean,
    sorter: [Boolean, String],
    tableFilter: [Boolean, String],
    columnFilter: [Boolean, String],
    sorterValue: {
      type: Object,
      default: () => { return {} }
    },
    tableFilterValue: String,
    columnFilterValue: Object,
    footer: Boolean,
    loading: Boolean,
    clickableRows: Boolean
  },
  data () {
    return {
      tableFilterState: this.tableFilterValue,
      columnFilterState: {},
      sorterState: {
        column: undefined,
        asc: true
      },
      page: this.activePage || 1,
      perPageItems: this.itemsPerPage,
      passedItems: this.items || []
    }
  },
  watch: {
    sorterValue: {
      immediate: true,
      handler (val) {
        this.sorterState.column = val.column
        this.sorterState.asc = val.asc === false ? false : true
      }
    },
    tableFilterValue (val) {
      this.tableFilterState = val
    },
    columnFilterValue: {
      immediate: true,
      handler (val) {
        this.columnFilterState = Object.assign({}, val) 
      }
      // const state = this.columnFilterState
      // const currentColumns = Object.keys(state)
      // Object.keys(val).forEach(colName => {
      //   if (!currentColumns.includes(colName)) {
      //     this.setColumnFilter(colName, val[colName] || '')
      //   }
      // })
      // currentColumns.forEach(colName => state[colName] = val[colName] || '')
    },
    items (val, oldVal) {
      if (
        val.length !== oldVal.length ||
        JSON.stringify(val) !== JSON.stringify(oldVal)
      ) {
        this.passedItems = val
      }
    },
    totalPages: {
      immediate: true,
      handler (val) {
        this.$emit('pages-change', val)
      }
    }
  },
  computed: {
    columnFiltered () {
      let items = this.passedItems.slice()
      if (this.columnFilter === true) {
        Object.entries(this.columnFilterState).forEach(([key, value]) => {
          if (value && this.rawColumnNames.includes(key)) {
            const columnFilter = String(value).toLowerCase()
            items = items.filter(item => {
              return String(item[key]).toLowerCase().includes(columnFilter)
            })
          }
        })
      }
      return items
    },
    filterableCols () {
      return this.rawColumnNames.filter(name => {
        return this.generatedColumnNames.includes(name)
      })
    },
    tableFiltered () {
      let items = this.columnFiltered.slice()
      if (this.tableFilter === true && this.tableFilterState) {
        const filter = this.tableFilterState.toLowerCase()
        const hasFilter = (item) => String(item).toLowerCase().includes(filter)
        items = items.filter(item => {
          return this.filterableCols.filter(key => hasFilter(item[key])).length
        })
      }
      return items
    },
    sortedItems () {
      const col = this.sorterState.column
      if (!col || this.sorter !== true || !this.rawColumnNames.includes(col)) {
        return this.tableFiltered
      }
      //if values in column are to be sorted by numeric value they all have to be type number
      const flip = this.sorterState.asc ? 1 : -1
      return this.tableFiltered.slice().sort((a,b) => {
        return (a[col] > b[col]) ? 1 * flip : ((b[col] > a[col]) ? -1 * flip : 0)
      })
    },
    firstItemIndex () {
      return (this.computedPage - 1) * this.perPageItems || 0
    },
    paginatedItems () {
      return this.sortedItems.slice(
        this.firstItemIndex,
        this.firstItemIndex + this.perPageItems
      )
    },
    currentItems () {
      return this.computedPage ? this.paginatedItems : this.sortedItems
    },
    totalPages () {
      return Math.ceil((this.sortedItems.length)/ this.perPageItems) || 1
    },
    computedPage () {
      return this.pagination ? this.page : this.activePage
    },
    generatedColumnNames () {
      return Object.keys(this.passedItems[0] || {}).filter(el => el.charAt(0) !== '_')
    },
    rawColumnNames () {
      if (this.fields) {
        return this.fields.map(el => el.key || el)
      }
      return this.generatedColumnNames
    },
    columnNames () {
      if (this.fields) {
        return this.fields.map(f => {
          return f.label !== undefined ? f.label : this.pretifyName(f.key || f)
        })
      }
      return this.rawColumnNames.map(el => this.pretifyName(el))
    },
    tableClasses () {
      return [
        'table',
        this.addTableClasses,
        {
          [`table-${this.size}`]: this.size,
          'table-dark': this.dark,
          'table-striped': this.striped,
          'b-table-fixed': this.fixed,
          'table-hover': this.hover,
          'table-bordered': this.border,
          'border': this.outlined
        }
      ]
    },
    sortingIconStyles () {
      return {'position-relative pr-4' : this.sorter }
    },
    colspan () {
      return this.rawColumnNames.length
    },
    // isFiltered () {
    //   return this.tableFilterState || Object.values(this.columnFilterState).join('')
    // }
  },
  methods: {
    changeSort (column, index) {
      if (column && !this.isSortable(index)) {
        return
      }
      //if column changed or sort was descending change asc to true
      const state = this.sorterState
      state.asc = state.column !== column || !state.asc
      state.column = column
      this.$emit('update:sorter-value', this.sorterState)
    },
    columnFilterEvent (colName, value, type) {
      this.setColumnFilter(colName, value)
      const e = type === 'input' ? 'column-filter-input' : 'update:column-filter-value'
      this.$emit(e, this.columnFilterState)
    },
    setColumnFilter (colName, value) {
      this.$set(this.columnFilterState, colName, value)
    },
    tableFilterChange (value, type = 'input') {
      this.tableFilterState = value
      const e = type === 'input' ? 'table-filter-input' : 'update:table-filter-value'
      this.$emit(e, this.tableFilterState)
    },
    // clear () {
    //   this.tableFilterState = ''
    //   this.columnFilterState = {}
    //   this.sorterState.column = ''
    //   this.sorterState.asc = true
    //   const inputs = this.$el.getElementsByClassName('table-filter')
    //   for (let input of inputs) {
    //     input.value = ''
    //   }
    // },
    pretifyName (name) {
      return name.replace(/[-_.]/g, ' ')
        .replace(/ +/g, ' ')
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
    },
    cellClass (item, colName, index) {
      let classes = []
      if (item._cellClasses && item._cellClasses[colName]) {
        classes.push(item._cellClasses[colName])
      }
      if (this.fields && this.fields[index]._classes) {
        classes.push(this.fields[index]._classes)
      }
      return classes
    },
    isSortable (index) {
      return this.sorter && (!this.fields || this.fields[index].sorter !== false)
    },
    headerClass (index) {
      const fields = this.fields
      return fields && fields[index]._classes ? fields[index]._classes : ''
    },
    headerStyles (index) {
      let style = ''
      if (this.isSortable(index)) {
        style += `cursor:pointer;`
      }
      if (this.fields && this.fields[index] && this.fields[index]._style) {
        style += this.fields[index]._style
      }
      return style
    },
    rowClicked (item, index) {
      this.$emit('row-clicked', item, index)
    },
    getIconState (index) {
      const direction = this.sorterState.asc ? 'asc' : 'desc'
      return this.rawColumnNames[index] === this.sorterState.column ? direction : 0
    },
    iconClasses (index) {
      const state = this.getIconState(index)
      return [
        'icon-transition position-absolute arrow-position',
        {
          'transparent': !state,
          'rotate-icon': state === 'desc'
        }
      ]
    },
    paginationChange (e) {
      this.$emit('pagination-change', Number(e.target.value))
      this.perPageItems = Number(e.target.value)
    }
  }
}
</script>
<style scoped>
.transparent {
  opacity: 0.4;
}
.icon-transition {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.arrow-position {
  right: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.rotate-icon {
  -ms-transform: translateY(-50%)  rotate(-180deg);
  transform: translateY(-50%) rotate(-180deg);
}
</style>
