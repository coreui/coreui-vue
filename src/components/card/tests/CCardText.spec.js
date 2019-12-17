import { mount } from '@vue/test-utils'
import Component from '../CCardText'
const ComponentName = 'CCardText'
const wrapper = mount(Component)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})