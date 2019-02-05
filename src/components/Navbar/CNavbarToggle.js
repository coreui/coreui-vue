export default {
  name: 'CNavbarToggle',
  render (h) {
    return h(
      'button',
      {
        class: ['navbar-toggler'],
        attrs: {
          type: 'button',
        },
      },
      [this.$slots.default || h('span', { class: ['navbar-toggler-icon'] })]
    )
  }
}
