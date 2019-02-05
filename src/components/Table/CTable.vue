<template>
  <div>
    <div v-if="optionsRow" class="row my-2 mx-0">
      <div v-show="optionsRow !== 'onlyPagination'" class="col-sm-6 form-inline p-0">
        <label class="mr-2">Filter: </label>
        <input class="form-control c-table-filter"
               type="text"
               placeholder="type string..."
               @input="tableFilter = $event.target.value"
               :value="tableFilter"
        >
      </div>
      <div v-show="optionsRow !== 'onlyFilter'" class="col-sm-6 p-0">
        <div :class="`form-inline ${optionsRow === 'onlyPagination' ? '' : 'float-sm-right'}`">
          <label class="mr-2">Items per page: </label>
          <input v-if="false"
                 class="form-control"
                 type="number"
                 placeholder="type number..."
                 @input="perPageItems = Number($event.target.value)"
          >
          <select v-if="true"
                  class="form-control"
                  @change="perPageItems = Number($event.target.value)"
          >
            <option value="" selected disabled hidden>{{perPageItems}}</option>
            <option v-for="number in [5,10,20,50]" val="number">{{number}}</option>
          </select>
        </div>
      </div>
    </div>
    <slot name="overTable"/>
    <div :class="notResponsive ? '' : 'table-responsive'" class="position-relative">
      <table :class="tableClasses">
        <thead >
          <tr>
            <th v-if="indexCol" style="width:40px"></th>
            <template v-for="(name, index) in columnNames">
              <th @click="changeSort(rawColumnNames[index], index)"
                  :class="headerClass(index)"
                  :style="headerStyles(index)"
              >
              <slot :name="`${rawColumnNames[index]}-header`">
                {{name}}
              </slot>
              <slot v-if="!noSorting && sortable(index)" name="sorting-icon" :state="getIconState(index)">
                <i :class="iconClasses(index)"></i>
              </slot>
              </th>
            </template>
          </tr>
          <tr v-if="filterRow" class="table-sm">
            <th v-if="indexCol"class="pb-2 ">
              <i v-if="indexCol !== 'onlyIndexes'" class="cui-ban icons text-danger font-lg text-center d-block" @click="clear" title="clear table"></i>
            </th>
            <template v-for="(colName, index) in rawColumnNames" >
              <th :class="headerClass(index)">
                <slot :clear="clear, colName, index"
                      :name="`${rawColumnNames[index]}-filter`"
                >
                  <input v-if="!fields || !fields[index].noFilter"
                         class="w-100 c-table-filter"
                         @input="addColumnFilter(colName, $event.target.value)"
                         :value="columnFilter[colName]"
                  ></input>
                </slot>
              </th>
            </template>
          </tr>
        </thead>
        <tbody :style="bodyStyle" class="position-relative">
          <template v-for="(item, itemIndex) in currentItems" >
            <tr :class="item._classes" :tabindex="bodyStyle ? 0 : null"
                @click="rowClicked(item, itemIndex + firstItemIndex)">
                <slot v-if="indexCol"
                      name="index-col"
                      :index="firstItemIndex + itemIndex"
                >
                  <td>
                    {{indexCol !== 'onlyCleaner' ? firstItemIndex + itemIndex + 1 : ''}}
                  </td>
                </slot>
              <template v-for="(colName, index) in rawColumnNames" >
                <slot v-if="$scopedSlots[colName]"
                      :name="colName"
                      :item="item"
                      :index="itemIndex + firstItemIndex"
                />
                <td v-else
                    :class="cellClass(item, colName, index)"
                    v-html="item[colName]"
                ></td>
              </template>
            </tr>
            <slot v-if="$scopedSlots.details || $scopedSlots.detailsRow"
                  name="detailsRow"
                  :item="item"
                  :index="itemIndex  + firstItemIndex"
                  :colspan="colspan">
              <tr class="p-0" style="border:none !important">
                <td :colspan="colspan"
                    class="p-0"
                    style="border:none !important"
                >
                  <slot name="details"
                        :item="item"
                        :index="itemIndex + firstItemIndex"
                        :colspan="colspan"
                  />
                </td>
              </tr>
            </slot>
          </template>
          <tr v-if="!currentItems.length">
            <td :colspan="colspan">
              <slot name="empty-table">
                <div class="text-center my-5">
                  <h2>{{ passedItems.length ? 'No filtering results ' : 'No items'}}
                    <i style="font-weight:1000" class="text-danger icons font-2xl cui-ban"></i>
                  </h2>
                </div>
              </slot>
            </td>
          </tr>
        </tbody>
        <tfoot v-if="footClone && currentItems.length > 3">
          <tr>
            <th v-if="indexCol" style="width:40px"></th>
            <template v-for="(name, index) in columnNames">
              <th @click="changeSort(rawColumnNames[index], index)"
                  :class="headerClass(index)"
                  :style="headerStyles(index)"
              >
              <slot :name="`${rawColumnNames[index]}-header`">
                {{name}}
              </slot>
              <slot v-if="!noSorting && sortable(index)" name="sorting-icon" :state="getIconState(index)">
                <i :class="iconClasses(index)"></i>
              </slot>
              </th>
            </template>
          </tr>
        </tfoot>
        <slot name="caption"/>
      </table>
      <div v-if="loading" :style="topLoadingPosition" style="position:absolute;left:50%;transform:translateX(-50%);">
        <div class="spinner-border text-success" :style="spinnerSize" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
    <slot name="underTable"/>
    <CPagination v-if="!noPagination"
                 v-show="pages > 1"
                 v-model="page"
                 :pages="pages"
                 v-bind="paginationProps"
    />
  </div>
</template>

<script>
import CPagination from './CPagination'
export default {
  name: 'CTable',
  components: { CPagination },
  props: {
    items: {
      type: Array,
      required: true
    },
    fields: Array,
    perPage: {
      type: Number,
      default: 10
    },
    activePage: Number,
    indexCol: [Boolean, String],
    filterRow: Boolean,
    noPagination: Boolean,
    paginationProps: Object,
    addTableClasses: String,
    stacked: [Boolean, String],
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
    footClone: Boolean,
    defaultSorter: {
      type: Object,
      default: () => ({ name:'', direction:''})
    },
    defaultTableFilter: String,
    defaultColumnFilter: Object,
    loading: Boolean
  },
  data () {
    return {
      tableFilter: this.defaultTableFilter,
      columnFilter: this.defaultColumnFilter || {},
      sorter: { name: this.defaultSorter.name, direction: this.defaultSorter.direction },
      firstItemIndex: 0,
      page: this.activePage || 2,
      pages: 0,
      perPageItems: this.perPage,
      passedItems: this.items
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
        const c = a[n] ? a[n].replace(/<(?:.|\n)*?>/gm, '') : ''
        const d = b[n] ? b[n].replace(/<(?:.|\n)*?>/gm, '') : ''
        return (c > d) ? 1 * flip : ((d > c) ? -1 * flip : 0)
      })
    },
    currentItems () {
      if (this.computedPage) {
        this.checkPagination()
        this.firstItemIndex = (this.computedPage - 1) * this.perPageItems
        return this.sortedItems.slice(this.firstItemIndex, this.firstItemIndex + this.perPageItems)
      }
      return this.sortedItems
    },
    computedPage () {
      return this.noPagination ? this.activePage : this.page
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
      const stacked = this.stacked ?
                      typeof this.stacked === 'string' ?
                      `b-table-stacked-${this.stacked}` :
                      'b-table-stacked' :
                      ''
      return [
        'table b-table',
        this.addTableClasses,
        stacked,
        {
          'is-loading': this.loading,
          'table-sm': this.small,
          'table-dark': this.dark,
          'table-striped': this.striped,
          'b-table-fixed': this.fixed,
          'table-hover': this.hover,
          'table-bordered': this.border,
          'border': this.outlined
        }
      ]
    },
    bodyStyle () {
      return this.$listeners && this.$listeners['row-clicked'] ? 'cursor:pointer' : ''
    },
    colspan () {
      return this.indexCol ? this.rawColumnNames.length + 1 : this.rawColumnNames.length
    },
    topLoadingPosition () {
      const headerHeight = (this.filterRow ? 38 : 0) + ( this.small ? 32 + 4 : 46 + 7)
      return `top:${headerHeight}px`
    },
    spinnerSize () {
      const size = this.small ? '1.4rem' : this.currentItems.length === 1 ? '2rem' : '3rem'
      return `width:${size};height:${size}`
    },
    // loadingStyles () {
    //   return !this.loading ? '' :
    //     `opacity: .4; ${this.loading === 'noEvents' ? 'pointer-events:none' : ''}`
    // }
  },
  watch: {
    // filter () { deep:true },
    items (val, oldVal) {
      if(val.length !== oldVal.length || JSON.stringify(val) !== JSON.stringify(oldVal))
        this.passedItems = val
    }
  },
  methods: {
    log (col) {
      console.log(col)
    },
    checkPagination () {
      const pages = Math.ceil((this.sortedItems.length)/ this.perPageItems) || 1
      if(pages !== this.pages){
        this.$emit('pages-change', pages)
        this.pages = pages
      }
    },
    changeSort (name, index) {
      if(index && !this.sortable(index))
        return

      if(this.sorter.name === name && !this.sorter.direction)
        this.sorter.direction = 'desc'
      else
        this.sorter.direction = 0
      this.sorter.name = name
    },
    // setTableFilter (val) {
    //   this.filter = val
    // },
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
    // rowClass (item) {
    //   return item._classes ? item._classes : ''
    // },
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
    haveFilterSlot (index) {
      return this.$scopedSlots[`${this.rawColumnNames[index]}-filter`]
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
      return [ 'icon-transition float-right icons font-xl cui-arrow-top',
        {
          'transparent': !state,
          'rotate-icon': state === 'desc'
        }
      ]
    }
  },
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
.rotate-icon {
  transform: rotate(-180deg);
}
.is-loading {
  opacity: .4;
}
</style>
