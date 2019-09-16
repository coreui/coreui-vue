import { mount } from '@vue/test-utils'
import Component from '../CNavItem'

const ComponentName = 'CNavItem'
const defaultWrapper = mount(Component)
const disabledWrapper = mount(Component, {
  propsData: {
    disabled: true
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
    expect(disabledWrapper.element).toMatchSnapshot()
  })
})
