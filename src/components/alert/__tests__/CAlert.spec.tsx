import { mount } from '@vue/test-utils'
import CAlert from '../CAlert.vue'
//import CButtonClose from '../../button/CButtonClose'
//import Vue from 'vue'

//Vue.CAlert('CButtonClose', CButtonClose)


const CAlertName = 'CAlert'

const defaultWrapper = mount(CAlert, {
  props: {
    visible: true,
    dismissible: true
  },
  slots: {
    default: 'Dismissible Alert!'
  }
} as any)

const customWrapper = mount(CAlert, {
  props: {
    visible: true,
    dismissible: true,
    color: 'success'
  },
  slots: {
    default: 'Dismissible Alert!'
  },
  listeners: {
    'update:show': () => {}
  }
} as any)

describe(CAlertName, () => {
  it('has a name', () => {
    expect(CAlert.name).toMatch(CAlertName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('changes state corectly', () => {
    expect(customWrapper.vm.state).toBe(true)
    customWrapper.setProps({ visible: false })
    expect(customWrapper.vm.state).toBe(false)
  })
  /*
  it('closes alert after given number of seconds', () => {
    jest.useFakeTimers()
    defaultWrapper.setProps({ visible: 10 })
    expect(defaultWrapper.vm.state).toBe(10)
    setTimeout(() => expect(defaultWrapper.vm.state).toBe(0), 10001)
    jest.runAllTimers()
  })
  */
  it('closes alert after click on dismiss button', () => {
    customWrapper.setProps({ visible: true })
    const button = customWrapper.find('button')
    button.trigger('click')
    expect(customWrapper.vm.state).toBe(false)
    expect(customWrapper.emitted()).toHaveProperty('onDismiss')
    expect(customWrapper.emitted()).toHaveProperty('onDismissed')
  })

  /*
  it('emmits correct update:visible events when listener is set', () => {
    jest.useFakeTimers()
    customWrapper.setProps({ visible: 10 })
    setTimeout(() => {
      expect(customWrapper.emitted()['update:visible'].slice(-1)[0]).toEqual([9])
    }, 1000)
    jest.runAllTimers()
  })
  */
 /*
  it('properly destroys alert', () => {
    customWrapper.destroy()
    expect(customWrapper.vm.countdownTimeout).toBe(null)
  })
  */
})