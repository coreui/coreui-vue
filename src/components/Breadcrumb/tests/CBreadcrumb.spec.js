import { mount } from '@vue/test-utils'
import Component from "../CBreadcrumb";

const ComponentName = 'CBreadcrumb'
const wrapper = mount(Component, {
  context: {
    props: {
      items: [{
        text: 'Admin',
        href: '#'
      }, {
        text: 'Manage',
        href: '#'
      }, {
        text: 'Library'
      }]
    }
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
