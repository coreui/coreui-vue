import { mount } from '@vue/test-utils'
import Component from '../CCardFooter'

const ComponentName = 'CCardFooter'
const wrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      color: 'primary',
      textColor: 'white',
      borderColor: 'solid'
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
