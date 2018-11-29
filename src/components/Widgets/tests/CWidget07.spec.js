import { mount } from '@vue/test-utils'
import Component from '../CWidget07'
const ComponentName = 'CWidget07'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component,{
  context:{
    props: {
      variant: 'info',
      rightHeader: 'rightHeader',
      leftHeader: 'leftHeader',
      rightFooter: 'rightFooter',
      leftFooter: 'leftFooter'
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
    expect(defaultWrapper.findAll('div').at(0).attributes().class).toMatch('card bg-primary')
    expect(defaultWrapper.findAll('span').at(0).text()).toMatch('rightHeader:string')
    expect(defaultWrapper.findAll('span').at(1).text()).toMatch('leftHeader:string')
    expect(defaultWrapper.findAll('span').at(2).text()).toMatch('rightFooter:string')
    expect(defaultWrapper.findAll('span').at(3).text()).toMatch('leftFooter:string')
  })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('correctly render component with custom props', () => {
    expect(customWrapper.findAll('div').at(0).attributes().class).toMatch('card bg-info')
    expect(customWrapper.findAll('span').at(0).text()).toMatch('rightHeader')
    expect(customWrapper.findAll('span').at(1).text()).toMatch('leftHeader')
    expect(customWrapper.findAll('span').at(2).text()).toMatch('rightFooter')
    expect(customWrapper.findAll('span').at(3).text()).toMatch('leftFooter')
  })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
