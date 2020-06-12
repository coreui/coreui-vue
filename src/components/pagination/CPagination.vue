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
          <slot name="first-button">&laquo;</slot>
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
          <slot name="previous-button">&lsaquo;</slot>
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
        v-for="item in items"
        :key="item"
        :class="[{ 'active': activePage === item }, 'page-item']"
      >
        <CLink
          class="page-link c-page-link-number"
          @click="setPage(item, $event)"
          :aria-label="activePage === item ? `Current page ${item}` : `Go to page ${item}`"
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
          <slot name="next-button">&rsaquo;</slot>
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
          <slot name="last-button">&raquo;</slot>
        </CLink>
      </li>
    </ul>
  </nav>
</template>

<script>
  import CLink from '../link/CLink'

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
        validator: val => ['', 'sm', 'lg'].includes(val)
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
      }
    },
    watch: {
      pages: {
        immediate: true,
        handler (val) {
          if (val && val < this.activePage) {
            this.$emit('update:activePage', val, true)
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
        const sizeClass = this.size ? `pagination-${this.size}` : ''
        return `pagination ${sizeClass} justify-content-${this.align}`
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
      setPage (number, e = null) {
        if (number === this.activePage) {
          return
        }
        this.$emit('update:activePage', number, false)
        if (e) {
          this.changeFocus(e)
        }
      },
      changeFocus (e) {
        const items = this.$el.getElementsByClassName('c-page-link-number')
        const focused = Number(e.target.innerHTML)
        this.$nextTick(() => {
          for (let i = 0; i < items.length; i++) {
            if (Number(items[i].innerHTML) === focused) {
              items[i].focus()
            }
          }
        })
      }
    }
  }
</script>
