import { mount } from '@vue/test-utils'
import Component from "../CCardImg";
const ComponentName = 'CCardImg'
const wrapper = mount(Component, {
  context: {
    props: {
      src: 'some_src'
    }
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
