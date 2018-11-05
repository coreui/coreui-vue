import { mount } from '@vue/test-utils'
import Component from "../CProgress";

const ComponentName = 'CProgress'
const wrapper = mount(Component,{
  propsData: {
    variant: 'black',
    value: 50
  }
})
// /* eslint-disable no-console */
// console.log(wrapper.vm.computedVariant)
// console.log(wrapper.vm.progressBarStyles)

describe(`${ComponentName} .vue`, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('sets background color correctly', () => {

    expect(wrapper.element).toMatchSnapshot()
  })
});
