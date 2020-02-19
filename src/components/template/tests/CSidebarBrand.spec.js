import { mount } from '@vue/test-utils'
import Component from '../CSidebarBrand'
const ComponentName = 'CSidebarBrand'
const wrapper = mount(Component)
const linkWrapper = mount(Component, {
  propsData: {
    href: 'https://coreui.io'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly as div', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly as link', () => {
    expect(linkWrapper.element).toMatchSnapshot()
  })
})