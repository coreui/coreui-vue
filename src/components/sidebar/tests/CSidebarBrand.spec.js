import { mount } from '@vue/test-utils'
import Component from '../CSidebarBrand'
const ComponentName = 'CSidebarBrand'
const wrapper = mount(Component, {
  propsData: {
    wrappedInLink: { href: 'https://coreui.io' }
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})