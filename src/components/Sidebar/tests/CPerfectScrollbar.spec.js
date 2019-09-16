import { mount } from '@vue/test-utils'
import CSidebarNav from '../CSidebarNav'
import CSidebar from '../CSidebar'
import Component from '../CPerfectScrollbar'
import Vue from 'vue'


const ComponentName = 'CPerfectScrollbar'
const wrapper = mount(Component, {
  propsData: {
    swicher: false
  }
})

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
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly in sidebar', () => {
    expect(sidebarWrapper.element).toMatchSnapshot()
  })
  it('do not throws errors on updates when perfect scrollbar is not set', () => {
    try {
      wrapper.vm.__uninit()
      wrapper.vm.__update()
    } catch (e) {
      const errors = e
    }
    expect(typeof errors).toBe('undefined')
  })
  it('do not initialize new instance when one is already set', () => {
    wrapper.setProps({ swicher: true })
    const spy = jest.spyOn(wrapper.vm, '__createPerfectScrollbar')
    wrapper.vm.__init()
    expect(spy).not.toBeCalled()
  })
  it('calls __uninit function on switch to false', () => {
    const spy = jest.spyOn(wrapper.vm, '__uninit')
    expect(spy).not.toBeCalled()
    wrapper.setProps({ swicher: false })
    expect(spy).toBeCalled()
  })
  it('calls __uninit function before destroy', () => {
    const spy = jest.spyOn(wrapper.vm, '__uninit')
    spy.mockClear()
    expect(spy).not.toBeCalled()
    wrapper.destroy()
    expect(spy).toBeCalled()
  })
})
