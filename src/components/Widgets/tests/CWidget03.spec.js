import { mount } from '@vue/test-utils'
import Component from '../CWidget03'

const ComponentName = 'CWidget03'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component,{
  context:{
    props: {
      header: 'header',
      text: 'text',
      iconClasses: 'someClasses',
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
  it('correctly render component with default props', () => {
    expect(defaultWrapper.findAll('div').at(2).text()).toMatch('header:string')
    expect(defaultWrapper.findAll('div').at(3).text()).toMatch('text:string')
    expect(defaultWrapper.find('i').attributes().class).toMatch('fa fa-cogs bg-primary')
  })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('correctly render component with custom props', () => {
    expect(customWrapper.findAll('div').at(2).text()).toMatch('header')
    expect(customWrapper.findAll('div').at(3).text()).toMatch('text')
    expect(customWrapper.find('i').attributes().class).toMatch('someClasses')
  })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
