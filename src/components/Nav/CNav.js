
export const props = {
  fill: Boolean,
  justified: Boolean,
  tabs: Boolean,
  pills: Boolean,
  vertical: Boolean,
  activeItem: [Number, String],
  tabContent: Boolean
}

export default {
  name: 'CNav',
  props,
  model: {
    event: 'activeChanged',
    prop: 'activeItem'
  },
  data () {
    return {
      activeItemIndex: this.activeItem,
      children: []
    }
  },
  watch: {
    activeItem (val) {
      this.activeItemIndex = val
    },
    activeItemIndex (val) {
      this.getState()
    }
  },
  mounted () {
    this.children = this.$slots.default
    if(this.children)
      this.getState()
  },
  updated () {
    this.children = this.$slots.default
  },
  methods: {
    getState () {
      this.activateItem(this.getItem(this.activeItemIndex))
    },
    getItem (index) {
      let item = this.children[index]
      this.children.forEach((el, i) => {
        if(index === undefined && el.componentInstance.isActive == true)
          item = el
        else if(index !== undefined  && el.componentInstance.id == index)
          item = el
      })
      return item
    },
    activateItem (item) {
      if(!item || !item.componentInstance)
        return
      this.children.forEach((el, i) => {
        el.componentInstance.isActive = false
      })
      item.componentInstance.isActive = true
      this.$emit('activated', this.activeItemIndex)

    },
    onClick (e) {
      this.$slots.default.forEach((el, i) => {
        if(el.elm.contains(e.target))
          this.activeItemIndex = el.componentInstance.id || i
      })
    }
  },
  render (h) {
    const nav = h(
      'ul',
      {
        class: {
          'nav' : true,
          'nav-tabs': this.tabs,
          'nav-pills': this.pills,
          'flex-column': this.vertical,
          'nav-fill': this.fill,
          'nav-justified': this.justified
        },
        on: {
          click: this.onClick
        }
      },
      this.$slots.default
    )
    if (!this.tabContent)
      return nav



    const tabs = this.children.map((tab, index) => {
      if(tab.componentInstance && tab.componentInstance.$slots.tab){
        return h(
          'div',
          {
            staticClass: 'tab-pane',
            class: {
              show: tab.componentInstance.isActive,
              active: tab.componentInstance.isActive
            }
          },
          tab.componentInstance.$slots.tab
        )
      }
    })


    const tab = h(
      'div',
      {
        staticClass: 'tab-content'
      },
      tabs
    )

    const wrapper = h(
      'div',
      [nav, tab]
    )
    return wrapper
  }
}
