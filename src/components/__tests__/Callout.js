import { mount } from "@vue/test-utils";
import Callout from "../Callout/Callout";

describe("Callout.vue", () => {
  // Inspect the raw component options
  it("should have default props", () => {
    const wrapper = mount(Callout, {
      propsData: {
        variant: ''
      }
    })
    expect(wrapper.props().variant).toBe('')
  });
  it('has classList computed property', () => {
    expect(typeof Callout.computed.classList).toBe('function')
  })
  it('has calloutVariant computed property', () => {
    expect(typeof Callout.computed.calloutVariant).toBe('function')
  })
  it('renders correctly', () => {
    const wrapper = mount(Callout)
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.element.textContent).toEqual('Callout')
    expect(wrapper.classes()).toContain('callout')
  })
});
