import { mount } from '@vue/test-utils'
import Component from '../CContainer'

const ComponentName = 'CContainer'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    fluid: true,
    tag: 'header'
  },
  slots: {
    default: 'CContainer content'
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
