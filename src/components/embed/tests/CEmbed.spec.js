import { mount } from '@vue/test-utils'
import Component from '../CEmbed'

const ComponentName = 'CEmbed'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    type: 'embed',
    ratio: '4by3'
  },
  slots: {
    default: 'CEmbed item'
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
