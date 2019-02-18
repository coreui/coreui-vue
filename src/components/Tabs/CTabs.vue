<script>
import CNav from '../Nav/CNav'
export default {
  name: 'CTabs',
  extends: CNav,
  props: {
    tabs: {
      type: Boolean,
      default: true
    },
    noFade: Boolean,
    vertical: [Boolean, Number, String],
    card: Boolean,
    addNavWrapperClasses: [String, Array],
    addNavClasses: [String, Array],
    addTabsWrapperClasses: [String, Array],
    addTabsClasses: [String, Array],
    addTabClasses: [String, Array]
  },
  data () {
    return {
      children: [],
    }
  },
  computed: {
    verticalTabsClass() {
      return !this.vertical ? '' :
               this.vertical === true ? 'col-sm-6' : `col-sm-${this.vertical}`
    },
    verticalContentClass() {
      return !this.vertical ? '' :
               this.vertical === true ? 'col-sm-6' : `col-sm-${12 - this.vertical}`
    }
  },
  //make children reactive
  mounted () {
    this.children = this.$children
  },
  updated () {
    //hacky solution to enable fading
    if (!this.noFade) {
      setTimeout(() => {
        return this.$el.getElementsByClassName('active fade')[0]
               .classList.add('show')
      }, 0)
    }
  },
  render (h) {
    const nav = h(
      'ul',
      {
        class: [ this.navClasses, this.addNavClasses, {'h-100':this.vertical }],
        on: {
          click: this.onClick
        }
      },
      this.$slots.default
    )
    const navWrapper = h(
      'div',
       { class: [
         this.addNavWrapperClasses,
         this.verticalTabsClass,
         { 'card-header': this.card }
       ]},
       [nav]
     )

    const tab = this.children.map((tab, index) => {
      return h(
        'div',
        {
          staticClass: 'tab-pane',
          class: [
            this.addTabClasses,
            {
              active: tab.isActive,
              fade: !this.noFade
            }
          ]
        },
        tab.$slots ? tab.$slots.default : ''
      )
    })

    const tabs = h(
      'div',
      {
        staticClass: 'tab-content',
        class: this.addTabsClasses
      },
      tab
    )
    const tabsWrapper = h(
      'div',
      { class: [this.addTabsWrapperClasses, this.verticalContentClass]},
      [tabs]
    )

    const wrapper = h(
      'div',
      { class: this.vertical ? 'row no-gutters': '' },
      [navWrapper, tabsWrapper]
    )
    return wrapper
  }
}
</script>
