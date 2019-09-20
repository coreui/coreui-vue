import { mount } from '@vue/test-utils'
import Component from '../CDropdown'

//needed for popper.js
global.document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: 'BODY',
    ownerDocument: document,
  },
})

const ComponentName = 'CDropdown'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    togglerText: 'Dropdown button',
    show: true,
    disabled: true,
    addMenuClasses: 'additional-menu-class',
    addTogglerClasses: 'additional-toggler-class',
    nav: false,
    noCaret: true,
    variant: 'success',
    size: 'lg',
    split: true,
    offset: 20,
    placement: 'right-end',
    noFlip: true,
  },
  slots: {
    default: 'CDropdown subcomponents'
  }
})

const navWrapper = mount(Component, {
  propsData: {
    togglerText: 'Dropdown button',
    addMenuClasses: 'additional-menu-class',
    addTogglerClasses: 'additional-toggler-class',
    nav: true,
    noCaret: true,
    variant: 'success',
    offset: 20,
    placement: 'left',
    noFlip: true,
    noPopper: true
  },
  slots: {
    default: 'CDropdown subcomponents'
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
  it('renders correctly in nav mode', () => {
    expect(navWrapper.element).toMatchSnapshot()
  })
  it('properly toggle dropdown', () => {
    const toggle = () => {
      jest.useFakeTimers()
      defaultWrapper.find('button').trigger('click')
      jest.runAllTimers()
    }
    const hide = () => {
      jest.useFakeTimers()
      defaultWrapper.vm.hide()
      jest.runAllTimers()
    }

    expect(defaultWrapper.vm.visible).toBe(false)
    toggle()
    expect(defaultWrapper.vm.visible).toBe(true)
    //mimics v-on-clickaway
    hide()
    expect(defaultWrapper.vm.visible).toBe(false)
    hide()
    expect(defaultWrapper.vm.visible).toBe(false)
  })
  it('does not open when dropdown is disabled', () => {
    const toggle = () => {
      jest.useFakeTimers()
      customWrapper.find('.dropdown-toggle-split').trigger('click')
      jest.runAllTimers()
    }
    
    expect(customWrapper.vm.visible).toBe(true)
    toggle()
    expect(customWrapper.vm.visible).toBe(false)
    toggle()
    expect(customWrapper.vm.visible).toBe(false)
  })
})
