import { mount } from '@vue/test-utils'
import Component from '../CButtonToolbar'

const ComponentName = 'CButtonToolbar'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    justify: 'between'
  },
  slots: {
    default: 'Custom button toolbar'
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
