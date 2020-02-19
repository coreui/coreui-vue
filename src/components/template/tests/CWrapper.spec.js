import { mount } from '@vue/test-utils'
import Component from '../CWrapper'

const ComponentName = 'CWrapper'
const wrapper = mount(Component)


describe(`${ComponentName}.vue`, () => {
  it('has a name', () => {
    expect(Component.name).toBe(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
