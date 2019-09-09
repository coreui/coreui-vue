import { mount } from '@vue/test-utils'
import Component from '../CCollapse'

const ComponentName = 'CCollapse'
const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    duration: 500,
    show: true,
    navbar: true,
    toggler: 'some_id'
  },
  slots: {
    default: 'CCollapse content'
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
  it('changes state correctly', () => {
    customWrapper.setProps({ show: false })
    expect(customWrapper.vm.visible).toBe(false)
    
    jest.useRealTimers()
    setTimeout(() => customWrapper.setProps({ show: true }), 300)

    setTimeout(() => {
      expect(customWrapper.vm.collapsing).toBe(true)
      expect(customWrapper.vm.visible).toBe(true)
    }, 500)

    setTimeout(() => expect(customWrapper.vm.collapsing).toBe(false), 700)
    // jest.runAllTimers()
  })
})
