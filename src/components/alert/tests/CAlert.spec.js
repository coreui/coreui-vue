import { mount } from '@vue/test-utils'
import Component from '../CAlert'
import CButtonClose from '../../button/CButtonClose'
import Vue from 'vue'

Vue.component('CButtonClose', CButtonClose)

const ComponentName = 'CAlert'
const defaultWrapper = mount(Component, {
  propsData: {
    show: true,
    closeButton: true
  },
  slots: {
    default: 'Dismissible Alert!'
  }
})

const customWrapper = mount(Component, {
  propsData: {
    show: true,
    fade: true,
    closeButton: true,
    color: 'success'
  },
  slots: {
    default: 'Dismissible Alert!'
  },
  listeners: {
    'update:show': () => {}
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
  it('changes state corectly', () => {
    expect(customWrapper.vm.state).toBe(true)
    customWrapper.setProps({ show: false })
    expect(customWrapper.vm.state).toBe(false)
  })
  it('closes alert after given number of seconds', () => {
    jest.useFakeTimers()
    defaultWrapper.setProps({ show: 10 })
    expect(defaultWrapper.vm.state).toBe(10)
    setTimeout(() => expect(defaultWrapper.vm.state).toBe(0), 10001)
    jest.runAllTimers()
  })
  it('closes alert after click on dismiss button', () => {
    customWrapper.setProps({ show: true })
    const button = customWrapper.find('button')
    button.trigger('click')
    expect(customWrapper.vm.state).toBe(false)
  })

  it('emmits correct update:show events when listener is set', () => {
    jest.useFakeTimers()
    customWrapper.setProps({ show: 10 })
    setTimeout(() => {
      expect(customWrapper.emitted()['update:show'].slice(-1)[0]).toEqual([9])
    }, 1000)
    jest.runAllTimers()
  })
  it('properly destroys alert', () => {
    customWrapper.destroy()
    expect(customWrapper.vm.countdownTimeout).toBe(null)
  })
})
