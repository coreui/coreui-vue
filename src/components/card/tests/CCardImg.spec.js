import { mount } from '@vue/test-utils'
import Component from '../CCardImg'
const ComponentName = 'CCardImg'

const wrapper = mount(Component)
const wrapperTop = mount(Component, {
  props: {
    variant: 'top'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly with variant', () => {
    expect(wrapperTop.element).toMatchSnapshot()
  })
})