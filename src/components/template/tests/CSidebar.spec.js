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
      ),
      h(
        'a', {
          attrs: {
            href: '/some-path',
            class: 'c-sidebar-nav-dropdown'
          }
        },
        ['link']
      ),
    ])
    const View = h('div', { attrs: { class: 'view' }}, ['content'])
    return h('div', [
      Sidebar, View
    ])
  }
})

const generateWrapper = () => mount(App, { attachToDocument: true })
const sidebarWrapper = generateWrapper()
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
    //cover branch, css vars not included in tests yet
    sidebarComponent.isOnMobile()
    //for isOnMobileFunction be called
    sidebarComponent.isOnMobile = () => sidebarComponent.bodyWidth < 768
    const sidebarClick = (className) => {
      sidebarWrapper.find(`a.c-sidebar-nav-${className}`).trigger('click')
    }
    sidebarComponent.bodyWidth = 1300
    sidebarClick('link')
    sidebarComponent.bodyWidth = 200
    sidebarClick('dropdown')
    expect(sidebarComponent.open).toBe(true)
    sidebarClick('link')
    expect(sidebarComponent.open).toBe('responsive')
  })
  it('closes sidebar on outside click when overlaid', () => {
    const customWrapper = generateWrapper()
    const customComponent = customWrapper.vm.$children[0]
    customWrapper.setData({
      props: {
        show: false
      }
    })
    customWrapper.setData({
      props: {
        overlaid: true,
        show: true
      }
    })
    expect(customComponent.open).toBe(true)
    customComponent.$el.click()
    expect(customComponent.open).toBe(true)
    document.body.click()
    expect(customComponent.open).toBe(false)
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
      return document.getElementById(sidebarComponent._uid + 'backdrop')
    }
    expect(currentBackdropNumber()).not.toBe(null)
    sidebarWrapper.destroy()
    wrapper.destroy()
    expect(currentBackdropNumber()).toBe(null)
  })
})
