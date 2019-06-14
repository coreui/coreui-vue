import { mount } from '@vue/test-utils'
import Component from "../CProgress";

const ComponentName = 'CProgress'
// const wrapper = mount(Component, {
//   propsData: {
//     color: 'black',
//     value: '20'
//   },
//   data: {
//     class: 'test',
//     staticClass: 'test2',
//   }
// })
// const wrapper = mount(
//   <CProgress color="black" role="test" class="myClass"/>
// )


describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('renders correctly', () => {
  //   expect(wrapper.element).toMatchSnapshot()
  // })
});
