import { mount } from '@vue/test-utils'
import Component from '../CListGroupItem'

const ComponentName = 'CListGroupItem'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    action: true,
    variant: 'success'
  },
  slots: {
    default: 'CListGroupItem content'
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
