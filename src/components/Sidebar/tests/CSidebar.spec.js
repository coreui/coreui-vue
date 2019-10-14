import { mount } from '@vue/test-utils'
import CSidebar from '../CSidebar'
import Vue from 'vue'

const ComponentName = 'CSidebar'
const wrapper = mount(CSidebar,
  {
    propsData: {
      aside: true,
      colorScheme: 'light'
    },
    attrs: {
      id: 'sidebar'
    }
  }
)

const App = Vue.extend({
  components: { CSidebar },
  data () {
    return {
      props: {
        minimize: false,
        show: true
      }
    }
  },
  render (h) {
    const Sidebar = h('CSidebar', { props: this.props }, [
      h(
        'a',
        {
          attrs: { 
            href: '/some-path' ,
          }
        },
        ['link']
      )
    ])
    const View = h('div', { attrs: { class: 'view' }}, ['content'])
    return h('div', [
      Sidebar, View
    ])
  }
})

const sidebarWrapper = mount(App, { attachToDocument: true })
// const sidebarComponent = sidebarWrapper.vm.$children[0]

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(CSidebar.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(sidebarWrapper.element).toMatchSnapshot()
  })

  // it('switches state on c-sidebar-toggle root event', () => {
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   expect(spy).not.toBeCalled()
  //   sidebarWrapper.vm.$root.$emit('c-sidebar-toggle')
  //   expect(spy).toBeCalled()
  // })
  // it('switches state on c-sidebar-toggle root event on mobile', () => {
  //   sidebarComponent.bodyWidth = 300
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   spy.mockClear()

  //   expect(spy).not.toBeCalled()
  //   sidebarWrapper.vm.$root.$emit('c-sidebar-toggle')
  //   expect(spy).toBeCalled()
  // })
  // it('hides sidebar on click in certain cases', () => {
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   spy.mockClear()
  //   sidebarWrapper.find('.c-sidebar').trigger('click')
  //   expect(spy).not.toBeCalled()
  //   sidebarWrapper.find('a').trigger('click')
  //   expect(spy).toBeCalled()

  //   //reopen sidebar
  //   sidebarComponent.mobileOpen = true
  //   sidebarWrapper.find('.view').trigger('click')
  //   expect(spy).toBeCalledTimes(2)

  // })
  // it('hides sidebar on click in certain cases', () => {
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   spy.mockClear()
  //   sidebarWrapper.find('.c-sidebar').trigger('click')
  //   expect(spy).not.toBeCalled()
  //   sidebarWrapper.find('a').trigger('click')
  //   expect(spy).toBeCalled()

  //   sidebarWrapper.trigger('click')
  // })
  // it('does not invoke state switch on mobileClick when sidebar is hidden', () => {
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   spy.mockClear()
  //   sidebarWrapper.find('a').trigger('click')
  //   expect(spy).not.toBeCalled()
  // })
  // it('watches for prop changes', () => {
  //   sidebarWrapper.setData({ props: {
  //     minimize: true,
  //     show: false,
  //     showOnMobile: true
  //   }})
  //   expect(sidebarComponent.minimized).toBe(true)
  //   expect(sidebarComponent.open).toBe(false)
  //   expect(sidebarComponent.mobileOpen).toBe(true)
  // })
  // it('does not call mobileClick when sidebar is in desktop mode', () => {
  //   sidebarComponent.bodyWidth = 1300
  //   const spy = jest.spyOn(sidebarComponent, 'switchState')
  //   spy.mockClear()
  //   sidebarWrapper.find('a').trigger('click')
  //   expect(spy).not.toBeCalled()
  // })
})
