import { mount } from '@vue/test-utils'
import Component from '../CListGroup'

const ComponentName = 'CListGroup'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    flush: true
  },
  slots: {
    default: 'CListGroup content'
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
