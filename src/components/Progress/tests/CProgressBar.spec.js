import { mount } from '@vue/test-utils'
import Component from "../CProgressBar.js";

const ComponentName = 'CProgressBar'
const wrapper = mount(Component,{
  propsData: {
    variant: 'success',
    value: 50
  }
})
// /* eslint-disable no-console */
// console.log(wrapper.vm.computedVariant)
// console.log(wrapper.vm.progressBarStyles)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
});
