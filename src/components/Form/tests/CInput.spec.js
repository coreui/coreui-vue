import { mount } from '@vue/test-utils'
import Component from '../CInput'

const ComponentName = 'CInput'
const wrapper = mount(Component, {
  propsData: {
    id: 'some_id',
    lazy: false,
    size: 'lg',
    plaintext: true,
    isValid: (val) => val && val.length > 12
  }
})

const customWrapper = mount(Component, {
  propsData: {
    type: 'number',
    label: 'label',
    id: 'some_id',
    wasValidated: true,
    checked: true,
    value: '32',
    validFeedback: 'input is valid',
    invalidFeedback: 'input is invalid',
    tooltipFeedback: true,
    description: 'permission',
    isValid: true,
    addInputClasses: 'additional-input-class',
    addLabelClasses: 'additional-label-class',
    addWrapperClasses: 'additional-wrapper-class',
    custom: true,
    size: 'lg',
    lazy: true
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('update value when not lazy', () => {
    const input = wrapper.find('input')
    input.element.value = 'something'

    jest.useFakeTimers()
    input.trigger('input')
    setTimeout(() => expect(wrapper.emitted()['update:value']).toBeTruthy(), 0)
    jest.runAllTimers()

  })
  it('update value after given time lazy is number', () => {
    wrapper.setProps({ lazy: 300 })
    const input = wrapper.find('input')
    input.element.value = 'something else'
    const eventsStr = () => JSON.stringify(wrapper.emitted()['update:value'])

    jest.useFakeTimers()
    input.trigger('input')
    setTimeout(() => expect(eventsStr().includes('something else')).toBe(false), 0)
    jest.runAllTimers()

    jest.useFakeTimers()
    setTimeout(() => expect(eventsStr().includes('something else')).toBe(true), 300)
    jest.runAllTimers()
  })
  it('update value only on change event when lazy', () => {
    const input = customWrapper.find('input')
    input.element.value = 33

    jest.useFakeTimers()
    input.trigger('input')
    setTimeout(() => expect(customWrapper.emitted()['update:value']).not.toBeTruthy(), 1000)
    jest.runAllTimers()

    input.trigger('change')
    expect(customWrapper.emitted()['update:value']).toBeTruthy()
  })
  it('changes value correctly', () => {
    wrapper.setProps({ value: 'new value' })
    expect(wrapper.vm.state).toBe('new value')
  })
})
