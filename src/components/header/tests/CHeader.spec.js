import { mount } from '@vue/test-utils'
import Component from '../CHeader'

const ComponentName = 'CHeader'
const wrapper = mount(Component)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
