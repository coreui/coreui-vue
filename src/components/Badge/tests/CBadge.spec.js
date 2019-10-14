import { mount } from '@vue/test-utils'
import Component from '../CBadge'

const ComponentName = 'CBadge'
const wrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    textHtml: 'Badge text',
    color: 'success',
    active: true,
    pill: true,
    disabled: true,
    href: 'someLink'
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly from textHtml prop', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
});
