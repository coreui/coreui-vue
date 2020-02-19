import { mount } from '@vue/test-utils'
import Component from '../CHeaderNavLink'

const ComponentName = 'CHeaderNavLink'
const wrapper = mount(Component)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
