import { mergeData } from 'vue-functional-data-merge'

export default {
  functional: true,
  name: 'CMedia',
  props: {
    asideClasses: String,
    asideRight: Boolean,
  },
  render (h, { props, data, slots }) {
    let childNodes = []
    const $slots = slots()
    const asideClasses = props.asideClasses ?
                         props.asideClasses :
                         props.asideRight ?
                         'ml-3 align-self-start' :
                         'mr-3 align-self-start'

    const aside = h(
      'div',
      { class: asideClasses },
      $slots.aside ||
      [h('div', { class: 'bg-secondary', style: 'width:64px;height:64px;'})]
    )
    const body = h(
      'div',
      { staticClass: 'media-body' },
      $slots.default
    )
    props.asideRight ? childNodes.push(body, aside) : childNodes.push(aside, body)
    return h('div', mergeData(data, { staticClass: 'media' }), childNodes)
  }
}
