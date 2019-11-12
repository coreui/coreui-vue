import { mount } from '@vue/test-utils'
import Component from '../CCardBody'

const ComponentName = 'CCardBody'
const wrapper = mount(Component, {
  context: {
    props: {
      align: 'left',
      color: 'primary',
      textColor: 'white',
      borderColor: 'solid'
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
