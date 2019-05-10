export default {
  props: {
    position: {
      type: [String, Boolean],
      default: 'top-full',
      validator: position => {
        return [
          'block', 'top-right', 'top-left', 'top-center', 'top-full',
          'bottom-right', 'bottom-left', 'bottom-center', 'bottom-full'
        ].includes(position)
      }
    },
    margin: {
      type: [String, Object],
      default: '20px'
    },
    fixed: Boolean
  },
  computed: {
    computedPosition () {
      if (this.position !== 'block') {
        return [
          { position: this.fixed ? 'fixed' : 'absolute'},
          this.getVerticalPosition(this.position),
          this.getHorizontalPosition(this.position),
          this.computedMargin
        ]
      }
    },
    computedMargin () {
      return {
        'margin-top': this.margin.top || this.margin || '20px',
        'margin-bottom': this.margin.bottom || this.margin || '20px',
        'margin-left': this.margin.left || this.margin || '20px',
        'margin-right': this.margin.right || this.margin || '20px'
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
        return { width: '100%' }
      } else {
        return { left: 0 }
      }
    }
  }
}
