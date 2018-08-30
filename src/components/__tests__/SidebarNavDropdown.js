import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import SidebarNavDropdown from "../Sidebar/SidebarNavDropdown";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe("SidebarNavDropdown.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = shallowMount(SidebarNavDropdown, {
      localVue,
      router,
      propsData: {
        name: 'test',
        url: '',
        icon: ''
      }
    })
    expect(wrapper.props().name).toEqual('test')
    expect(wrapper.props().url).toBe('')
    expect(wrapper.props().icon).toBe('')
  });
  it('has classIcon computed property', () => {
    expect(typeof SidebarNavDropdown.computed.classIcon).toBe('function')
  })
  it('has handleClick method', () => {
    expect(typeof SidebarNavDropdown.methods.handleClick).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = shallowMount(SidebarNavDropdown, { localVue, router })
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.is('router-link-stub')).toBe(true)
  })
});
