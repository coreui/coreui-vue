import { mount } from '@vue/test-utils'
import Component from '../CCol'

const ComponentName = 'CCol'
const wrapper = mount(Component)

const customWrapper = mount(Component, {
  propsData: {
    sm: 12,
    md: { size: 6, offset: 3, order: 1},
    lg: {},
    xl: true,
    xxl: { size: 4, offset: 2, order: 1}
  },
  slots: {
    default: 'CCol content'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
