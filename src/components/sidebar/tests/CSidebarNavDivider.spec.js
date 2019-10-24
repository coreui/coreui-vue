import { mount } from '@vue/test-utils'
import Component from '../CSidebarNavDivider'

const ComponentName = 'CSidebarNavDivider'
const wrapper = mount(Component)
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  // it('has hasSlotDefault computed property', () => {
  //   // expect(typeof Component.computed.classList).toBe('function')
  //   expect(typeof Component.computed.itemClasses).toBe('function')
  // })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    // expect(wrapper.classes()).toContain('divider')
  })
});
