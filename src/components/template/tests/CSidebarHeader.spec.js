import { mount } from '@vue/test-utils'
import Component from '../CSidebarHeader'

const ComponentName = 'CSidebarHeader'
const wrapper = mount(Component, { slots: { default: 'test'}})
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  // it('has hasSlotDefault computed property', () => {
  //   expect(typeof Component.computed.hasSlotDefault).toBe('function')
  // })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    // expect(wrapper.classes()).toContain('sidebar-header')
  })
});
