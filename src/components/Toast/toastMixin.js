export default {
  props: {
    position: {
      type: String,
      default: 'top-right',
      validator: position => {
        return [
          'static', 'top-right', 'top-left', 'top-center', 'top-full',
          'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
        ].includes(position)
      }
    },
    show: Boolean,
    autohide: Number,
    noHeader: Boolean,
    titleHtml: {
      type: String,
      default: 'CToast component'
    },
    bodyHtml: {
      type: String,
      default: 'Hello, world! This is a <b>toast</b> message.'
    },
    noCloseButton: Boolean
  },
  computed: {
    computedStyles () {
      const position = this.props ? this.props.position : this.position
      if (position !== 'static' && !this.toaster) {
        return [
          { position: 'fixed' },
          this.getVerticalPosition(this.position),
          this.getHorizontalPosition(this.position)
        ]
      }
    }
  },
  methods: {
    getVerticalPosition (position) {
      if (position.includes('bottom')) {
        return { bottom: 0 }
      } else {
        return { top: 0 }
      }
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
