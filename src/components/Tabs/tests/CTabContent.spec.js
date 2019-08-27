import { mount } from '@vue/test-utils'
import Component from '../CTabContent'

const ComponentName = 'CTabContent'
const defaultWrapper = mount(Component)


describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
})
