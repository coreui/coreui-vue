<template>
  <ul :class="computedClasses"
      role="menubar"
      aria-disabled="false"
      aria-label="pagination"
  >
    <li v-if="!hideDoubleArrows"
        :class="firstClasses"
    >
      <CLink class="page-link"
             @click="setPage(1)"
             :disabled="page === 1"
             aria-label="Go to first page"
      >
        <span v-html="firstButtonHtml"></span>
      </CLink>
    </li>
    <li v-if="!hideArrows"
        :class="firstClasses"
    >
      <CLink class="page-link"
             @click="setPage(activePage - 1)"
             :disabled="page === 1"
             aria-label="Go to previous page"
      >
        <span v-html="previousButtonHtml"></span>
      </CLink>
    </li>
    <li v-if="showFirstDots"
        role="separator"
        class="page-item disabled d-none d-sm-flex"
    >
      <span class="page-link">…</span>
    </li>

    <li v-for="(item, index) in items"
        :key="index"
        :class="setStyle(item)"
    >
      <CLink class="page-link"
             @click="setPage(item)"
             :aria-label="`Goto page ${item}`"
      >
        {{item}}
      </CLink>
    </li>

    <li v-if="showLastDots"
        role="separator"
        class="page-item disabled d-none d-sm-flex"
    >
      <span class="page-link">…</span>
    </li>
    <li v-if="!hideArrows"
        :class="lastClasses"
    >
      <CLink class="page-link"
             @click="setPage(activePage + 1)"
             :disabled="page === pages"
             aria-label="Go to next page"
      >
        <span v-html="nextButtonHtml"></span>
      </CLink>
    </li>
    <li v-if="!hideDoubleArrows"
        :class="lastClasses"
    >
      <CLink class="page-link"
             @click="setPage(pages)"
             :disabled="page === pages"
             aria-label="Go to last page"
      >
        <span v-html="lastButtonHtml"></span>
      </CLink>
    </li>
  </ul>
</template>

<script>
  import elementResizeDetectorMaker from 'element-resize-detector'

  export default {
    name: 'CPagination',
    data () {
      return {
        page: this.activePage,
        showFirstDots: false,
        showLastDots: false,
        rwd: this.size,
        erd: elementResizeDetectorMaker()
      }
    },
    watch: {
      // activePage (val) {
      //   this.page = val
      // },
      pages (val) {
        if(val < this.activePage)
          this.$emit('update:activePage', val)
      }
    },
    mounted () {
      if (this.size !== 'sm' && !this.notResponsive)
        this.erd.listenTo(this.$el, this.onWrapperResize)
    },
    computed: {
      firstClasses () {
        return ['page-item', { disabled: this.activePage === 1 }]
      },
      lastClasses () {
        return ['page-item', { disabled: this.activePage === this.pages }]
      },
      computedClasses () {
        return `pagination b-pagination pagination-${this.rwd} justify-content-${this.align} `
      },
      dots () {
        return this.hideDots || this.limit < 5 ? false : true
      },
      items () {
        let maxPrevItems = Math.floor((this.limit - 1) / 2)
        let maxNextItems = Math.ceil((this.limit - 1) / 2)
        let items = []

        if (!this.dots) {
          this.showFirstDots = false
          this.showLastDots = false
          if (this.activePage <= maxPrevItems) {
            for (let i = 1; i <= this.limit; i++)
              items.push(i)
          } else {
            let max = this.activePage + maxNextItems > this.pages ? this.pages : this.activePage + maxNextItems
            for (let i = max - this.limit + 1; i <= max; i++)
              items.push(i)
          }
          return items
        }

        if (this.limit >= this.pages) {
          this.showFirstDots = false
          this.showLastDots = false
          for (let i = 1; i <= this.pages; i++)
            items.push(i)
          return items
        }

        if (this.activePage <= maxPrevItems) {
          this.showFirstDots = false
          this.showLastDots = true
          for (let i = 1; i <= this.limit - 1; i++)
            items.push(i)
          return items
        }

        if (this.activePage > maxPrevItems && this.activePage < this.pages - maxNextItems) {
          this.showFirstDots = true
          this.showLastDots = true
          for (let i = 1 ; i < this.limit - 1 ; i++)
            items.push(this.activePage - maxPrevItems + i)
          return items
        }

        if (this.activePage > maxPrevItems && this.activePage >= this.pages - maxNextItems) {
          this.showFirstDots = true
          this.showLastDots = false
          for (let i = this.pages - this.limit + 2 ; i <= this.pages; i++)
            items.push(i)
          return items
        }
      },
    },
    methods: {
      onWrapperResize (el) {
        el.clientWidth > 600 ? this.rwd = this.size :
            el.clientWidth > 400 ?
              this.rwd = 'md' : this.rwd = 'sm'
      },
      setPage (number) {
        if(number !== this.activePage)
          this.$emit('update:activePage', number)
      },
      setStyle (item) {
        if(this.activePage === item) {
          return 'page-item active'
        }
        return 'page-item'
      }
    },
    props: {
      activePage: {
        type: Number,
        default: 1
      },
      pages: {
        type: Number,
        default: 10
      },
      size: {
        type: String,
        default: 'md',
        validator: val => ['sm', 'md', 'lg'].includes(val)
      },
      align: {
        type: String,
        default: 'start',
        validator: val => ['start', 'center', 'end'].includes(val)
      },
      limit: {
        type: Number,
        default: 5
      },
      hideDots: Boolean,
      hideArrows: Boolean,
      hideDoubleArrows: Boolean,
      firstButtonHtml: {
        type: String,
        default: '&laquo;'
      },
      previousButtonHtml: {
        type: String,
        default: '&lsaquo;'
      },
      nextButtonHtml: {
        type: String,
        default: '&rsaquo;'
      },
      lastButtonHtml: {
        type: String,
        default: '&raquo;'
      },
      notResponsive: Boolean
    }
  }
</script>

<style scoped>
.page-link:focus {
  box-shadow: none;
}
</style>
