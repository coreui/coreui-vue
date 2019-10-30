import { mount } from '@vue/test-utils'
import Component from '../CBadge'

const ComponentName = 'CBadge'
const wrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    color: 'success',
    active: true,
    shape: 'pill',
    disabled: true,
    href: 'someLink'
  },
  slots: {
    default: 'Badge text'
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with slot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
});
