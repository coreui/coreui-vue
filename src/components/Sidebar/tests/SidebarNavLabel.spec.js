import { mount } from '@vue/test-utils'
import Component from "../CSidebarNavLabel";

const ComponentName = 'CSidebarNavLabel'
const wrapper = mount(Component, {
  propsData: {
    label: { variant: 'info' },
    icon: 'fa fa-circle'
  }
})
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  test("should have default props", () => {
    const wrapper = mount(Component, {
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
  it('has hasSlotDefault computed property', () => {
    expect(typeof Component.computed.classList).toBe('function')
  })
  it('has getClasses method', () => {
    expect(typeof Component.methods.getClasses).toBe('function')
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    expect(wrapper.classes()).toContain('hidden-cn')
  })
});
