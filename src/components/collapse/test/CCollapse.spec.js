import { mount } from '@vue/test-utils'
import CCollapse from '../CCollapse'
import Vue from 'vue'

const ComponentName = 'CCollapse'
const defaultWrapper = mount(CCollapse)
const customWrapper = mount(CCollapse, {
  propsData: {
    duration: 500,
    show: false,
    navbar: true,
    toggler: 'some_id'
  },
  slots: {
    default: 'CCollapse content'
  }
})

const togglerWrapper = mount(CCollapse, {
  attachToDocument: true,
  propsData: {
    duration: 0,
    show: true,
    navbar: true
  },
  slots: {
    default: 'Collapse content'
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(CCollapse.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
  it('changes state correctly', (done) => {
    defaultWrapper.setProps({ show: true })
    expect(defaultWrapper.vm.visible).toBe(true)
    
    setTimeout(() => defaultWrapper.setProps({ show: false }), 500)

    setTimeout(() => {
      expect(defaultWrapper.vm.collapsing).toBe(false)
      done()
    }, 1000)
  })
  it('changes state during collapsing correctly', () => {
    jest.useFakeTimers()
    customWrapper.setProps({ show: true })

    //probably have to be in one place, TODO: test second click in time space
    setTimeout(() => {
      customWrapper.setProps({ show: false })
      customWrapper.setProps({ show: true })
    }, 100)

    setTimeout(() => {
      expect(customWrapper.vm.collapsing).toBe(false)
    }, 700)
    jest.runAllTimers()
  })
  it('destroy with no errors', () => {
    try {
      customWrapper.destroy()
    } catch (e) {
      const errors = e
    }
    expect(typeof errors).toBe('undefined')
  })
  it('do not set timer, but reset collapse when duration is set to 0', () => {
    const spy = jest.spyOn(togglerWrapper.vm, 'setFinishTimer')
    togglerWrapper.setProps({show: false})
    expect(spy).not.toBeCalled()
    expect(togglerWrapper.emitted().finish).toBeTruthy()
  })
})
