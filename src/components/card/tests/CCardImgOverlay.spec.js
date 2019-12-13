import { mount } from '@vue/test-utils'
import Component from '../CCardImgOverlay'
const ComponentName = 'CCardImgOverlay'

const wrapper = mount(Component, {
  slots: {
    default: 'content goes here'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})