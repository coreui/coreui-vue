<script>
import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CNavbarToggler',
  functional: true,
  props: {
    tag: String
  },
  render (h, { data, props, slots }) {
    return h(
      props.tag || 'button',
      mergeData({
        class: 'navbar-toggler',
        attrs: {
          type: 'button',
        }
      }, data),
      [ slots().default || h('span', { class: ['navbar-toggler-icon'] })]
    )
  }
}
</script>
