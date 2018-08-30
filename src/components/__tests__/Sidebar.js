import { mount } from '@vue/test-utils'
import Sidebar from "../Sidebar/Sidebar";

describe("Sidebar.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(Sidebar, {
      propsData: {
        fixed: false,
      }
    })
    expect(wrapper.props().fixed).toBe(false)
  });
  it('has isFixed method', () => {
    expect(typeof Sidebar.methods.isFixed).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Sidebar)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.text()).toBe('Sidebar')
    expect(wrapper.classes()).toContain('sidebar')
  })
});
