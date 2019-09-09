import { mount } from '@vue/test-utils'
import Component from '../CBreadcrumb'

const ComponentName = 'CBreadcrumb'
const wrapper = mount(Component, {
  propsData: {
    items: [{
      text: 'Admin',
      href: '#'
    }, {
      text: 'Manage',
      href: '#'
    }, {
      text: 'Library'
    }],
    addLinkClasses: 'additional-link-class',
    addLastItemClasses: 'additional-last-item-class',
    addClasses: 'additional-class'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
});
