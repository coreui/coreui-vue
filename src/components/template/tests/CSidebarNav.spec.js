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
      minimize: false
    }
  },
  render (h) {
    return h(
      'CSidebar', 
      { props: { minimize: this.minimize } }, 
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
    expect(nav.state.minimize).toBe(false)

    sidebarWrapper.setData({minimize: true})
    expect(nav.state.minimize).toBe(true)

    sidebarWrapper.setData({minimize: false})
    expect(nav.state.minimize).toBe(false)
  })
})
