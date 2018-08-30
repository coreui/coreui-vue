import { mount } from "@vue/test-utils";
import SidebarMinimizer from "../Sidebar/SidebarMinimizer";

describe("SidebarMinimizer.vue", () => {
  // Inspect the raw component options
  it('has onClick method', () => {
    expect(typeof SidebarMinimizer.methods.onClick).toBe('function')
  })
  it('has sidebarMinimize method', () => {
    expect(typeof SidebarMinimizer.methods.sidebarMinimize).toBe('function')
  })
  it('has brandMinimize method', () => {
    expect(typeof SidebarMinimizer.methods.brandMinimize).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(SidebarMinimizer)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('sidebar-minimizer')
  })
});
