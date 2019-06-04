<template>
  <div>
    <div v-if="optionsRow" class="c-row c-my-2 c-mx-0">
      <div
        class="c-col-sm-6 c-form-inline c-p-0"
        v-if="optionsRow !== 'noFilter'"
      >
        <label class="c-mr-2">Filter: </label>
        <input
          class="c-form-control c-table-filter"
          type="text"
          placeholder="type string..."
          @input="tableFilter = $event.target.value"
          :value="tableFilter"
        >
      </div>

      <div
        v-if="havePaginationMenu()"
        class="c-col-sm-6 c-p-0"
        :class="optionsRow === 'noFilter' ? 'c-offset-sm-6' : ''"
      >
        <div class="c-form-inline c-float-sm-right">
          <label class="mr-2">Items per page: </label>
          <select
            class="c-form-control"
            @change="paginationChange"
          >
            <option value="" selected disabled hidden>
              {{perPageItems}}
            </option>
            <option v-for="number in [5,10,20,50]" val="number">
              {{number}}
            </option>
          </select>
        </div>
      </div>
    </div>


    <slot name="over-table"/>
    <div :class="`c-position-relative ${notResponsive ? '' : 'c-table-responsive'}`">
      <table :class="tableClasses">
        <thead>
          <tr>
            <th v-if="indexColumn" style="width:40px"></th>
            <template v-for="(name, index) in columnNames">
              <th
                @click="changeSort(rawColumnNames[index], index)"
                :class="[headerClass(index), sortingIconStyles]"
                :style="headerStyles(index)"
              >
                <slot :name="`${rawColumnNames[index]}-header`">
                  <div class="c-d-inline">{{name}}</div>
                </slot>
                <slot
                  v-if="!noSorting && sortable(index)"
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

          <tr v-if="filterRow" class="c-table-sm">
            <th v-if="indexColumn" class="c-pb-2">
              <i
                v-if="indexColumn !== 'noCleaner'"
                class="cui-ban c-icons c-text-danger c-font-lg c-text-center c-d-block"
                @click="clear"
                title="clear table"
              ></i>
            </th>
            <template v-for="(colName, index) in rawColumnNames" >
              <th :class="headerClass(index)">
                <slot :name="`${rawColumnNames[index]}-filter`">
                  <input
                    v-if="!fields || !fields[index].noFilter"
                    class="c-w-100 c-table-filter"
                    @input="addColumnFilter(colName, $event.target.value)"
                    :value="columnFilter[colName]"
                  ></input>
                </slot>
              </th>
            </template>
          </tr>
        </thead>


        <tbody :style="bodyStyle" class="c-position-relative">
          <template v-for="(item, itemIndex) in currentItems" >
            <tr
              :class="item._classes" :tabindex="bodyStyle ? 0 : null"
              @click="rowClicked(item, itemIndex + firstItemIndex)"
            >
                <slot
                  v-if="indexColumn"
                  name="index-column"
                  :pageIndex="itemIndex"
                  :index="firstItemIndex + itemIndex"
                  :number="firstItemIndex + itemIndex + 1"
                >
                  <td>
                    {{indexColumn !== 'noIndexes' ? firstItemIndex + itemIndex + 1 : ''}}
                  </td>
                </slot>
              <template v-for="(colName, index) in rawColumnNames" >
                <slot
                  v-if="$scopedSlots[colName]"
                  :name="colName"
                  :item="item"
                  :index="itemIndex + firstItemIndex"
                />
                <td v-else :class="cellClass(item, colName, index)">
                  {{item[colName]}}
                </td>
              </template>
            </tr>
            <tr
              v-if="$scopedSlots.details"
              class="c-p-0"
              style="border:none !important"
            >
              <td
                :colspan="colspan"
                class="c-p-0"
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
              <slot name="empty-table">
                <div class="c-text-center c-my-5">
                  <h2>{{ passedItems.length ? 'No filtering results ' : 'No items'}}
                    <i
                      style="font-weight: 1000"
                      class="c-text-danger c-icons c-font-2xl cui-ban"
                    ></i>
                  </h2>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>


        <tfoot v-if="footer && currentItems.length > 3">
          <tr>
            <th v-if="indexColumn" style="width:40px"></th>
            <template v-for="(name, index) in columnNames">
              <th
                @click="changeSort(rawColumnNames[index], index)"
                :class="[headerClass(index), sortingIconStyles]"
                :style="headerStyles(index)"
              >
                <slot :name="`${rawColumnNames[index]}-header`">
                  <div class="c-d-inline">{{name}}</div>
                </slot>
                <slot
                  v-if="!noSorting && sortable(index)"
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


      <div
        v-if="loading"
        :style="topLoadingPosition"
        style="position:absolute;left:50%;transform:translateX(-50%);"
      >
        <CSpinner
          class="c-spinner-border c-text-success"
          :style="spinnerSize"
          role="status"
        />
      </div>
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
import CSpinner from '../Spinner/CSpinner'
import CPagination from '../Pagination/CPagination'
import { CIcon as CIconRaw} from '@coreui/icons/vue'
import { arrowTop, arrowBottom } from '@coreui/icons'
const CIcon = Object.assign({}, CIconRaw, { icons : { arrowTop, arrowBottom }})

export default {
  name: 'CTable',
  components: {
    CPagination,
    CSpinner,
    CIcon
  },
  props: {
    items: Array,
    fields: Array,
    perPage: {
      type: Number,
      default: 10
    },
    activePage: {
      type: Number,
      default: 1
    },
    indexColumn: [Boolean, String],
    filterRow: Boolean,
    pagination: [Boolean, Object],
    addTableClasses: String,
    notResponsive: Boolean,
    noSorting: Boolean,
    small: Boolean,
    dark: Boolean,
    striped: Boolean,
    fixed: Boolean,
    hover: Boolean,
    border: Boolean,
    outlined: Boolean,
    optionsRow: [Boolean, String],
    footer: Boolean,
    defaultSorter: {
      tyep: Array,
      default: () => []
    },
    defaultTableFilter: String,
    defaultColumnFilter: Object,
    loading: Boolean
  },
  data () {
    return {
      tableFilter: this.defaultTableFilter,
      columnFilter: this.defaultColumnFilter || {},
      sorter: { name: this.defaultSorter[0], direction: this.defaultSorter[1] },
      firstItemIndex: 0,
      page: this.activePage,
      perPageItems: this.perPage,
      passedItems: this.items || []
    }
  },
  computed: {
    columnFiltered () {
      let items = this.passedItems
      Object.keys(this.columnFilter).forEach(key => {
        items = items.filter(item => String(item[key]).toLowerCase().includes(this.columnFilter[key].toLowerCase()))
      })
      return items
    },
    tableFiltered () {
      let items = this.columnFiltered
      if (this.tableFilter) {
        items = items.filter(item => {
          return Object.keys(item).filter(key => String(item[key]).toLowerCase().includes(this.tableFilter.toLowerCase())).length
        })
      }
      return items
    },
    sortedItems () {
      //if numbers should be sorted by numeric value they all have to be valid js numbers
      const flip = this.sorter.direction === 'desc' ? -1 : 1
      const n = this.sorter.name
      return this.tableFiltered.sort((a,b) => {
        //escape html
        let c = typeof a[n] === 'string' ? a[n].replace(/<(?:.|\n)*?>/gm, '') : a[n]
        let d = typeof b[n] === 'string' ? b[n].replace(/<(?:.|\n)*?>/gm, '') : b[n]
        if (typeof c !== typeof d) {
          c = String(c)
          d = String(d)
        }
        return (c > d) ? 1 * flip : ((d > c) ? -1 * flip : 0)
      })
    },
    currentItems () {
      if (this.computedPage) {
        this.firstItemIndex = (this.computedPage - 1) * this.perPageItems
        return this.sortedItems.slice(this.firstItemIndex, this.firstItemIndex + this.perPageItems)
      }
      return this.sortedItems
    },
    totalPages () {
      return Math.ceil((this.sortedItems.length)/ this.perPageItems) || 1
    },
    computedPage () {
      return this.pagination ? this.page : this.activePage
    },
    rawColumnNames () {
      if (this.fields)
        return typeof this.fields[0] === 'object' ? this.fields.map(el => el.key) : this.fields
      return Object.keys(this.currentItems[0]).filter(el => el.charAt(0) !== '_')
    },
    columnNames () {
      if (this.fields)
          return this.fields.map(el => el.label !== undefined ? el.label : this.columnNamePretify(el.key || el))
      return this.rawColumnNames.map(el => this.columnNamePretify(el))
    },
    tableClasses () {
      return [
        'c-table',
        this.addTableClasses,
        {
          'c-is-loading': this.loading,
          'c-table-sm': this.small,
          'c-table-dark': this.dark,
          'c-table-striped': this.striped,
          'c-b-table-fixed': this.fixed,
          'c-table-hover': this.hover,
          'c-table-bordered': this.border,
          'c-border': this.outlined
        }
      ]
    },
    bodyStyle () {
      return {'cursor:pointer': this.$listeners && this.$listeners['row-clicked']}
    },
    sortingIconStyles () {
      return !this.noSorting ? 'c-position-relative c-pr-4' : ''
    },
    colspan () {
      return this.indexColumn ? this.rawColumnNames.length + 1 : this.rawColumnNames.length
    },
    topLoadingPosition () {
      const headerHeight = (this.filterRow ? 38 : 0) + ( this.small ? 32 + 4 : 46 + 7)
      return `top:${headerHeight}px`
    },
    spinnerSize () {
      const size = this.small ? '1.4rem' : this.currentItems.length === 1 ? '2rem' : '3rem'
      return `width:${size};height:${size}`
    },

  },
  watch: {
    items (val, oldVal) {
      if(val.length !== oldVal.length || JSON.stringify(val) !== JSON.stringify(oldVal))
        this.passedItems = val
    },
    totalPages: {
      immediate: true,
      handler (val, oldVal) {
        if(val !== oldVal) {
          this.$emit('pages-change', val)
        }
      }
    }
  },
  methods: {
    changeSort (name, index) {
      if(index && !this.sortable(index))
        return

      if(this.sorter.name === name && !this.sorter.direction)
        this.sorter.direction = 'desc'
      else
        this.sorter.direction = 0
      this.sorter.name = name
    },
    addColumnFilter (colName, value) {
      this.$set(this.columnFilter, colName, value)
    },
    clear () {
      this.tableFilter = ''
      this.columnFilter = {}
      this.sorter.name = ''
      this.sorter.direction = ''
      const inputs = this.$el.getElementsByClassName('c-table-filter')
      for(let input of inputs)
        input.value =''
    },
    columnNamePretify (name) {
      const withSpaces = name.replace(/[-_]/g, ' ')
      return withSpaces.split(' ')
                       .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                       .join(' ')
    },
    cellClass (item, colName, index) {
      let classes = []
      if(item._cellClasses && item._cellClasses[colName])
        classes.push(item._cellClasses[colName])
      if (this.fields && this.fields[index]._classes)
        classes.push(this.fields[index]._classes)
      return classes
    },
    sortable (index) {
      return !this.noSorting && (!this.fields || !this.fields[index].noSorting)
    },
    headerClass (index) {
      return this.fields && this.fields[index]._classes ?
             this.fields[index]._classes : ''
    },
    headerStyles (index) {
      let style = ''
      if(this.sortable(index))
        style += `cursor:pointer;`
      if(this.fields && this.fields[index] && this.fields[index]._style)
        style += this.fields[index]._style
      return style
    },
    rowClicked (item, index) {
      this.$emit('row-clicked', item, index)
    },
    getIconState (index) {
      return this.rawColumnNames[index] === this.sorter.name ?
             this.sorter.direction === 'desc' ?
             'desc' : 'asc' : 0
    },
    iconClasses (index) {
      const state = this.getIconState(index)
      return [
        'c-icon-transition c-position-absolute c-arrow-position',
        {
          'c-transparent': !state,
          'c-rotate-icon': state === 'desc'
        }
      ]
    },
    paginationChange (e) {
      this.$emit('pagination-change', e.target.value)
      this.perPageItems = Number(e.target.value)
    },
    havePaginationMenu () {
      return this.optionsRow !== 'noPagination' &&
        (this.pagination || this.$listeners['pages-change'])
    }
  },
}
</script>
<style scoped>
.c-transparent {
  opacity: 0.4;
}
.c-icon-transition {
  -webkit-transition: transform 0.3s;
  transition: transform 0.3s;
}
.c-is-loading {
  opacity: .4;
}
.c-arrow-position {
  right: 0;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
.c-rotate-icon {
  -ms-transform: translateY(-50%)  rotate(-180deg);
  transform: translateY(-50%) rotate(-180deg);
}
</style>

<style scoped lang="scss">
@import "~@coreui/coreui/scss/partials/tables.scss";
@import "~@coreui/coreui/scss/partials/input-group.scss";
@import "~@coreui/coreui/scss/partials/forms.scss";
@import "~@coreui/coreui/scss/partials/grid.scss";
@import "~@coreui/coreui/scss/utilities/_flex.scss";
@import "~@coreui/coreui/scss/utilities/_float.scss";
@import "~@coreui/coreui/scss/utilities/_position.scss";
@import "~@coreui/coreui/scss/utilities/_sizing.scss";
@import "~@coreui/coreui/scss/utilities/_spacing.scss";
@import "~@coreui/coreui/scss/utilities/_text.scss";
@import "~@coreui/coreui/scss/utilities/_typography.scss";
</style>
