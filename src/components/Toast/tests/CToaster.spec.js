import { mount } from '@vue/test-utils'
import Component from '../CToaster'
import CToast from '../CToast'
const ComponentName = 'CToaster'

const toast = {
  render (h) {
    return h(
      CToast, 
      { props: { show: true } }, 
      'toast body'
    )
  }
}

const defaultWrapper = mount(Component)
const customWrapper = mount(Component, {
  propsData: {
    position: 'top-left',
    autohide: 3000,
    closeButton: false,
    fade: false
  },
  slots: {
    default: toast
  }
})

describe(ComponentName, () => {
  it('has a name', () => {
    expect(Component.name).toMatch(ComponentName)
  })
  it('renders correctly', () => {
    expect(defaultWrapper.element).toMatchSnapshot()
  })
  it('renders correctly custom wrapper', () => {
    expect(customWrapper.element).toMatchSnapshot()
  })
})
