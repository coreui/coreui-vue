import Tooltip from 'tooltip.js'
export default {
  name: 'CTooltip',
  props: {
    targetId: {
      required: true,
      type: String,
    },
    content: {
      type: String,
      default: 'Hey <b>There</b>'
    },
    placement: {
      type: String,
      default: 'top'
    },
    popover: Boolean,
    popoverHeader: String,
    triggers: {
      type: [String, Array],
      default: 'hover focus'
    },
    delay: {
      type: [Number, Object],
      default: 0
    },
    offset: {
      type: Number,
      default: 0
    },
    boundaries: {
      type: String,
      default: 'scrollParent'
    },
    appendToBody: Boolean,
    active: Boolean,
    popperOptions: Object
  },
  data () {
    return {
      locked: this.active,
      el: null
    }
  },
  mounted () {
    this.createPopper()
  },
  computed: {
    hoverTrigger () {
      return this.triggers.includes('hover')
    },
    focusTrigger () {
      return this.triggers.includes('focus')
    },
    clickTrigger () {
      return this.triggers.includes('click')
    },
    tooltipTemplate () {
      return `<div class="tooltip bs-tooltip-auto fade show" role="tooltip">
                <div class="arrow"></div>
                <div class="tooltip-inner"></div>
              </div>`
    },
    popoverTemplate () {
      return `<div class="popover bs-popover-auto fade show" role="tooltip">
                <div class="arrow"></div>
                <h3 class="popover-header">${this.popoverHeader}</h3>
                <div class="popover-body"></div>
              </div>`
    },
    generatedTooltipConfig () {
      return {
        title: this.content,
        trigger: '',
        html: true,
        placement: this.placement,
        delay: this.delay,
        offset: this.offset,
        arrowSelector: '.arrow',
        innerSelector: this.popover ? '.popover-body' : '.tooltip-inner',
        template: this.popover ? this.popoverTemplate :  this.tooltipTemplate,
        boundariesElement: document.getElementById(this.boundaries) || this.boundaries,
        container: this.appendToBody ? document.body : false,
        popperOptions: this.popperOptions
      }
    }
  },
  methods: {
    createPopper () {
      this.el = document.getElementById(this.targetId)
      this._tooltip = new Tooltip(this.el, this.generatedTooltipConfig)
      if (this.hoverTrigger) {
        this.el.addEventListener('mouseover', this.show)
        this.el.addEventListener('mouseout', this.mouseoutHide)
      }
      if(this.clickTrigger || this.focusTrigger)
        this.el.addEventListener('click', this.open)
      if(this.locked) {
        this._tooltip.show()
        !(this.clickTrigger || this.focusTrigger) ? this.locked = false : this.open()
      }
    },
    open () {
      this.locked = true
      this.show()
      setTimeout(() => {
        this.el.removeEventListener('click', this.open)
        document.addEventListener('click', this.close)
      }, 0)
    },
    close (e) {
      if(this.el.contains(e.target) && this.clickTrigger ||
      !this.el.contains(e.target) && !this.clickTrigger && this._tooltip &&
      !this._tooltip.popperInstance.popper.contains(e.target)) {
        this.locked = false
        this.hide()
        this.el.addEventListener('click', this.open)
        document.removeEventListener('click', this.close)
      }
    },
    show () {
      setTimeout(() => this._tooltip && this._tooltip.show(), this.delay.show || this.delay)
    },
    mouseoutHide () {
      if(!this.locked)
        this.hide()
    },
    hide () {
      setTimeout(() => this._tooltip && this._tooltip.hide(), this.delay.hide || this.delay)
    },
    destroyPopper () {
      this._tooltip.dispose()
      this._tooltip = null
      this.el.removeEventListener('mouseover', this.show)
      this.el.removeEventListener('mouseout', this.mouseoutHide)
      this.el.removeEventListener('click', this.open)
      document.removeEventListener('click', this.close)
    },
    resetPopper () {
      this.destroyPopper()
      setTimeout(() => this.createPopper(), 0)
    }
  },
  updated () {
    this.resetPopper()
  },
  beforeDestroy () {
    this.destroyPopper()
  },
  //render function is used only for watching props changes
  render (h) {
    return h('div',
            { style: { display:'none !important'},
              value: [this.targetId, this.content, this.placement,
                      this.popover, this.popoverHeader, this.triggers,
                      this.delay, this.offset, this.boundaries,
                      this.appendToBody, this.active, this.popperOptions]})
  }
}
