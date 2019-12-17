import { mount } from '@vue/test-utils'
import CSidebar from '../CSidebar'
import Vue from 'vue'

const ComponentName = 'CSidebar'
const wrapper = mount(CSidebar,
  {
    propsData: {
      aside: true,
      colorScheme: 'light',
      size: 'lg'
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
            href: '/some-path',
            class: 'c-sidebar-nav-link'
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
const sidebarComponent = sidebarWrapper.vm.$children[0]

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
  it('close sidebar on CSidebarNavLink click when in mobile width', () => {
    //for isOnMobileFunction be be called
    sidebarWrapper.find('a').trigger('click')

    sidebarComponent.isOnMobile = () => sidebarComponent.bodyWidth < 768
    sidebarComponent.bodyWidth = 1300
    sidebarWrapper.find('a').trigger('click')
    expect(sidebarComponent.open).toBe(true)
    sidebarComponent.bodyWidth = 200
    sidebarWrapper.find('a').trigger('click')
    expect(sidebarComponent.open).toBe('responsive')
  })
  it('watches for prop changes', () => {
    sidebarWrapper.setData({
      props: {
        show: false,
      }
    })
    expect(sidebarComponent.open).toBe(false)
    sidebarWrapper.setData({
      props: {
        show: true,
      }
    })
    expect(sidebarComponent.open).toBe(true)
  })
  it('properly destroys sidebar', () => {
    const currentBackdropNumber = () => {
      return document.getElementsByClassName('c-sidebar-backdrop').length
    }
    expect(currentBackdropNumber()).toBe(2)
    sidebarWrapper.destroy()
    wrapper.destroy()
    expect(currentBackdropNumber()).toBe(0)
  })
})
