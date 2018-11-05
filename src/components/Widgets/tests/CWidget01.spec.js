// import { mount } from '@vue/test-utils'
// import Component from '../CWidget01'
// const ComponentName = 'CWidget01'
// const defaultWrapper = mount(Component)
// const customWrapper = mount(Component,{
//   propsData: {
//     variant: 'info',
//     inverse: true,
//     value: 30,
//     text:'test',
//     header: 'test',
//     footer: 'test'
//   }
// })
//
// describe(ComponentName, () => {
//   it('has a name', () => {
//     expect(Component.name).toMatch(ComponentName)
//   })
//   it('is Vue instance', () => {
//     expect(defaultWrapper.isVueInstance()).toBe(true)
//   })
//   it('correctly sets default props and data when created', () => {
//     expect(defaultWrapper.vm.computedCardClasses).toBe('card')
//     expect(defaultWrapper.vm.computedBarClasses).toBe('')
//     expect(defaultWrapper.vm.computedVariant).toBe('success')
//     expect(defaultWrapper.props().header).toBe('header:string')
//     expect(defaultWrapper.props().text).toBe('text:string')
//     expect(defaultWrapper.props().variant).toBe('success')
//     expect(defaultWrapper.props().footer).toBe('footer:string')
//     expect(defaultWrapper.props().value).toBe(25)
//     expect(defaultWrapper.props().inverse).toBe(false)
//   })
//   it('matches default props snapshot', () => {
//     expect(defaultWrapper.element).toMatchSnapshot()
//   })
//   it('correctly sets custom props and data when created', () => {
//     expect(customWrapper.vm.computedCardClasses).toBe('card text-white bg-info')
//     expect(customWrapper.vm.computedBarClasses).toBe('progress-white')
//     expect(customWrapper.vm.computedVariant).toBe('')
//     expect(customWrapper.props().header).toBe('test')
//     expect(customWrapper.props().text).toBe('test')
//     expect(customWrapper.props().variant).toBe('info')
//     expect(customWrapper.props().footer).toBe('test')
//     expect(customWrapper.props().value).toBe(30)
//     expect(customWrapper.props().inverse).toBe(true)
//   })
//   it('matches custom props snapshot', () => {
//     expect(customWrapper.element).toMatchSnapshot()
//   })
// })

import { shallowMount } from '@vue/test-utils'
import Component from '../CWidget01'

const ComponentName = 'CWidget01'
const defaultWrapper = shallowMount(Component)
const customWrapper = shallowMount(Component, {
  context:{
    props: {
      variant: 'info',
      inverse: true,
      value: 30,
      text:'test',
      header: 'test',
      footer: 'test'
    }
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('is functional component', () => {
    expect(defaultWrapper.isFunctionalComponent).toBe(true)
  })
  // it('correctly render component with default props', () => {
  //   expect(defaultWrapper.findAll('div').at(2).text()).toMatch('header:string')
  //   expect(defaultWrapper.findAll('div').at(3).text()).toMatch('text:string')
  //   expect(defaultWrapper.find('i').attributes().class).toMatch('fa fa-cogs bg-primary')
  //   expect(defaultWrapper.find('clink-stub').exists()).toBe(false)
  // })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  // it('correctly render component with custom props', () => {
  //   expect(customWrapper.findAll('div').at(2).text()).toMatch('header')
  //   expect(customWrapper.findAll('div').at(3).text()).toMatch('text')
  //   expect(customWrapper.find('i').attributes().class).toMatch('someClasses')
  //   expect(customWrapper.find('clink-stub').exists()).toBe(true)
  //   expect(customWrapper.find('clink-stub').attributes().href).toMatch('link.com')
  // })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
