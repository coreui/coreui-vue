import { mount } from '@vue/test-utils'
import Component from '../CNavbarBrand'

const ComponentName = 'CNavbarBrand'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    href: 'https://coreui.io/'
  },
  slots: {
    default: 'CNavbarBrand'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
