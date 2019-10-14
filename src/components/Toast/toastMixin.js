export default {
  props: {
    position: {
      type: String,
      default: 'top-right',
      validator: position => {
        return [
          '', 'static', 'top-right', 'top-left', 'top-center', 'top-full',
          'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
        ].includes(position)
      }
    },
    hasHeader: {
      type: Boolean,
      default: true
    },
    autohide: {
      type: [Number, Boolean],
      validator: val => typeof val === 'number' || val === false
    },
    closeButton: {
      type: Boolean,
      default: true
    },
    fade: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    computedStyles () {
      const position = this.props ? this.props.position : this.position
      if (position !== 'static' && !this.toaster) {
        return [
          { 'z-index': 1100 },
          { 'min-width': '350px' },
          { position: 'fixed' },
          this.getVerticalPosition(this.position),
          this.getHorizontalPosition(this.position)
        ]
      }
    }
  },
  methods: {
    getVerticalPosition (position) {
      return position.includes('bottom') ? { bottom: 0 } : { top: 0 }
    },
    getHorizontalPosition (position) {
      if (position.includes('right')) {
        return { right: 0 }
      } else if (position.includes('center')) {
        return {
          left: '50%',
          transform: 'translateX(-50%)'
        }
      } else if (position.includes('full')) {
        return { right: 0, left: 0 }
      } else {
        return { left: 0 }
      }
    }
  }
}
