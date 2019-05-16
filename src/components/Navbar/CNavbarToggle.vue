<script>
import { mergeData } from 'vue-functional-data-merge'
//todo animation to x
export default {
  name: 'CNavbarToggle',
  functional: true,
  render (h, {data, slots}) {
    return h(
      'button',
      mergeData(data, {
        class: [ 'c-navbar-toggler' ],
        attrs: {
          type: 'button',
        }
      }),
      [ slots().default || h('span', { class: ['c-navbar-toggler-icon'] })]
    )
  }
}
</script>
