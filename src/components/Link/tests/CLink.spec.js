import { mount } from '@vue/test-utils'
import Component from '../CLink'

const ComponentName = 'CLink'
const wrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    to: '/some-router-link'
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
});
