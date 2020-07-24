<template>
  <div>
    <div 
      v-if="itemsPerPageSelect || haveFilterOption" 
      class="row my-2 mx-0"
    >
      <div
        class="col-sm-6 form-inline p-0"
        v-if="haveFilterOption"
      >
        <template v-if="tableFilter">
          <label class="mr-2">{{tableFilterData.label}}</label>
          <input
            class="form-control"
            type="text"
            :placeholder="tableFilterData.placeholder"
            @input="tableFilterChange($event.target.value, 'input')"
            @change="tableFilterChange($event.target.value, 'change')"
            :value="tableFilterState"
            aria-label="table filter input"
          >
        </template>
        <slot name="cleaner" :clean="clean" :isFiltered="isFiltered">
          <template v-if="cleaner">
            <CIcon
              v-if="cleaner"
              v-bind="cleanerProps"
              @click.native="clean"
            />
          </template>
        </slot>
      </div>

      <div
        v-if="itemsPerPageSelect"
        class="col-sm-6 p-0"
        :class="{ 'offset-sm-6': !haveFilterOption }"
      >
        <div class="form-inline justify-content-sm-end">
          <label class="mr-2">{{paginationSelect.label}}</label>
          <select
            class="form-control"
            @change="paginationChange"
            aria-label="changes number of visible items"
          >
            <option value="" selected disabled hidden>
              {{perPageItems}}
            </option>
            <option
              v-for="(number, key) in paginationSelect.values"
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
          <slot name="thead-top"/>
          <tr v-if="header">
            <template v-for="(name, index) in columnNames">
              <th
                @click="changeSort(rawColumnNames[index], index)"
                :class="[headerClass(index), sortingIconStyles]"
                :style="headerStyles(index)"
                :key="index"
              >
                <slot :name="`${rawColumnNames[index]}-header`">
                  <div>{{name}}</div>
                </slot>
                <slot
                  v-if="isSortable(index)"
                  name="sorting-icon"
                  :state="getIconState(index)"
                  :classes="iconClasses(index)"
                >
                  <CIcon
                    width="18"
                    :content="$options.icons.cilArrowTop"
                    :class="iconClasses(index)"
                    :aria-label="`change column: '${name}' sorting`"
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
                    class="form-control form-control-sm"
                    @input="columnFilterEvent(colName, $event.target.value, 'input')"
                    @change="columnFilterEvent(colName, $event.target.value, 'change')"
                    :value="columnFilterState[colName]"
                    :aria-label="`column name: '${colName}' filter input`"
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
              @click="rowClicked(item, itemIndex + firstItemIndex, $event)"
              :class="item._classes" 
              :tabindex="clickableRows ? 0 : null"
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
                  {{ String(item[colName]) }}
                </td>
              </template>
            </tr>
            <tr
              v-if="$scopedSlots.details"
              @click="rowClicked(item, itemIndex + firstItemIndex, $event, true)"
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
                  <h2>
                    {{ noItemsText }}
                    <CIcon
                      width="30"
                      :content="$options.icons.cilBan"
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
                  <div>{{name}}</div>
                </slot>
                <slot
                  v-if="isSortable(index)"
                  name="sorting-icon"
                  :state="getIconState(index)"
                >
                  <CIcon
                    width="18"
                    :content="$options.icons.cilArrowTop"
                    :class="iconClasses(index)"
                  />
                </slot>
              </th>
            </template>
          </tr>
        </tfoot>
        <slot name="footer" :itemsAmount="currentItems.length"/>
        <slot name="caption"/>
      </table>

      <slot name="loading" v-if="loading">
        <CElementCover 
          :boundaries="[
            { sides: ['top'], query: 'td' },
            { sides: ['bottom'], query: 'tbody' }
          ]"
        />
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
import CElementCover from '../element-cover/CElementCover'
import CPagination from '../pagination/CPagination'
import CIcon from '@coreui/icons-vue/src/CIconRaw.vue'
import { cilArrowTop, cilBan, cilFilterX } from '@coreui/icons'

export default {
  name: 'CDataTable',
  icons: { cilArrowTop, cilBan, cilFilterX },
  components: {
    CPagination,
    CElementCover,
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
    itemsPerPageSelect: [Boolean, Object],
    sorter: [Boolean, Object],
    tableFilter: [Boolean, Object],
    columnFilter: [Boolean, Object],
    sorterValue: {
      type: Object,
      default: () => { return {} }
    },
    tableFilterValue: String,
    columnFilterValue: Object,
    header: {
      type: Boolean,
      default: true
    },
    footer: Boolean,
    loading: Boolean,
    clickableRows: Boolean,
    noItemsView: Object,
    cleaner: Boolean
  },
  data () {
    return {
      tableFilterState: this.tableFilterValue,
      columnFilterState: {},
      sorterState: {
        column: null,
        asc: true
      },
      page: this.activePage || 1,
      perPageItems: this.itemsPerPage,
      passedItems: this.items || []
    }
  },
  watch: {
    itemsPerPage (val) {
      this.perPageItems = val
    },
    sorterValue: {
      immediate: true,
      handler (val) {
        const asc = val.asc === false ? false : true
        this.sorterState = Object.assign({}, { asc, column: val.column })
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
    },
    items (val, oldVal) {
      if (val && oldVal && this.objectsAreIdentical(val, oldVal)) {
        return
      }
      this.passedItems = val || []
    },
    totalPages: {
      immediate: true,
      handler (val) {
        this.$emit('pages-change', val)
      }
    },
    computedPage (val) {
      this.$emit('page-change', val)
    },
    sortedItems: {
      immediate: true,
      handler (val, oldVal) {
        if (val && oldVal && this.objectsAreIdentical(val, oldVal)) {
          return
        }
        this.$emit('filtered-items-change', val)
      }
    }
  },
  computed: {
    columnFiltered () {
      let items = this.passedItems
      if (this.columnFilter && this.columnFilter.external) {
        return items
      }
      Object.entries(this.columnFilterState).forEach(([key, value]) => {
        const columnFilter = String(value).toLowerCase()
        if (columnFilter && this.rawColumnNames.includes(key)) {
          items = items.filter(item => {
            return String(item[key]).toLowerCase().includes(columnFilter)
          })
        }
      })
      return items
    },
    itemsDataColumns () {	
      return this.rawColumnNames.filter(name => {	
        return this.generatedColumnNames.includes(name)	
      })	
    },
    tableFiltered () {
      let items = this.columnFiltered
      if (!this.tableFilterState || (this.tableFilter && this.tableFilter.external)) {
        return items
      }
      const filter = this.tableFilterState.toLowerCase()
      const hasFilter = (item) => String(item).toLowerCase().includes(filter)
      items = items.filter(item => {
        return this.itemsDataColumns.filter(key => hasFilter(item[key])).length
      })
      return items
    },
    sortedItems () {
      const col = this.sorterState.column
      if (!col || !this.rawColumnNames.includes(col) || this.sorter.external) {
        return this.tableFiltered
      }

      //if values in column are to be sorted by numeric value they all have to be type number
      const flip = this.sorterState.asc ? 1 : -1
      return this.tableFiltered.slice().sort((item, item2) => {
        const value  = item[col]
        const value2 = item2[col]
        const a = typeof value === 'number' ? value : String(value).toLowerCase()
        const b = typeof value2 === 'number' ? value2 : String(value2).toLowerCase()
        return a > b ? 1 * flip : b > a ? -1 * flip : 0
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
          'table-fixed': this.fixed,
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
    tableFilterData () {
      return {
        label: this.tableFilter.label || 'Filter:',
        placeholder: this.tableFilter.placeholder || 'type string...'
      }
    },
    paginationSelect () {
      return {
        label: this.itemsPerPageSelect.label || 'Items per page:',
        values: this.itemsPerPageSelect.values || [5, 10, 20, 50]
      }
    },
    noItemsText () {
      const customValues = this.noItemsView || {}
      if (this.passedItems.length) {
        return customValues.noResults || 'No filtering results'
      }
      return customValues.noItems || 'No items'
    },
    isFiltered () {
      return this.tableFilterState || 
             Object.values(this.columnFilterState).join('') || 
             this.sorterState.column
    },
    cleanerProps () {
      return { 
        content: this.$options.icons.cilFilterX,
        class: `ml-2 ${this.isFiltered ? 'text-danger' : 'transparent'}`,
        role: this.isFiltered ? 'button' : null,
        tabindex: this.isFiltered ? 0 : null,
      }
    },
    haveFilterOption () {
      return this.tableFilter || this.cleaner || this.$scopedSlots.cleaner
    }
  },
  methods: {
    changeSort (column, index) {
      if (!this.isSortable(index)) {
        return
      }
      //if column changed or sort was descending change asc to true
      const state = this.sorterState
      const columnRepeated = state.column === column 
      if (!this.sorter || !this.sorter.resetable) {
        state.column = column 
      } else {
        state.column = columnRepeated && state.asc === false ? null : column
      }
      state.asc = !(columnRepeated && state.asc)
      this.$emit('update:sorter-value', this.sorterState)
    },
    columnFilterEvent (colName, value, type) {
      const isLazy = this.columnFilter && this.columnFilter.lazy === true
      if (isLazy && type === 'input' || !isLazy && type === 'change') {
        return
      }
      this.$set(this.columnFilterState, colName, value)
      this.$emit('update:column-filter-value', this.columnFilterState)
    },
    tableFilterChange (value, type) {
      const isLazy = this.tableFilter && this.tableFilter.lazy === true
      if (isLazy && type === 'input' || !isLazy && type === 'change') {
        return
      }
      this.tableFilterState = value
      this.$emit('update:table-filter-value', this.tableFilterState)
    },
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
      return this.sorter && 
             (!this.fields || this.fields[index].sorter !== false) && 
             this.itemsDataColumns.includes(this.rawColumnNames[index])
    },
    headerClass (index) {
      const fields = this.fields
      return fields && fields[index]._classes ? fields[index]._classes : ''
    },
    headerStyles (index) {
      let style = 'vertical-align:middle;overflow:hidden;'
      if (this.isSortable(index)) {
        style += `cursor:pointer;`
      }
      if (this.fields && this.fields[index] && this.fields[index]._style) {
        style += this.fields[index]._style
      }
      return style
    },
    rowClicked (item, index, e, detailsClick = false) {
      this.$emit(
        'row-clicked', item, index, this.getClickedColumnName(e, detailsClick), e
      )
    },
    getClickedColumnName (e, detailsClick) {
      if (detailsClick) {
        return 'details'
      } else {
        const children = Array.from(e.target.closest('tr').children)
        const clickedCell = children.filter(child => child.contains(e.target))[0]
        return this.rawColumnNames[children.indexOf(clickedCell)]
      }
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
      if (this.itemsPerPageSelect.external) {
        return
      }
      this.perPageItems = Number(e.target.value)
    },
    objectsAreIdentical (obj1, obj2) {
      return obj1.length === obj2.length && 
             JSON.stringify(obj1) === JSON.stringify(obj2)
    },
    clean() {
      this.tableFilterState = ""
      this.columnFilterState = {}
      this.sorterState = { column: "", asc: true }
    }
  }
}
</script>

<style scoped>
thead tr:not(:last-child) th {
  border-bottom: 1px;
}

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
  -ms-transform: translateY(-50%) rotate(-180deg);
  transform: translateY(-50%) rotate(-180deg);
}
</style>
