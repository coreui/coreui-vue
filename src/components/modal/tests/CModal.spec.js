import { mount } from '@vue/test-utils'
import Component from '../CModal'

const ComponentName = 'CModal'
const defaultWrapper = mount(Component, { attachToDocument: true })
const defaultWrapper2 = mount(Component, { 
  propsData: {
    show: true,
    onKey: function(type, key){
      return key===32
    }
  },
  attachToDocument: true 
})
const customWrapper = mount(Component, {
  propsData: {
    show: true,
    centered: true,
    title: 'modal title',
    size: 'lg',
    color: 'success',
    borderColor: 'success',
    fade: true,
    backdrop: true,
    closeOnBackdrop: false,
    addContentClasses: 'additional-content-class',
  },
  slots: {
    default: 'CModal body'
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
  it('hides on backdrop click when closeOnBackdrop prop is true', () => {
    const click = () => customWrapper.find('.modal').trigger('click')
    click()
    expect(customWrapper.emitted()['update:show']).not.toBeTruthy()

    customWrapper.setProps({ closeOnBackdrop: true })
    click()
    expect(customWrapper.emitted()['update:show']).toBeTruthy()
  })
  it('doesnt animate when fade prop is set to false', () => {
    defaultWrapper.setProps({ fade: false })
    defaultWrapper.vm.toggle(true)
    expect(defaultWrapper.vm.isTransitioning).toBe(false)
  })
  it('toggles visibility correctly', () => {
    jest.useFakeTimers()

    customWrapper.setProps({ show: false })
    expect(customWrapper.vm.isTransitioning).toBe(true)
    jest.runAllTimers()

    jest.useFakeTimers()
    setTimeout(() => {
      expect(customWrapper.vm.isTransitioning).toBe(false)
    }, 200)
    jest.runAllTimers()
  })
  it('Close on default key -> ESC (modal donot show=true on mounted)', () => {
    defaultWrapper.setProps(
    { 
      show: true, 
    })
    defaultWrapper.trigger('keydown.esc')
    expect(defaultWrapper.emitted()['update:show']).toBeTruthy()
  })
  it('Close on key defined in onKey function (modal show=true on mounted)', () => {
    defaultWrapper2.trigger('keydown.space')
    expect(defaultWrapper2.emitted()['update:show']).toBeTruthy()
  })
})
