<template>
  <nav aria-label="pagination">
    <ul :class="computedClasses">
      <li v-if="doubleArrows" :class="backArrowsClasses">
        <CLink
          class="page-link"
          @click="setPage(1)"
          :disabled="activePage === 1"
          aria-label="Go to first page"
          :aria-disabled="activePage === 1"
        >
          <span v-html="firstButtonHtml"></span>
        </CLink>
      </li>
      <li v-if="arrows" :class="backArrowsClasses">
        <CLink
          class="page-link"
          @click="setPage(activePage - 1)"
          :disabled="activePage === 1"
          aria-label="Go to previous page"
          :aria-disabled="activePage === 1"
        >
          <span v-html="previousButtonHtml"></span>
        </CLink>
      </li>
      <li
        v-if="beforeDots"
        role="separator"
        class="page-item disabled"
      >
        <span class="page-link">…</span>
      </li>

      <li
        v-for="(item, index) in items"
        :key="index"
        :class="[{ 'active': activePage === item }, 'page-item']"
      >
        <CLink
          class="page-link"
          @click="setPage(item)"
          :aria-label="`Go to page ${item}`"
        >
          {{item}}
        </CLink>
      </li>

      <li
        v-if="afterDots"
        role="separator"
        class="page-item disabled"
      >
        <span class="page-link">…</span>
      </li>
      <li
        v-if="arrows"
        :class="nextArrowsClasses"
      >
        <CLink
          class="page-link"
          @click="setPage(activePage + 1)"
          :disabled="activePage === pages"
          aria-label="Go to next page"
          :aria-disabled="activePage === pages"
        >
          <span v-html="nextButtonHtml"></span>
        </CLink>
      </li>
      <li v-if="doubleArrows" :class="nextArrowsClasses">
        <CLink
          class="page-link"
          @click="setPage(pages)"
          :disabled="activePage === pages"
          aria-label="Go to last page"
          :aria-disabled="activePage === pages"
        >
          <span v-html="lastButtonHtml"></span>
        </CLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import CLink from '../Link/CLink'

  export default {
    name: 'CPagination',
    components: {
      CLink
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
      dots: {
        type: Boolean,
        default: true
      },
      arrows: {
        type: Boolean,
        default: true
      },
      doubleArrows: {
        type: Boolean,
        default: true
      },
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
      }
    },
    watch: {
      pages: {
        immediate: true,
        handler (val) {
          if (val && val < this.activePage) {
            this.$emit('update:activePage', val)
          }
        }
      }
    },
    computed: {
      backArrowsClasses () {
        return ['page-item', { 'disabled': this.activePage === 1 }]
      },
      nextArrowsClasses () {
        return ['page-item', { 'disabled': this.activePage === this.pages }]
      },
      computedClasses () {
        return `pagination pagination-${this.size} justify-content-${this.align}`
      },
      showDots () {
        return this.dots && this.limit > 4 && this.limit < this.pages
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
      setPage (number) {
        if (number !== this.activePage) {
          this.$emit('update:activePage', number)
        }
      }
    }
  }
</script>

<style>
  .page-link:focus {
    box-shadow: none;
  }
</style>
