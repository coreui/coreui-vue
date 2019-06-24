import { mount } from '@vue/test-utils'
import Component from '../CWidgetSimple'

const ComponentName = 'CWidgetSimple'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component,{
  propsData: {
    header: 'header',
    text: 'text',
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('correctly render component with default props', () => {
  //   expect(defaultWrapper.findAll('div').at(2).text()).toMatch('header:string')
  //   expect(defaultWrapper.findAll('div').at(3).text()).toMatch('text:string')
  // })
  // it('matches default props snapshot', () => {
  //   expect(defaultWrapper.element).toMatchSnapshot()
  // })
  // it('correctly render component with custom props', () => {
  //   expect(customWrapper.findAll('div').at(2).text()).toMatch('header')
  //   expect(customWrapper.findAll('div').at(3).text()).toMatch('text')
  // })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
