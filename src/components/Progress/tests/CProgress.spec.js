import { mount } from '@vue/test-utils'
import Component from '../CProgress'

const ComponentName = 'CProgress'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    color: 'black',
    value: 20
  },
  attrs: {
    class: 'test'
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
