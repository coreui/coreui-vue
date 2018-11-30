import { mount } from '@vue/test-utils'
import Component from "../CCardHeader";
const ComponentName = 'CCardHeader'
const wrapper = mount(Component, {
  context: {
    props: {
      header: 'header',
      align: 'left',
      variant: 'primary',
      textVariant: 'white',
      borderVariant: 'solid'
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
