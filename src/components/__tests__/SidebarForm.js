import { mount } from '@vue/test-utils'
import SidebarForm from "../Sidebar/SidebarForm";

describe("SidebarForm.vue", () => {
  // Inspect the raw component options
  it('has hasSlotDefault computed property', () => {
    expect(typeof SidebarForm.computed.hasSlotDefault).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarForm, { slots: { default: 'test'}})
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('sidebar-form')
  })
});
