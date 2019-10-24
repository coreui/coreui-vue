import { mount } from '@vue/test-utils'
import Component from '../CSidebarMinimizer'

const ComponentName = 'CSidebarMinimizer'
const wrapper = mount(Component)
// /* eslint-disable no-console */
// console.log("something")

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // Inspect the raw component options
  // it('has onClick method', () => {
  //   expect(typeof Component.methods.onClick).toBe('function')
  // })
  // it('has sidebarMinimize method', () => {
  //   expect(typeof Component.methods.sidebarMinimize).toBe('function')
  // })
  // it('has brandMinimize method', () => {
  //   expect(typeof Component.methods.brandMinimize).toBe('function')
  // })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
    // expect(wrapper.classes()).toContain('sidebar-minimizer')
  })
});
