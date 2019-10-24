import { mount } from '@vue/test-utils'
import Component from '../CWidgetProgress'
import CProgress from '../../progress/CProgress'
import Vue from 'vue'

Vue.component('CProgress', CProgress)

const ComponentName = 'CWidgetProgress'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    color: 'info',
    inverse: true,
    value: 30,
    text:'test',
    header: 'test',
    footer: 'test'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('correctly render component with default props', () => {
  //   expect(defaultWrapper.findAll('div').at(0).attributes().class).toMatch('card')
  //   expect(defaultWrapper.findAll('div').at(2).text()).toMatch('header:string')
  //   expect(defaultWrapper.findAll('div').at(3).text()).toMatch('text:string')
  //   expect(defaultWrapper.find('small').text()).toMatch('footer:string')
  //   expect(defaultWrapper.find('cprogress-stub').exists()).toBe(true)
  //   expect(defaultWrapper.find('cprogress-stub').attributes().color).toBe('success')
  //   expect(defaultWrapper.find('cprogress-stub').attributes().class).toBe('progress-xs my-3 mb-0')
  //   expect(defaultWrapper.find('cprogress-stub').attributes().value).toBe('25')
  // })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  // it('correctly render component with custom props', () => {
  //   expect(customWrapper.findAll('div').at(0).attributes().class).toMatch('card text-white bg-info')
  //   expect(customWrapper.findAll('div').at(2).text()).toMatch('test')
  //   expect(customWrapper.findAll('div').at(3).text()).toMatch('test')
  //   expect(customWrapper.find('small').text()).toMatch('test')
  //   expect(customWrapper.find('cprogress-stub').exists()).toBe(true)
  //   expect(customWrapper.find('cprogress-stub').attributes().color).toBe('')
  //   expect(customWrapper.find('cprogress-stub').attributes().class).toBe('progress-xs my-3 mb-0 progress-white')
  //   expect(customWrapper.find('cprogress-stub').attributes().value).toBe('30')
  // })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
