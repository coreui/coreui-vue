import { mount } from '@vue/test-utils'
import Component from '../CWidgetIcon'

const ComponentName = 'CWidgetIcon'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    header: 'header',
    text: 'text',
    color: 'success',
    iconPadding: false
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
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
