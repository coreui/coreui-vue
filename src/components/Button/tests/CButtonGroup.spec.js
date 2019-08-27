import { mount } from '@vue/test-utils'
import Component from '../CButtonGroup'

const ComponentName = 'CButtonGroup'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    vertical: true,
    size: 'lg'
  },
  slots: {
    default: 'Vertical Group'
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
