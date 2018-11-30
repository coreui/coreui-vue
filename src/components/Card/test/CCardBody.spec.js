import { mount } from '@vue/test-utils'
import Component from "../CCardBody";

const ComponentName = 'CCardBody'
const wrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      variant: 'primary',
      textVariant: 'white',
      borderVariant: 'solid',
      title: 'title',
      subtitle: 'subtitle'
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
