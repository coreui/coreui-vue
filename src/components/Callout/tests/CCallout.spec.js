import { mount } from '@vue/test-utils'
import Component from "../CCallout";

const ComponentName = 'CCallout'
const wrapper = mount(Component)

describe(`${ComponentName} .vue`, () => {
  it('has a correct name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  // it("should have default props", () => {
  //   const wrapper = mount(Component, {
  //     propsData: {
  //       variant: ''
  //     }
  //   })
  //   expect(wrapper.props().variant).toBe('')
  // });
  // it('has classList computed property', () => {
  //   expect(typeof Component.computed.classList).toBe('function')
  // })
  // it('has calloutVariant computed property', () => {
  //   expect(typeof Component.computed.calloutVariant).toBe('function')
  // })
  // it('renders correctly', () => {
  //   expect(wrapper.element).toMatchSnapshot()
  //   expect(wrapper.element.textContent).toEqual('Callout')
  //   expect(wrapper.classes()).toContain('callout')
  // })
});
