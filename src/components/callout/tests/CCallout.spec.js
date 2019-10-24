import { mount } from '@vue/test-utils'
import Component from '../CCallout'

const ComponentName = 'CCallout'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    color: 'success',
  },
  slots: {
    default: 'Callout'
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
