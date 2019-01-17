import { mount } from '@vue/test-utils'
import SidebarNavLabel from "../Sidebar/SidebarNavLabel";

describe("SidebarNavLabel.vue", () => {
  // Inspect the raw component options
  test("should have default props", () => {
    const wrapper = mount(SidebarNavLabel, {
      propsData: {
        name: 'test',
        url: '',
        icon: 'fa fa-circle',
        classes: '',
        label: { variant: 'info' }
      }
    })
    expect(wrapper.props().name).toEqual('test')
    expect(wrapper.props().url).toBe('')
    expect(wrapper.props().icon).toBe('fa fa-circle')
  });
  it('has computed properties', () => {
    expect(typeof SidebarNavLabel.computed.classList).toBe('function')
    expect(typeof SidebarNavLabel.computed.itemClasses).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarNavLabel, {
      propsData: {
        name: 'test',
        label: { variant: 'info' },
        icon: 'fa fa-circle'
      }
    })
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('hidden-cn')
  })
});
