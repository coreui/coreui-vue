import { mount } from '@vue/test-utils'
import Component from '../CModal'

const ComponentName = 'CModal'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    visible: true,
    centered: true,
    title: 'modal title',
    size: 'lg',
    variant: 'success',
    borderVariant: 'success',
    noFade: false,
    noBackdrop: false,
    noCloseOnBackdrop: true,
    noFooter: true,
    addModalClasses: 'additional-modal-class',
    addDialogClasses: 'additional-dialog-class',
    addContentClasses: 'additional-content-class'
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
  it('hides on backdrop click', () => {
    const click = () => customWrapper.find('.modal').trigger('click')
    click()
    expect(customWrapper.emitted().accepted).not.toBeTruthy()

    customWrapper.setProps({ noCloseOnBackdrop: false })
    click()
    expect(customWrapper.emitted().accepted).toBeTruthy()
  })
  it('doesnt animate when noFade prop is set', () => {
    defaultWrapper.setProps({ noFade: true })
    defaultWrapper.vm.toggle(true)
    expect(defaultWrapper.vm.isTransitioning).toBe(false)
  })
  it('toggles visibility correctly', () => {
    jest.useFakeTimers()

    customWrapper.setProps({ visible: false })
    expect(customWrapper.vm.isTransitioning).toBe(true)
    jest.runAllTimers()

    jest.useFakeTimers()
    setTimeout(() => {
      expect(customWrapper.vm.isTransitioning).toBe(false)
    }, 200)
    jest.runAllTimers()
  })
})
