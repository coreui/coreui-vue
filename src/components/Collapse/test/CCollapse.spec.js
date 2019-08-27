import { mount } from '@vue/test-utils'
import Component from '../CCollapse'

const ComponentName = 'CCollapse'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    duration: 500,
    show: true,
    navbar: true,
    toggler: 'some_id'
  },
  slots: {
    default: 'CCollapse content'
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
