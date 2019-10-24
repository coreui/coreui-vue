import { mount } from '@vue/test-utils'
import Component from '../CCardGroup'
const ComponentName = 'CCardGroup'
const wrapper = mount(Component, {
  context: {
    props: {
      deck: true,
      column: true,
    }
  },
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
});
