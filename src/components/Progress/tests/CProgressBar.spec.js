import { mount } from '@vue/test-utils'
import Component from "../CProgressBar";

const ComponentName = 'CProgressBar'
// const wrapper = mount(Component,{
//   propsData: {
//     color: 'success',
//     value: 50,
//     striped: true
//   },
//   slots: {
//     default: '234'
//   }
// })
// console.log(wrapper.vm.computedVariant)
// console.log(wrapper.vm.progressBarStyles)

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('renders correctly', () => {
  //   expect(wrapper.element).toMatchSnapshot()
  // })
});
