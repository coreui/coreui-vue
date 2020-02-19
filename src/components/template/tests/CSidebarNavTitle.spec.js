import { mount } from '@vue/test-utils'
import Component from '../CSidebarNavTitle'

const ComponentName = 'CSidebarNavTitle'
const wrapper = mount(Component, {
  slots: {
    default: 'title'
  }
})

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
