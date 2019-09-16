import { mount } from '@vue/test-utils'
import CSidebarNav from '../CSidebarNav'
import CSidebar from '../CSidebar'
import Vue from 'vue'


const ComponentName = 'CSidebarNav'
const wrapper = mount(CSidebarNav)

const Sidebar = Vue.extend({
  components: { CSidebar, CSidebarNav },
  data () {
    return {
      minimized: false
    }
  },
  render (h) {
    return h(
      'CSidebar', 
      { props: { minimize: this.minimized } }, 
      [h('CSidebarNav')]
    )
  }
})

const sidebarWrapper = mount(Sidebar)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(CSidebarNav.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly in sidebar', () => {
    expect(sidebarWrapper.element).toMatchSnapshot()
  })
  it('properly inherits state from sidebar', () => {
    const nav = sidebarWrapper.vm.$children[0].$children[0]
    expect(nav.state.open).toBe(true)
    expect(nav.state.mobileOpen).toBe(false)

    expect(nav.state.minimized).toBe(false)

    sidebarWrapper.setData({minimized: true})
    expect(nav.state.minimized).toBe(true)

    sidebarWrapper.setData({minimized: false})
    expect(nav.state.minimized).toBe(false)
  })
})
