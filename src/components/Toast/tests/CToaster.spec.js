import { mount } from '@vue/test-utils'
import Component from '../CToaster'
import CToast from '../CToast'
const ComponentName = 'CToaster'

const toast = {
  render (h) {
    return h(CToast, { props: { show: true } }, 'toast body');
  }
}

const defaultWrapper = mount(Component)
const customWrapper2 = mount(Component, {
  propsData: {
    position: 'top-left',
    titleHtml: 'title',
    noHeader: false,
    autohide: 3000,
    noCloseButton: false,
    noFade: false
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
  it('renders correctly', () => {
    expect(customWrapper2.element).toMatchSnapshot()
  })
})
