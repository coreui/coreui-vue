import { mount } from '@vue/test-utils'
import Component from '../CNavItem'

const ComponentName = 'CNavItem'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {

  },
  slots: {
    default: 'CNavItem text'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
