<template>
  <ul
    :class="computedClasses"
    role="menubar"
    aria-disabled="false"
    aria-label="pagination"
  >
    <li v-if="!hideDoubleArrows" :class="backArrowsClasses">
      <CLink
        class="c-page-link"
        @click="setPage(1)"
        :disabled="activePage === 1"
        aria-label="Go to first page"
      >
        <span v-html="firstButtonHtml"></span>
      </CLink>
    </li>
    <li v-if="!hideArrows" :class="backArrowsClasses">
      <CLink
        class="c-page-link"
        @click="setPage(activePage - 1)"
        :disabled="activePage === 1"
        aria-label="Go to previous page"
      >
        <span v-html="previousButtonHtml"></span>
      </CLink>
    </li>
    <li
      v-if="beforeDots"
      role="separator"
      class="c-page-item c-disabled c-d-none c-d-sm-flex"
    >
      <span class="c-page-link">…</span>
    </li>

    <li
      v-for="(item, index) in items"
      :key="index"
      :class="[{ 'c-active': activePage === item }, 'c-page-item']"
    >
      <CLink
        class="c-page-link"
        @click="setPage(item)"
        :aria-label="`Goto page ${item}`"
      >
        {{item}}
      </CLink>
    </li>

    <li
      v-if="afterDots"
      role="separator"
      class="c-page-item c-disabled c-d-none c-d-sm-flex"
    >
      <span class="c-page-link">…</span>
    </li>
    <li
      v-if="!hideArrows"
      :class="nextArrowsClasses"
    >
      <CLink
        class="c-page-link"
        @click="setPage(activePage + 1)"
        :disabled="activePage === pages"
        aria-label="Go to next page"
      >
        <span v-html="nextButtonHtml"></span>
      </CLink>
    </li>
    <li v-if="!hideDoubleArrows" :class="nextArrowsClasses">
      <CLink
        class="c-page-link"
        @click="setPage(pages)"
        :disabled="activePage === pages"
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
      responsive: Boolean
    },
    data () {
      return {
        rwd: this.size,
        erd: elementResizeDetectorMaker()
      }
    },
    watch: {
      pages (val) {
        if (val < this.activePage) {
          this.$emit('update:activePage', val)
        }
      }
    },
    mounted () {
      if (this.size !== 'sm' && this.responsive) {
        this.erd.listenTo(this.$el, this.onWrapperResize)
      }
    },
    computed: {
      backArrowsClasses () {
        return ['c-page-item', { 'c-disabled': this.activePage === 1 }]
      },
      nextArrowsClasses () {
        return ['c-page-item', { 'c-disabled': this.activePage === this.pages }]
      },
      computedClasses () {
        return `c-pagination c-pagination-${this.rwd} c-justify-content-${this.align}`
      },
      showDots () {
        return !this.hideDots && this.limit > 4 && this.limit < this.pages
      },
      maxPrevItems () {
        return Math.floor((this.limit - 1) / 2)
      },
      maxNextItems () {
        return Math.ceil((this.limit - 1) / 2)
      },
      beforeDots () {
        return this.showDots && this.activePage > this.maxPrevItems + 1
      },
      afterDots () {
        return this.showDots && this.activePage < this.pages - this.maxNextItems
      },
      computedLimit () {
        return this.limit - this.afterDots - this.beforeDots
      },
      range () {
        return this.activePage + this.maxNextItems
      },
      lastItem () {
        return this.range >= this.pages ? this.pages : this.range - this.afterDots
      },
      itemsAmount () {
        return this.pages < this.computedLimit ? this.pages : this.computedLimit
      },
      items () {
        if (this.activePage - this.maxPrevItems <= 1 ) {
          return Array.from({ length: this.itemsAmount }, (v, i) => i + 1 )
        } else {
          return Array.from({length: this.itemsAmount}, (v, i) => {
            return this.lastItem - i
          }).reverse()
        }
      }
    },
    methods: {
      onWrapperResize (el) {
        const responsiveSize = el.clientWidth > 400 ? 'md' : 'sm'
        this.rwd = el.clientWidth > 600 ? this.size : responsiveSize
      },
      setPage (number) {
        if (number !== this.activePage) {
          this.$emit('update:activePage', number)
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "~@coreui/coreui/scss/partials/pagination.scss";
  @import "~@coreui/coreui/scss/utilities/_flex.scss";
  .c-page-link:focus {
    box-shadow: none;
  }
</style>
