import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import CSidebarNavDropdown from '../CSidebarNavDropdown'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

const ComponentName = 'CSidebarNavDropdown'

const wrapperMounting = (mode, icon = 'cui-settings') => mount(
  CSidebarNavDropdown,
  { 
    localVue, 
    router, 
    propsData: { 
      route: '/somePath' ,
      icon
    },
    provide: {
      dropdownMode: mode
    }
  }
)

const wrapper = wrapperMounting('openActive', { name: 'cui-settings', size: 'lg' })
const wrapperCloseMode = wrapperMounting('close', { name: 'cui-settings'})
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
  it('changes state on show prop change', () => {
    wrapper.setProps({ show: true })
    expect(wrapper.vm.open).toBe(true)
  })
  it('changes state when clicked on toggle', () => {
    wrapper.find('.c-sidebar-nav-dropdown-toggle').trigger('click')
    expect(wrapper.vm.open).toBe(false)
    expect(wrapper.emitted()['update:show']).toBeTruthy()
  })
  it('emitts item-click event when click inside dropdown', () => {
    wrapper.find('ul').trigger('click')
    expect(wrapper.emitted()['item-clicked']).toBeTruthy()
  })
  it('show active dropdown on route change when in openActive mode', () => {
    expect(wrapper.vm.open).toBe(false)
    routeChange(wrapper, '/somePath/sub1')
    expect(wrapper.vm.open).toBe(true)
  })
  it('close dropdown on route change when in close mode', () => {
    wrapperCloseMode.setProps({show: true})
    expect(wrapperCloseMode.vm.open).toBe(true)
    routeChange(wrapperCloseMode, '/somePath/sub2')
    expect(wrapperCloseMode.vm.open).toBe(false)
  })
  it('close inactive dropdown on route change when in closeInactive mode', () => {
    wrapperCloseInactiveMode.setProps({show: true})
    expect(wrapperCloseInactiveMode.vm.open).toBe(true)
    routeChange(wrapperCloseInactiveMode, '/somePath/sub3')
    expect(wrapperCloseInactiveMode.vm.open).toBe(true)
    routeChange(wrapperCloseInactiveMode, '/otherDropdownRoute')
    expect(wrapperCloseInactiveMode.vm.open).toBe(false)
  })
})
