import { mount } from '@vue/test-utils'
import Component from '../CProgressBar'

const ComponentName = 'CProgressBar'
const defaultWrapper = mount(Component)

const customWrapper = mount(Component,{
  propsData: {
    color: 'success',
    value: 50,
    striped: true,
    showValue: true,
    max: 200
  },
  slots: {
    default: '234'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('renders progress correctly', () => {
    expect(customWrapper.vm.text).toBe('50')
    customWrapper.setProps({ showPercentage: true })
    expect(customWrapper.vm.text).toBe('25%')
  })
})
