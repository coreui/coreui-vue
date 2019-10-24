import { mount } from '@vue/test-utils'
import Component from '../CWidgetBrand'

const ComponentName = 'CWidgetBrand'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component,{
  propsData: {
    color: 'twitter',
    rightHeader: 'rightHeader',
    leftHeader: 'leftHeader',
    rightFooter: 'rightFooter',
    leftFooter: 'leftFooter'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  // it('correctly render component with default props', () => {
  //   // expect(defaultWrapper.findAll('div').at(1).attributes().class).toMatch('brand-card-header bg-facebook')
  //   expect(defaultWrapper.findAll('div').at(4).text()).toMatch('rightHeader:string')
  //   expect(defaultWrapper.findAll('div').at(5).text()).toMatch('rightFooter:string')
  //   expect(defaultWrapper.findAll('div').at(7).text()).toMatch('leftHeader:string')
  //   // expect(defaultWrapper.findAll('div').at(8).text()).toMatch('leftFooter:string')
  //   // expect(defaultWrapper.find('i').attributes().class).toMatch('fa fa-facebook')
  // })
  it('matches default props snapshot', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  // it('correctly render component with custom props', () => {
  //   // expect(customWrapper.findAll('div').at(1).attributes().class).toMatch('brand-card-header bg-twitter')
  //   expect(customWrapper.findAll('div').at(4).text()).toMatch('rightHeader')
  //   expect(customWrapper.findAll('div').at(5).text()).toMatch('rightFooter')
  //   expect(customWrapper.findAll('div').at(7).text()).toMatch('leftHeader')
  //   // expect(customWrapper.findAll('div').at(8).text()).toMatch('leftFooter')
  //   // expect(customWrapper.find('i').attributes().class).toMatch('fa fa-twitter')
  // })
  it('matches custom props snapshot', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
