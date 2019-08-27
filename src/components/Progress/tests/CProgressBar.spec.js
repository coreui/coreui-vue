import { mount } from '@vue/test-utils'
import Component from '../CProgressBar'

const ComponentName = 'CProgressBar'
const customWrapper = mount(Component,{
  propsData: {
    color: 'success',
    value: 50,
    striped: true
  },
  slots: {
    default: '234'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('renders correctly', () => {
  //   expect(defaultWrapper.element).toMatchSnapshot()
  // })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
});
