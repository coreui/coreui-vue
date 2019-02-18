<!-- <template>
  <li class="nav-item">
    <CLink class="nav-link" v-bind="computedProps">
      <slot></slot>
    </CLink>
  </li>
</template> -->

<script>
import CLink, { propsFactory as linkPropsFactory } from '../Link/CLink'
export default {
  name: 'CNavItem',
  props: Object.assign(linkPropsFactory(), {
    title: String
  }),
  data () {
    return {
      isActive: this.disabled ? null : this.active
    }
  },
  computed: {
    computedProps () {
      return Object.assign({}, this.$props, { active: this.isActive } )
    },
  },
  render (h) {
      return h(
      'li',
      {
        staticClass: 'nav-item',
      },
      [
        h(
          CLink,
          {
            staticClass: 'nav-link',
            props: this.computedProps,
            domProps: this.title ? { innerHTML: this.title } : null
          },
          this.$slots.default
        )
      ]
    )
  }
}

</script>
