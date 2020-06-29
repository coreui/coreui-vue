import { mount } from '@vue/test-utils'
import Component from '../CListGroup'

const ComponentName = 'CListGroup'
const wrapper = mount(Component, {
  propsData: {
    horizontal: 'sm'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    flush: true,
    accent: true
  },
  slots: {
    default: 'CListGroup content'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with flush option', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
