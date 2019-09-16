import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CSidebarNavDropdown from '../CSidebarNavDropdown'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const ComponentName = 'CSidebarNavDropdown'

const wrapperMounting = (mode) => mount(
  CSidebarNavDropdown,
  { 
    localVue, 
    router, 
    propsData: { 
      route: '/somePath' ,
      icon: 'cui-settings'
    },
    provide: {
      dropdownStateOnRouteChange: mode
    }
  }
)

const wrapper = wrapperMounting('openActive')
const wrapperCloseMode = wrapperMounting('close')
const wrapperCloseInactiveMode = wrapperMounting('closeInactive')

const routeChange = (wrapperToChangeRoute, route) => { 
  wrapperToChangeRoute.vm.$router.push(route)
}

describe(ComponentName, () => {
  it('has a name', () => {
    expect(CSidebarNavDropdown.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('changes state on open prop change', () => {
    wrapper.setProps({ open: true })
    expect(wrapper.vm.isOpen).toBe(true)
  })
  it('changes state when clicked on toggle', () => {
    wrapper.find('.c-nav-link').trigger('click')
    expect(wrapper.vm.isOpen).toBe(false)
    expect(wrapper.emitted()['update:open']).toBeTruthy()
  })
  it('emitts item-click event when click inside dropdown', () => {
    wrapper.find('ul').trigger('click')
    expect(wrapper.emitted()['item-clicked']).toBeTruthy()
  })
  it('open active dropdown on route change when in openActive mode', () => {
    expect(wrapper.vm.isOpen).toBe(false)
    routeChange(wrapper, '/somePath/sub1')
    expect(wrapper.vm.isOpen).toBe(true)
  })
  it('close dropdown on route change when in close mode', () => {
    wrapperCloseMode.setProps({open: true})
    expect(wrapperCloseMode.vm.isOpen).toBe(true)
    routeChange(wrapperCloseMode, '/somePath/sub2')
    expect(wrapperCloseMode.vm.isOpen).toBe(false)
  })
  it('close inactive dropdown on route change when in closeInactive mode', () => {
    wrapperCloseInactiveMode.setProps({open: true})
    expect(wrapperCloseInactiveMode.vm.isOpen).toBe(true)
    routeChange(wrapperCloseInactiveMode, '/somePath/sub3')
    expect(wrapperCloseInactiveMode.vm.isOpen).toBe(true)
    routeChange(wrapperCloseInactiveMode, '/otherDropdownRoute')
    expect(wrapperCloseInactiveMode.vm.isOpen).toBe(false)
  })
})
